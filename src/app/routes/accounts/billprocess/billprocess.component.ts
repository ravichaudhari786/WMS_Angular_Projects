import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ColDef, GridApi } from 'ag-grid-community';
import { ApiService } from '@core';
import { User } from '@core/authentication/interface';
import { MtxDialog} from '@ng-matero/extensions';
@Component({
  selector: 'app-billprocess',
  templateUrl: './billprocess.component.html',
  styleUrls: ['./billprocess.component.scss']
})
export class BillprocessComponent implements OnInit {
  private currentUser: User
  currentDate: any;
  lastDate: any;
  firstDate: any;
  resultdata: any;
  Successdata: any;
  constructor(private fb: FormBuilder, private api: ApiService,public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.todayDate = dateSendingToServer;

  }
  tab = 0;
  InCompany: boolean = false;
  form!: FormGroup;
  todayDate: any;
  ListOfBill: Array<billprocessList> = [];
  newDynamicSave: any = {};
  ngOnInit(): void {
    this.form = this.fb.group({
      BillDate: ['', Validators.required],
      FromDate: ['', Validators.required],
      ToDate: ['', Validators.required],
      ckStorage: [true],
      ckLabour: [false],
      ckInCompanyNames: [false]
    });
    this.SetDates();
  }
  tabchange(event: any) {
    this.tab = event;
  }
  SetDates() {

    this.currentDate = new Date();
    const CurrentMonths = this.currentDate.getMonth() + 1;
    if (CurrentMonths == 1) {
      const Ldt = new Date(this.currentDate.getFullYear() - 1, 12, 0, 23, 59, 59, 999);
      const LDate = new DatePipe('en-US').transform(Ldt, 'yyyy-MM-dd');
      this.lastDate = LDate;
      const Fdt = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
      const FDate = new DatePipe('en-US').transform(Fdt, 'yyyy-MM-dd')
      this.firstDate = FDate;
    } else {
      const Ldt = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0, 23, 59, 59, 999);
      const LDate = new DatePipe('en-US').transform(Ldt, 'yyyy-MM-dd');
      this.lastDate = LDate;
      const Fdt = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
      const FDate = new DatePipe('en-US').transform(Fdt, 'yyyy-MM-dd')
      this.firstDate = FDate;
    }
  }

  OnSaveBillProcess() {
    
    this.newDynamicSave={};
    
    if (this.form.controls["ckStorage"].value == true) {
      const listSavedata =
      {
        "BillDate": this.form.controls["BillDate"].value,
        "BillStartDate": this.form.controls["FromDate"].value,
        "BillEndDate": this.form.controls["ToDate"].value,
        "WarehouseID": this.currentUser.warehouseId,
        "CreatedBy": this.currentUser.userId,
        "InCompanyName": this.form.controls["ckInCompanyNames"].value,
        "customers": "string",
        "invoiceType": 2
      };
      console.log(listSavedata)
      this.api.post('/BillProcess/Invoice_Process_storage', listSavedata).subscribe(
        data => {
          this.Successdata=data;
          if (this.Successdata.length == 0) {
            this.dialog.alert("something went wrong ..... ")
          } else {
            this.dialog.alert("Storage Bill Process Successfully ..... ")
          }
        },
        error => { console.error(error); 
          this.Result_of_billing(2);
        }
      );
    } else if (this.form.controls["ckLabour"].value == true) {
      const listSavedata =  {
        "BillDate": this.form.controls["BillDate"].value,
        "BillStartDate": this.form.controls["FromDate"].value,
        "BillEndDate": this.form.controls["ToDate"].value,
        "WarehouseID": this.currentUser.warehouseId,
        "CreatedBy": this.currentUser.userId,
        "InCompanyName": this.form.controls["ckInCompanyNames"].value,
        "customers": "string",
        "invoiceType": 3
      };
      console.log(listSavedata)
      this.api.post('/BillProcess/Invoice_Process_Labour', listSavedata).subscribe(
        data => {
          this.Successdata=data;
          this.Successdata=data;
          if (this.Successdata.length == 0) {
            this.dialog.alert("something went wrong ..... ")
          } else {
            this.dialog.alert("Storage Bill Process Successfully ..... ")
          }
        },
        error => { console.error(error); 
          this.Result_of_billing(3);
        }
      );
    } else if (this.form.controls["ckStorage"].value == false && this.form.controls["ckStorage"].value == false) {
      this.dialog.alert("Please click atleast one Invoice Type.....")
    }
  }
  Result_of_billing(TypeNo: number) {
    const Listparam =
    {
      "BillDate": this.form.controls["BillDate"].value,
      "BillStartDate": this.form.controls["FromDate"].value,
      "BillEndDate": this.form.controls["ToDate"].value,
      "WarehouseID": this.currentUser.warehouseId,
      "CreatedBy": this.currentUser.userId,
      "InCompanyName": this.form.controls["ckInCompanyNames"].value,
      "customers": "string",
      "invoiceType": TypeNo
    };
    this.api.post('/BillProcess/Invoice_Process_Validation', Listparam).subscribe(
      data => {
        this.resultdata = data;
        if (this.resultdata.length == 0) {
          this.dialog.alert("something went wrong ..... ")
        } else {
          this.dialog.alert("Bill Process Successfully ..... ")
        }
      },
      error => { console.error(error); }
    );
  }
  OnResetBillProcess() {
    this.SetDates();
    
  }
  OnListBillProcess() {
    const Listparam =
    {
      "BillDate": "2023-07-05T06:16:58.734Z",
      "BillStartDate": "2023-07-05T06:16:58.734Z",
      "BillEndDate": "2023-07-05T06:16:58.734Z",
      "WarehouseID": this.currentUser.warehouseId,
      "CreatedBy": 0,
      "InCompanyName": true,
      "customers": "string",
      "invoiceType": 0
    };
    this.api.post('/BillProcess/BillProcess_List', Listparam).subscribe(
      data => {
        this.ListOfBill = [];
        this.ListOfBill = data;
        console.log(data)

      },
      error => { console.error(error); }
    );
  }
  isStorageChecked(event: any) {
    if (event.target['checked'] == true) {
      this.form.controls['ckLabour'].setValue(false);
      this.InCompany = false;
    } else {
      this.form.controls['ckLabour'].setValue(true);
      this.InCompany = true;
    }
  }
  isLabourChecked(event: any) {
    if (event.target['checked'] == true) {
      this.form.controls['ckStorage'].setValue(false);
      this.InCompany = true;
    } else {
      this.form.controls['ckStorage'].setValue(true);
      this.InCompany = false;
    }
  }
  onRowDblclickedDetail(a: any) {

  }
  ServiceDetailsColumn: ColDef[] = [

    { headerName: 'InvoiceID', field: 'InvoiceID', hide: true, minWidth: 170 },
    { headerName: 'InvoiceNo', field: 'InvoiceNo', minWidth: 250, },
    { headerName: 'InvoiceDate', field: 'InvoiceDate', minWidth: 170, },
    { headerName: 'CustomerName', field: 'CustomerName', minWidth: 170, },
    { headerName: 'InvoiceType', field: 'InvoiceType', minWidth: 170, },
    { headerName: 'WareHouseName', field: 'WareHouseName', minWidth: 170 },
    { headerName: 'InvoiceAmount', field: 'InvoiceAmount', minWidth: 120 },

  ]
}
export class billprocessList {

  InvoiceID: number = 0;
  InvoiceNo: string = "";
  InvoiceDate: Date = new Date();
  CustomerName: string = "";
  InvoiceType: string = "";
  WareHouseName: string = "";
  InvoiceAmount: number = 0;

}