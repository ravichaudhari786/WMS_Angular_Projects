import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core/authentication/api.service';
import { MtxDialog } from '@ng-matero/extensions';
import { ColDef, GridApi, GridOptions, RowDoubleClickedEvent } from 'ag-grid-community';
@Component({
  selector: 'app-stop-delivery',
  templateUrl: './stop-delivery.component.html',
  styleUrls: ['./stop-delivery.component.scss']
})
export class StopDeliveryComponent implements OnInit {
  tab = 0;
  currentUser: any;
  MyMenus: any;
  form!: FormGroup;
  submitted = false;
  customerList: any = [];
  StopDeliveryList: any = [];
  ReleaseDeliveryList: any = [];
  IsRelease: boolean = false;
  StopDeliveryIDs: any = 0;
  //gridOptions: GridOptions;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {

  }

  ngOnInit(): void {
    this.MyMenus = this.api.getCurrentMenusForButton("StopDelivery");
    this.currentUser = this.api.getCurrentUser();
    console.log(this.currentUser)
    this.form = this.fb.group({
      ckReleaseStopDelivery: [null],
      ckStopDelivery: [null],
      cbcustomer_id: [null, Validators.required],
      txtRemarks: ["", Validators.required],
      txtReleaseRemarks: [""],
    });
    this.BindDropdown();
    this.setStopDeliveryCheck();
  }
  tabCustomerchange(event: any) {
    this.tab = event;
    // if (event == 1) {
    //   this.UserSelectList();
    // }
  }
  onSubmit(fromData: any) {
    this.submitted = true;
    if (this.form.invalid) {
      console.log(this.form)
      return;
    } else {
      const SaveData = {
        "stopDeliveryID": this.StopDeliveryIDs,
        "waherhouseID": this.currentUser.warehouseId,
        "customerID": fromData.controls["cbcustomer_id"].value,
        "release": fromData.controls["ckReleaseStopDelivery"].value == true ? 1 : 0,
        "remarks":fromData.controls["ckReleaseStopDelivery"].value == true? fromData.controls["txtReleaseRemarks"].value:fromData.controls["txtRemarks"].value,
        "createdBy": this.currentUser.userId,
      }
      console.log("onSubmit", SaveData);
      this.api.post('/StopDelivery/StopDeliveryOrder_insert', SaveData).subscribe(
        data => {
          this.dialog.alert(data[0]);
          this.OnResetActions();
          this.BindDropdown();
          this.setStopDeliveryCheck();
        },
        error => { console.error(error); }
      );
    }
  }
  get f() { return this.form.controls; }
  OnResetActions() {
    this.StopDeliveryIDs = 0;
    this.submitted = false;
    this.form.reset();
  }
  async BindDropdown() {
    const ReleaseDeliveryOrderData = {
      "stopDeliveryID": 0,
      "waherhouseID": this.currentUser.warehouseId,
      "customerID": 0,
      "release": 0,
      "remarks": 0,
      "createdBy": 0,
    }
    this.api.get('/Customer').subscribe(
      data => {
        this.customerList = [];
        this.customerList = data
      },
      error => { console.error(error); }
    );
    this.api.post('/StopDelivery/ReleaseDeliveryOrder_List', ReleaseDeliveryOrderData).subscribe(
      data => {
        this.ReleaseDeliveryList = [];
        this.ReleaseDeliveryList = data
      },
      error => { console.error(error); }
    );
    this.api.post('/StopDelivery/StopDeliveryOrder_List', ReleaseDeliveryOrderData).subscribe(
      data => {
        this.StopDeliveryList = [];
        this.StopDeliveryList = data;
      },
      error => { console.error(error); }
    );
  }

  ReleaseDeliveryColumns: ColDef[] = [
    { field: 'StopDeliveryID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CustomerName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Process', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Remarks', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CreatedBy', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CreatedDate', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ReleasRemarks', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ReleaseBy', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ReleaseDate', filter: "agTextColumnFilter", floatingFilter: true },
  ];


  StopDeliveryColumns: ColDef[] = [
    { field: 'StopDeliveryID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CustomerName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CreatedDate', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Remarks', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Created_By', filter: "agTextColumnFilter", floatingFilter: true },
  ];
  setStopDeliveryCheck() {
    this.form.controls["ckReleaseStopDelivery"].setValue(false);
    this.form.controls["ckStopDelivery"].setValue(true);
  }
  ReleaseStopDeliveryChecked(CheckData: any) {
    if (CheckData.target['checked'] == true) {
      this.form.controls['ckReleaseStopDelivery'].setValue(true);
      this.form.controls['ckStopDelivery'].setValue(false);
      this.IsRelease = true;
    }
  }
  StopDeliveryChecked(CheckData: any) {
    if (CheckData.target['checked'] == true) {
      this.form.controls['ckStopDelivery'].setValue(true);
      this.form.controls['ckReleaseStopDelivery'].setValue(false);
      this.IsRelease = false;
    }
  }
  onRowDoubleClick(e: any) {
    this.IsRelease = true;
    this.StopDeliveryIDs = e.data.StopDeliveryID
    const custName = this.customerList.filter((x: any) => x.CustomerName == e.data.CustomerName);
    const formvalueset = {
      "ckReleaseStopDelivery": true,
      "ckStopDelivery": false,
      "cbcustomer_id": custName[0].CustomerID,
      "txtRemarks": e.data.Remarks,
      "txtReleaseRemarks": "",
    }
    console.log("rowDODoubleClicked", formvalueset)
    this.form.setValue(formvalueset);
    setTimeout(async () => {
      document?.getElementById("txtReleaseRemarks")?.focus();
    }, 2000);
  }
}
