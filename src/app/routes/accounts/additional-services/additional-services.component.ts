import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
import { ColDef, GridApi } from 'ag-grid-community';
import { DatePipe } from '@angular/common';
import { data } from 'jquery';
import { runInThisContext } from 'vm';
import { AdditionalServiceEditComponent } from './additional-service-edit/additional-service-edit.component';
import { AgGridAngular} from "ag-grid-angular";
@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.scss']
})


export class AdditionalServicesComponent implements OnInit {
  private currentUser: User; form!: FormGroup; submitted = false; show = false; tab = 0; customerList: any;
  todayDate: any; productdate: any; LabourContractorList: any; ServiceidData: any; tab2 = 0; tab3 = 0;
  AdditionalServicesData: any; productList: any; ServiceNameData: any; LabourChargesList: any
  ServiceChargeID: number = 0;
  labourChargeDetail: Array<ChargesList> = [];
  DetailList: Array<ChargesList> = [];
  COSTDid: number = 0;
  CONSTDid: number = 0;
  serviceDetailList: any;
  serviceDetailId: number = 0;
  AdditionalServicesID: number = 0;
  AdditionalServiceDID: number = 0;
  ServiceNamesData: any;
  AdditionalServiceSave: any;
  getserviceCharge: Array<ChargesList> = [];
  getserviceDetail: Array<CustomerList> = [];
  UnitNameData: Array<any> = [];
  servicerates:any;
  serviceListData: Array<CustomerList> = [];
  ServiceListDetail: Array<CustomerList> = [];
  flag: boolean = false;
  servicerates2:any;
  modename: string = "";
  frameworkComponents: any;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss')
    this.todayDate = dateSendingToServer;
    this.productdate = new Date();//DatePipe('en-US');
    this.frameworkComponents = {
      buttonRenderer: AdditionalServiceEditComponent,
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      CustomerID: ["", Validators.required],
      BillNumber: ["", Validators.required],
      BillDate: ['', Validators.required],
      cbLabourContractorID: ['', Validators.required],
      Remarks: ["", Validators.required],
      AddonMonthlyBill: true,
      cbServiceID: ["",],
      CbUnitName: [""],
      Quantity: [""],
      Description: [""],
      StartTime: [""],
      EndTime: [""],
      TruckNo: [""],
      ContainerNo: [""],
      PerUnitCharges: [""],
      Charges: [""],
      Remarks1: [""],


      // chargescontrol
      ProductID: [""],
      Serviceid: [""],
      Quantitys: [""],
      Rate: [""],
      Rate_L: [""],
      Remarkss: [""]
    });
    this.BindDropdown();

  }

  async BindDropdown() {
    this.api.get('/Customer').subscribe(
      data => { this.customerList = data },
      error => { console.error(error); }
    );
    this.api.get('/LabourContracter').subscribe(
      data => { this.LabourContractorList = data },
      error => { console.error(error); }
    );
    this.api.get('/AdditionalService/GetServiceID').subscribe(
      data => { this.ServiceidData = data },
      error => { console.error(error); }
    );
    this.api.get('/AdditionalService/AdditionalServicesList').subscribe(
      data => { this.AdditionalServicesData = data },
      error => { console.error(error); }
    );
    this.api.get('/ProductList').subscribe(
      data => { this.productList = data },
      error => { console.error(error); }
    );
    this.api.get('/AdditionalService/GetServiceIDfor_AddServiceCharges').subscribe(
      data => { this.ServiceNameData = data },
      error => { console.error(error); }
    );


  }
  OnServiceSelect(event: any) {
    const servicesData = {
      "serviceID": this.form.value.cbServiceID,
      "stateID": 0,
      "customerID": 0,
      "productID": 0,
    }
    this.api.post('/AdditionalService/ServiesCharges_List', servicesData).subscribe(

      data => { this.UnitNameData = data, console.log(this.UnitNameData) },

      error => { console.error(error); }

    );
  }

  OnServiceSelectCharges(event: any){
    const servicesCharges = {
      "serviceID": this.form.value.Serviceid,
      "stateID": 0,
      "customerID": this.form.value.CustomerID,
      "productID": this.form.value.ProductID,
    }
    this.api.post('/AdditionalService/GetAdditionalServiceLabourCharges', servicesCharges).subscribe(

      data => {this.servicerates=data[0]["Rate"]; console.log(this.servicerates)
     this.servicerates2=data[0]["Rate_L"];  console.log(this.servicerates2)},

      error => { console.error(error); }

    );
  }

  get f() { return this.form.controls; }

  tabchange(event: any) {
    this.tab = event;
  }
  tabchange2(event: any) {
    this.tab2 = event;
  }
  tabchange3(event: any) {
    this.tab3 = event;
  }

  OnServiceSelectDate(event: any) {
    if (Number(this.form.value.cbServiceID) == 24) {
      this.show = true;
    } else {
      this.show = false;
    }
  }




  OnAddDetails() {
    //this.ServiceListDetail = [];

    if (this.form.value.cbServiceID == null || this.form.value.cbServiceID == "") {
      alert("Please .... Select Service Name");
      document?.getElementById("cbServiceID")?.focus();
      return;
    } else if (this.form.value.cbLabourContractorID == null || this.form.value.cbLabourContractorID == "") {
      alert("Please .... select LabourContractor ....");
      document?.getElementById("cbLabourContractorID")?.focus();
      return;
    }
   
    else {

      if (this.flag == true) {
        let indexserviceList = this.serviceListData.filter((x: any) => x.AdditionalServiceDID != this.serviceDetailId);
        this.serviceListData = indexserviceList;
      }
      if (this.flag == false) {
        this.serviceDetailId = this.serviceDetailId + 1;
      }



      const coServicenames = this.ServiceidData.filter((x: any) => x.ServiceID == this.form.value.cbServiceID);
      const coLabourContractorName = this.LabourContractorList.filter((x: any) => x.LabourContractorID == this.form.value.cbLabourContractorID);
      console.log("coServicenames", coLabourContractorName);
      console.log("form", this.form);
      this.serviceDetailList = [];
      this.serviceDetailList = {
        AdditionalServiceDID: this.serviceDetailId,
        AdditionalServiceID: this.AdditionalServicesID,
        ServiceID: this.form.value.cbServiceID,
        ServiceName: coServicenames[0].ServiceName,
        Quantity: this.form.value.Quantity,
        Description: this.form.value.Description,
        StartTime: this.form.value.StartTime,
        EndTime: this.form.value.EndTime,
        TruckNo: this.form.value.TruckNo,
        ContainerNo: this.form.value.ContainerNo,
        PerUnitCharges: this.form.value.PerUnitCharges,
        Charges: this.form.value.Charges,
        Remarks: this.form.value.Remarks1,
        LabourContractorID: this.form.value.cbLabourContractorID,
        LabourContractor: coLabourContractorName[0].ContractorName,
      }
      // this.serviceListData = this.serviceDetailList;
      // this.ServiceList.push(this.serviceDetailList);
      // this.ServiceNamesData = this.ServiceList.slice();
      this.serviceListData.push(this.serviceDetailList);
      this.ServiceListDetail = this.serviceListData.slice();
      console.log("this.serviceDetailList", this.ServiceListDetail)
      this.form.controls['cbServiceID'].reset();
      this.form.controls['CbUnitName'].reset();

      this.form.controls['Quantity'].reset();
      this.form.controls['Description'].reset();
      this.form.controls['StartTime'].reset();
      this.form.controls['EndTime'].reset();
      this.form.controls['TruckNo'].reset();
      this.form.controls['ContainerNo'].reset();
      this.form.controls['PerUnitCharges'].reset();
      this.form.controls['Charges'].reset();
      this.form.controls['Remarks1'].reset();
      this.flag =false;
    }
  }

  OnAddChargesClick() {
    if (this.form.value.ProductID == null || this.form.value.ProductID == "") {
      alert("Please .... Select Product Name");
      document?.getElementById("ProductID")?.focus();
      return;
    }
     else if (this.form.value.Serviceid == null || this.form.value.Serviceid == "") {
      alert("Please .... select Service ....");
      document?.getElementById("Serviceid")?.focus();
      return;
    } 

    // this.DetailList = [];
    //this.LabourChargesList = [];
    else {
      if (this.flag == true) {
        let indexLabourList = this.labourChargeDetail.filter((x: any) => x.AdditionalServiceChargeID != this.ServiceChargeID);
        this.labourChargeDetail = indexLabourList;
      }

      if (this.flag == false) {
        this.ServiceChargeID = this.ServiceChargeID + 1;
      }
      const coServicename = this.ServiceNameData.filter((x: any) => x.ServiceID == this.form.value.Serviceid);
      const coProductname = this.productList.filter((x: any) => x.ProductID == this.form.value.ProductID);
      this.LabourChargesList = {
        AdditionalServiceChargeID: this.ServiceChargeID,
        AdditionalServiceDID: this.serviceDetailId,
        ServiceID: this.form.value.Serviceid,
        ServiceName: coServicename[0].ServiceName,
        ProductID: this.form.value.ProductID,
        ProductName: coProductname[0].ProductName,
        Quantity: this.form.value.Quantitys,
        Rate: this.form.value.Rate,
        Rate_L: this.form.value.Rate_L,
        Remarks: this.form.value.Remarkss,
      };
      this.DetailList = this.labourChargeDetail;
      this.DetailList.push(this.LabourChargesList);
      this.labourChargeDetail = this.DetailList.slice();

      console.log("this.LabourChargesList", this.labourChargeDetail);

      // this.form.controls['ProductID'].reset();
      this.form.controls['Serviceid'].reset();
      this.form.controls['Quantitys'].reset();
      this.form.controls['Rate'].reset();
      this.form.controls['Rate_L'].reset();
      this.form.controls['Remarkss'].reset();
      this.flag =false;
    }
  }

  getRowStyle(params:any) {
    if(params.flag==true){
      return { 'background-color': 'pink' }
    }    else{
      return;
    }
  }

  onSubmit(formData: any) {
   
    if (this.form.value.CustomerID == null || this.form.value.CustomerID == "") {
      alert("Please .... Select Customer Name");
      document?.getElementById("CustomerID")?.focus();
      return;
    }
     else if (this.ServiceListDetail.length == 0) {
      alert("Please... Add Service Details ..!!!");

      return;
    } else if (this.labourChargeDetail.length == 0) {
      alert("Please... Add Labour Service Charges ..!!!");

      return;
    }
    else {
      if (this.AdditionalServicesID == 0) {
        this.modename = "New";
      } else {
        this.modename = "Update";
      }
      this.AdditionalServiceSave = {
        AdditionalServiceID: this.AdditionalServicesID,
        WarehouseID: this.currentUser.warehouseId,
        CustomerID: this.form.value.CustomerID,
        BillDate: this.form.value.BillDate,
        BillNumber: this.form.value.BillNumber,
        AddonMonthlyBill: this.form.value.AddonMonthlyBill,
        Remarks: this.form.value.Remarks,
        CreatedBy: this.currentUser.userId,
        Mode: this.modename,
        LTD_AdditionalServiceCharges: this.labourChargeDetail,
        LTD_AdditionalServiceDetailS: this.ServiceListDetail,

      }

      console.log(this.AdditionalServiceSave)
      this.api.post('/AdditionalService/AdditionalServices_Insert', this.AdditionalServiceSave).subscribe(
        data => {
          data;

          this.dialog.alert(data.Table[0]["Column1"]);
          this.BindDropdown();
        },
        error => { console.error(error); }
      );
    }
  }

  onRowDblclickedDetail(a: any) {
    console.log("ssd", a.data);

    // this.serviceDetailId = a.data.AdditionalServiceDID;
    this.form.controls['cbServiceID'].reset();
    this.form.controls['CbUnitName'].reset();
    this.form.controls['cbLabourContractorID'].reset();
    this.form.controls['Quantity'].reset();
    this.form.controls['Description'].reset();
    this.form.controls['StartTime'].reset();
    this.form.controls['EndTime'].reset();
    this.form.controls['TruckNo'].reset();
    this.form.controls['ContainerNo'].reset();
    this.form.controls['PerUnitCharges'].reset();
    this.form.controls['Charges'].reset();
    this.form.controls['Remarks1'].reset();

 const unitdetail= this.UnitNameData.filter((x: any) => x.ServiceID == this.form.value.ServiceID);
    this.form.patchValue({

      cbServiceID: a.data.ServiceID,
      CbUnitName: unitdetail[0].ServiesCharges,
      cbLabourContractorID: a.data.LabourContractorID,
      Quantity: a.data.Quantity,
      Description: a.data.Description,
      StartTime: a.data.StartTime,
      EndTime: a.data.EndTime,
      TruckNo: a.data.TruckNo,
      ContainerNo: a.data.ContainerNo,
      PerUnitCharges: a.data.PerUnitCharges,
      Charges: a.data.Charges,
      Remarks1: a.data.Remarks,

    });
    this.serviceDetailId = a.data.AdditionalServiceDID;

    this.flag = true;
    console.log("Wprk3333", a.data);

    this.tab2 = 0;
  }

  onRowDblclickedCharges(a: any) {
    console.log("ssd", a.data);
    this.form.controls['ProductID'].reset();
    this.form.controls['Serviceid'].reset();
    this.form.controls['Quantitys'].reset();
    this.form.controls['Rate'].reset();
    this.form.controls['Rate_L'].reset();
    this.form.controls['Remarkss'].reset();


    this.form.patchValue({
      ProductID: a.data.ProductID,
      ProductName:a.data.ProductName,
      Serviceid: a.data.ServiceID,
      Quantitys: a.data.Quantity,
      Rate: a.data.Rate,
      Rate_L: a.data.Rate_L,
      Remarkss: a.data.Remarks,


    });
    this.ServiceChargeID = a.data.AdditionalServiceChargeID
    this.flag=true;
    console.log("Wprk3333", a.data);
    this.tab3 = 0;
  }


  editAdditionalServicesData(record: any) {
    console.log("record", record.rowData.AdditionalServiceID)
    this.form.reset();
    this.AdditionalServicesID = record.rowData.AdditionalServiceID;
    const CustomerData = this.customerList.filter((x: any) => x.CustomerName == record.rowData.CustomerName);
    // const AdditinalId=this.AdditionalServicesData.filter((x: any) => x.CustomerName == record.rowData.CustomerName);
    const item: any = {
      AdditionalServiceID: record.rowData.AdditionalServiceID,
      BillDate: record.rowData.BillDate,
      BillNumber: record.rowData.BillNumber,
      CustomerID: CustomerData[0].CustomerID == null ? 0 : CustomerData[0].CustomerID,
      cbLabourContractorID: 0,
      AddonMonthlyBill: true,
      Remarks: record.rowData.Remarks,
      cbServiceID: 0,
      CbUnitName: "",
      Quantity: 0,
      Description: "",
      StartTime: null,
      EndTime: null,
      TruckNo: 0,
      ContainerNo: 0,
      PerUnitCharges: 0,
      Charges: 0,
      Remarks1: "",
      ProductID: 0,
      Serviceid: 0,
      Quantitys: 0,
      Rate: 0,
      Rate_L: 0,
      Remarkss: ""
    }
    const itemdata: any = {
      BillDate: record.rowData.BillDate,
      BillNumber: record.rowData.BillNumber,
      CustomerID: CustomerData[0].CustomerID == null ? 0 : CustomerData[0].CustomerID,
      cbLabourContractorID: 0,
      AddonMonthlyBill: true,
      Remarks: record.rowData.Remarks,
      cbServiceID: 0,
      CbUnitName: "",
      Quantity: 0,
      Description: "",
      StartTime: null,
      EndTime: null,
      TruckNo: 0,
      ContainerNo: 0,
      PerUnitCharges: 0,
      Charges: 0,
      Remarks1: "",
      ProductID: 0,
      Serviceid: 0,
      Quantitys: 0,
      Rate: 0,
      Rate_L: 0,
      Remarkss: ""
    }



    this.api.post('/AdditionalService/Get_AdditionalServiceCharges', item).subscribe(
      //data => {data;console.log(data)
      //},
       data => { this.labourChargeDetail = data },
       error => { console.error(error); }
    );



    this.api.post('/AdditionalService/Get_AdditionalServiceDetail', item).subscribe(

      // data => { data;console.log(data)},
      data => { this.ServiceListDetail = data },
      error => { console.error(error); }
    );

    this.form.setValue(itemdata);
    this.tab = 0;

  }




  ServiceDetailsColumn: ColDef[] = [

    { headerName: 'AdditionalServiceDID', field: 'AdditionalServiceDID', minWidth: 170, hide: false, },
    { headerName: 'AdditionalServiceID', field: 'AdditionalServiceID', hide: true, minWidth: 250, },
    { headerName: 'ServiceID', field: 'ServiceID', hide: true, minWidth: 170, },
    { headerName: 'ServiceName', field: 'ServiceName', minWidth: 170, },
    { headerName: 'Quantity', field: 'Quantity', minWidth: 170, },
    { headerName: 'Description', field: 'Description', minWidth: 170 },
    { headerName: 'StartTime', field: 'StartTime', minWidth: 120 },
    { headerName: 'EndTime', field: 'EndTime', minWidth: 120 },
    { headerName: 'TruckNo', field: 'TruckNo', minWidth: 120 },
    { headerName: 'ContainerNo', field: 'ContainerNo', minWidth: 120 },
    { headerName: 'PerUnitCharges', field: 'PerUnitCharges', minWidth: 120 },
    { headerName: 'Charges', field: 'Charges', minWidth: 120 },
    { headerName: 'Remarks', field: 'Remarks', minWidth: 120 },
    { headerName: 'LabourContractorID', field: 'LabourContractorID', minWidth: 120, hide: true },
    { headerName: 'LabourContractor', field: 'LabourContractor', minWidth: 120 },
  ]



  LabourChargesColumn: ColDef[] = [

    { headerName: 'AdditionalServiceChargeID', field: 'AdditionalServiceChargeID', minWidth: 170, hide: false, },
    { headerName: 'AdditionalServiceDID', field: 'AdditionalServiceDID', hide: true, minWidth: 250, },
    { headerName: 'ServiceID', field: 'ServiceID', hide: true, minWidth: 170, },
    { headerName: 'ServiceName', field: 'ServiceName', minWidth: 170, },
    { headerName: 'ProductID', field: 'ProductID', minWidth: 170, hide: true },
    { headerName: 'ProductName', field: 'ProductName', minWidth: 170 },
    { headerName: 'Quantity', field: 'Quantity', minWidth: 120 },
    { headerName: 'Rate', field: 'Rate', minWidth: 120 },
    { headerName: 'Rate_L', field: 'Rate_L', minWidth: 120 },
    { headerName: 'Remarks', field: 'Remarks', minWidth: 120 },
  ]

  AdditionalServicesDataColumn: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.editAdditionalServicesData.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'AdditionalServiceID',
      field: 'AdditionalServiceID',
      sortable: true,
      minWidth: 80,
      hide: true
    },

    {
      headerName: 'CustomerID',
      field: 'CustomerID',
      sortable: true,
      hide: true
    },

    {
      headerName: 'CustomerName',
      field: 'CustomerName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      sortable: true,
      minWidth: 150,
    },


    {
      headerName: 'BillDate',
      field: 'BillDate',
      sortable: true,
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,
    },
    {
      headerName: 'BillNumber',
      field: 'BillNumber',
      sortable: true,
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 80,

    },
    {
      headerName: 'Remarks',
      field: 'Remarks',
      sortable: true,
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,
    },

  ]



}
export class CustomerList {
  AdditionalServiceDID: number = 0;
  AdditionalServiceID: number = 0;
  ServiceID: number = 0;
  ServiceName: string = "";
  Quantity: number = 0;
  Description: string = "";
  StartTime: Date = new Date();
  EndTime: Date = new Date();
  TruckNo: number = 0;
  ContainerNo: number = 0;
  PerUnitCharges: number = 0;
  Charges: number = 0;
  Remarks: string = "";
  LabourContractorID: number = 0;
  LabourContractor: string = "";

}

export class ChargesList {
  AdditionalServiceChargeID: number = 0;
  AdditionalServiceDID: number = 0;
  ServiceID: number = 0;
  ServiceName: string = "";
  ProductID: number = 0;
  ProcuctName: string = "";
  Quantity: number = 0;
  Rate: number = 0;
  Rate_L: number = 0;
  Remarks: string = ""
}