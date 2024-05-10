import { Component, OnInit, TemplateRef, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core/authentication/api.service';
import { MtxDialog } from '@ng-matero/extensions';
import { DatePipe } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BrandsComponent } from 'app/routes/master/brands/brands.component';
import { InwardActionButtonComponent } from '../inward/inward-action-button/inward-action-button.component';
@Component({
  selector: 'app-repacking',
  templateUrl: './repacking.component.html',
  styleUrls: ['./repacking.component.scss']
})
export class RepackingComponent implements OnInit {
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
  };
  tab: any = 0
  MyMenus: any = [];
  currentUser: any = [];
  form!: FormGroup;
  customerList: any = [];
  submitted = false;
  todayDate: any;
  RepackingProductList: any = [];
  ProductList: any = [];
  ServiceTypeList: any = [];
  StorageAreasList: any = [];
  labourContractorList: any = [];
  brandList: any = [];
  packateCountList: any = [];
  ClassMasterList: any = [];
  BindDropdownData: any = {};
  CurrentLotNo: any;
  Repackingservicelist: any = [];
  componrents: any;
  totalWeight: any = 0;
  AfterAddProductWeight: any = 0;
  beforAddProductWeight: any = 0;
  RepackingDIDs: any = 0;
  InwardDIDs: any = 0;
  InwardLocationIDs: any = 0;
  StorageTypeIDs: any = 0;
  ADDRepackingDetails: Array<TdALLDetails> = [];
  ADDRepackingServiceCharge: Array<TdALLServiceCharges> = [];
  FinalRepackingInwardDetails: Array<TdRepackingInwardDetails> = [];
  FinalRepackingDetail: Array<TdRepackingDetails> = [];
  FinalRepackingService: Array<TdRepackingServiceCharge> = [];
  RepackingIDs: any = 0
  detailfdata: any = {};
  RepackingList: any = [];
  frameworkComponents: any;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog, private modalService: NgbModal,) {
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
    this.todayDate = dateSendingToServer;
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
  }

  ngOnInit(): void {
    this.MyMenus = this.api.getCurrentMenusForButton("Repacking");
    this.currentUser = this.api.getCurrentUser();
    this.BindDropdownData = {
      InwardID: 0,
      CustomerID: 0,
      Remarks: 0,
      CreatedBy: 0,
      serviceID: 0,
      ProductID: 0,
      CompanyId: Number(this.currentUser.companyId),
      WarehouseId: Number(this.currentUser.warehouseId),
      FinantialYearId: Number(this.currentUser.FinantialYearId),
      challan: 0,
      StorageAreaMasterID: 1,
      FinancialYear: "",
    }
    this.form = this.fb.group({
      cbCustomerID: ['', Validators.required],
      dtRepacking_Date: [null, Validators.required],
      txtOrderGivenBy: ["", Validators.required],
      txtRemarks: ["", Validators.required],
      txtLotNo: [""],
      cbProductID: [null],
      txtBeforBrand: [""],
      txtBeforCount: [""],
      txtBeforBillingCycle: [null],
      cbBeforServiceType: [null],
      cbBeforLocation: [null],
      cbBeforLabourContractorID: [null],
      txtBeforBalanceQty: [""],
      txtBeforRepackingQty: [""],
      txtBeforTotalWeight: [0],
      txtNewLotNo: [""],
      cbAfterProductID: [null],
      txtAfterWeight: [""],
      txtAfterRepackingQty: [0],
      txtAfterProductWeight: [0],
      cbAfterBrand: [null],
      cbAfterCount: [null],
      cbAfterServiceType: [null],
      cbAfterLocation: [null],
      cbAfterLabourContractor: [null],
      txtAfterRemarks: [""],
      cbAfterClass: [null],
      txtAfter_AfterWeight: [""],
    });
    this.BindDropdown();
  }
  tabRepackingChnage(event: any) {
    this.tab = event;
  }

  get f() { return this.form.controls; }
  async BindDropdown() {
    const DataParam = {
      warehouseID: this.currentUser.warehouseId,
      StorageAreaID: 0,
      LTD_StorageAreaS: null,
      createdBy: 0,
      BlockID: 0,
    }
    this.api.get('/Customer').subscribe(
      data => {
        this.customerList = [];
        this.customerList = data
      },
      error => { console.error(error); }
    );
    this.api.get('/brand').subscribe(
      data => {
        this.brandList = [];
        this.brandList = data
      },
      error => { console.error(error); }
    );
    this.api.get('/ProductList').subscribe(
      data => {
        this.ProductList = [];
        this.ProductList = data
      },
      error => { console.error(error); }
    );
    this.api.get('/Inward/BindSericeType').subscribe(
      data => {
        this.ServiceTypeList = [];
        this.ServiceTypeList = data
      },
      error => { console.error(error); }
    );
    this.api.post('/Storage/StorageArea_Select', DataParam).subscribe(
      data => {
        this.StorageAreasList = [];
        this.StorageAreasList = data;
      },
      error => { console.error(error); }
    );
    this.api.get('/LabourContracter').subscribe(
      data => { this.labourContractorList = data },
      error => { console.error(error); }
    );

    this.api.get('/CountInPacket').subscribe(
      data => {
        this.packateCountList = [];
        this.packateCountList = data
      },
      error => { console.error(error); }
    );
    this.api.get('/Repacking/ClassMaster_Select').subscribe(
      data => {
        this.ClassMasterList = [];
        this.ClassMasterList = data
      },
      error => { console.error(error); }
    );
    this.api.post('/Inward/GetLotNo', this.BindDropdownData).subscribe(
      data => {
        this.form.controls["txtNewLotNo"].setValue(data[0]["LotNo"])
        this.CurrentLotNo = data[0]["LotNo"];
      }, error => { console.error(error); });
    this.GetRepackingList();
  }
  GetCustomerID(CustomerData: any) {
    if (CustomerData != null) {
      console.log(CustomerData.CustomerID)
      this.api.get('/Repacking/GetRepackingProductList?CustomerID=' + String(CustomerData.CustomerID)).subscribe(
        data => {
          this.RepackingProductList = [];
          this.RepackingProductList = data
        },
        error => { console.error(error); }
      );
    }


  }
  getStorageTypeID(service_ids: any) {
    const InServiceData = {
      InwardID: 0,
      CustomerID: Number(this.form.value.customer_id),
      Remarks: "",
      CreatedBy: 0,
      serviceID: Number(service_ids),
      ProductID: Number(this.form.value.product_id),
      CompanyId: 0,
      WarehouseId: 0,
      FinantialYearId: 0,
      challan: "",
      StorageAreaMasterID: 0,
      FinancialYear: "",
    };
    this.api.post('/Inward/GetServiceId', InServiceData).subscribe(
      data => {
        this.StorageTypeIDs = 0;
        this.StorageTypeIDs = data[0]["StorageAreaTypeID"]
      },
      error => { console.error(error); }
    );
  }
  onProductListRowClicked(eventdata: any) {
    const ServiceData = {
      "productID": eventdata.data.ProductID,
      "customerID": this.form.controls["cbCustomerID"].value.CustomerID
    }
    console.log("onProductListRowClicked", eventdata.data)
    this.api.post('/Repacking/GetRepackingServices', ServiceData).subscribe(
      data => {
        this.Repackingservicelist = [];
        this.Repackingservicelist = data.Table;
        this.form.controls["txtLotNo"].setValue(eventdata.data.LotNo);
        this.form.controls["cbProductID"].setValue(eventdata.data.ProductID);
        this.form.controls["txtBeforBrand"].setValue(eventdata.data.BrandName);
        this.form.controls["txtBeforCount"].setValue(eventdata.data.CountInPacket);
        this.form.controls["cbBeforServiceType"].setValue(eventdata.data.ServiceID);
        this.form.controls["cbBeforLocation"].setValue(eventdata.data.StorageAreaID);
        this.form.controls["cbBeforLabourContractorID"].setValue(eventdata.data.LabourContractorID);
        this.form.controls["cbAfterLabourContractor"].setValue(eventdata.data.LabourContractorID);
        this.form.controls["cbAfterServiceType"].setValue(eventdata.data.ServiceID);
        this.form.controls["txtBeforBalanceQty"].setValue(eventdata.data.BalanceQuantity);
        this.InwardDIDs = eventdata.data.InwardDID;
        this.InwardLocationIDs = eventdata.data.InwardLocationID;

        this.getStorageTypeID(eventdata.data.ServiceID);

        this.api.get('/Repacking/GeProductWeight?ProductID=' + String(eventdata.data.ProductID)).subscribe(
          data => {
            this.totalWeight = 0;
            this.totalWeight = Number(data[0].Weight);
            document?.getElementById("txtBeforRepackingQty")?.focus();
          }, error => { console.error(error); });
      }, error => { console.error(error); });

  }
  RepackingProductcolumnDefs: ColDef[] = [
    { headerName: "InwardDID", field: "InwardDID", hide: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "LotNo", field: "LotNo", hide: false, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "ProductID", field: "ProductID", hide: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "ProductName", field: "ProductName", filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "InwardLocationID", field: "InwardLocationID", hide: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "StorageAreaID", field: "StorageAreaID", filter: 'agTextColumnFilter', floatingFilter: true, hide: true, },
    { headerName: "Location", field: "Location", filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "BalanceQuantity", field: "BalanceQuantity", hide: false, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "BrandName", field: "BrandName", hide: false, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "CountInPacket", field: "CountInPacket", filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "StorageAreaTypeID", field: "StorageAreaTypeID", hide: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "StorageAreaType", field: "StorageAreaType", filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "LabourContractorID", field: "LabourContractorID", hide: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "ContractorName", field: "ContractorName", filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: "ProductRemarks", field: "ProductRemarks", filter: 'agTextColumnFilter', floatingFilter: true, },
  ];

  RepackingserviceColumns: ColDef[] = [
    { field: 'ServiceID', hide: true, resizable: true },
    { field: 'ServiceName', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    {
      field: 'C_Rate', hide: false, width: 80, cellEditorPopup: true,
      editable: true, valueParser: "Number(newValue)", sort: "desc", filter: 'agNumberColumnFilter',
      floatingFilter: true,
      cellEditorPopupPosition: 'defualt',
      cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: 'green' };
        }
        return { color: 'black', backgroundColor: 'transparent' };
      }
    },
    {
      field: 'L_Rate', hide: false, width: 80, cellEditorPopup: true,
      editable: true, valueParser: "Number(newValue)", sort: "desc", filter: 'agNumberColumnFilter',
      floatingFilter: true,
      cellEditorPopupPosition: 'defualt',
      cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: 'green' };
        }
        return { color: 'black', backgroundColor: 'transparent' };
      }
    },
  ];


  onkeyupRepackingQty(event: any) {
    this.form.controls["txtBeforRepackingQty"].setValue(event.target.value);
    if (event.target.value != null || event.target.value != "") {
      if (Number(event.target.value) > Number(this.form.controls["txtBeforBalanceQty"].value)) {
        this.form.controls["txtBeforRepackingQty"].setValue(0);
        this.dialog.alert("Repacking Quantity does not greater than Balance Quantity...");
        document?.getElementById("txtBeforRepackingQty")?.focus();
        const Tot = Number(this.totalWeight) * Number(event.target.value);
        this.form.controls["txtBeforTotalWeight"].setValue(Tot);
      } else {
        const Tot = Number(this.totalWeight) * Number(event.target.value);
        this.form.controls["txtBeforTotalWeight"].setValue(Tot);
      }

    } else {
      this.form.controls["txtBeforRepackingQty"].setValue(0);
    }
  }
  onFocusOutRepackingQty(event: any) {
    if (event.target.value == null || event.target.value == "") {
      this.form.controls["txtBeforRepackingQty"].setValue(0);
    }
  }

  GetcbAfterProductIdWeight(events: any) {

    if (events.ProductID > 0) {
      this.api.get('/Repacking/GeProductWeight?ProductID=' + String(events.ProductID)).subscribe(
        data => {
          this.form.controls["txtAfterWeight"].setValue(data[0].Weight);
        }, error => { console.error(error); });
    }
  }
  GetcbAfterBrand(eventB: any) {
    if (eventB.BrandID > 0) {

    }
  }
  onkeyupAfterRepackingQty(eventk: any) {
    //console.log(eventk.target.value)
    if (Number(eventk.target.value) >= 0) {
      const Totals = Number(this.form.controls["txtAfterWeight"].value) * Number(eventk.target.value);
      this.form.controls["txtAfterProductWeight"].setValue(Totals);
      const AfterADDTotal = Number(Totals) + Number(this.AfterAddProductWeight);
      this.form.controls["txtAfter_AfterWeight"].setValue(AfterADDTotal);
      if (Number(this.form.controls["txtBeforTotalWeight"].value) < Number(this.form.controls["txtAfter_AfterWeight"].value)) {
        this.dialog.alert("Repacking Weight does not greater than Balance Total Weight...");
        this.form.controls["txtAfter_AfterWeight"].setValue(this.AfterAddProductWeight);
        this.form.controls["txtAfterRepackingQty"].setValue(0);
      }
    }
  }

  ResetAfterProductAdd() {
    this.form.controls["cbAfterProductID"].reset();
    this.form.controls["txtAfterWeight"].reset();
    this.form.controls["txtAfterRepackingQty"].reset();
    this.form.controls["txtAfterProductWeight"].reset();
    this.form.controls["cbAfterBrand"].reset();
    this.form.controls["cbAfterCount"].reset();
    this.form.controls["cbAfterServiceType"].reset();
    this.form.controls["cbAfterLocation"].reset();

    this.form.controls["txtAfterRemarks"].reset();
    this.form.controls["cbAfterClass"].reset();
  }
  ResetBefterProductAdd() {
    this.form.controls["txtAfter_AfterWeight"].reset();
    this.form.controls["cbAfterLabourContractor"].reset();

    this.form.controls["txtLotNo"].reset();
    this.form.controls["cbProductID"].reset();
    this.form.controls["txtBeforBrand"].reset();
    this.form.controls["txtBeforCount"].reset();
    this.form.controls["cbBeforServiceType"].reset();
    this.form.controls["cbBeforLocation"].reset();
    this.form.controls["cbBeforLabourContractorID"].reset();
    this.form.controls["cbAfterLabourContractor"].reset();
    this.form.controls["cbAfterServiceType"].reset();
    this.form.controls["txtBeforBalanceQty"].reset();

    this.form.controls["txtBeforRepackingQty"].reset();
    this.form.controls["txtBeforRepackingQty"].setValue(0);
  }
  // onAfterADDRepackingDetails() {
  //   this.AfterAddProductWeight = this.AfterAddProductWeight + Number(this.form.controls["txtAfter_AfterWeight"].value);
  //   this.form.controls["txtAfter_AfterWeight"].setValue(this.AfterAddProductWeight);

  //   this.form.controls["txtNewLotNo"].setValue(this.CurrentLotNo);
  // }
  OnADDRepacking() {
    this.dialog.alert("work");
    if (Number(this.form.controls["txtBeforTotalWeight"].value) >= Number(this.form.controls["txtAfter_AfterWeight"].value)) {

      //console.log("ADD_Json1", this.detailfdata);
      this.detailfdata = []
      //this.ADDRepackingServiceCharge = []
      this.RepackingDIDs = this.RepackingDIDs + 1;
      const DetailsData = this.ADDRepackingDetails.filter((x: any) => x.RepackingDID != this.RepackingDIDs);
      this.ADDRepackingDetails = DetailsData;

      const ServicesData = this.Repackingservicelist.filter((x: any) => x.RepackingDID != this.RepackingDIDs);
      this.Repackingservicelist = ServicesData;

      this.Repackingservicelist.forEach((elementS: any) => {
        this.ADDRepackingServiceCharge.push(
          {
            "RepackingDID": this.RepackingDIDs,
            "ServiceID": elementS.ServiceID,
            "ServiceName": elementS.ServiceName,
            "C_Rate": elementS.C_Rate,
            "L_Rate": elementS.L_Rate,
          }
        )
      });

      this.AfterAddProductWeight = this.AfterAddProductWeight + Number(this.form.controls["txtAfterProductWeight"].value);
      this.form.controls["txtAfter_AfterWeight"].setValue(this.AfterAddProductWeight);

      const oldProdct = this.ProductList.filter((x: any) => x.ProductID == Number(this.form.controls["cbProductID"].value));
      const Oldbrand = this.brandList.filter((x: any) => x.BrandName == String(this.form.controls["txtBeforBrand"].value));
      const OldStoragearea = this.StorageAreasList.filter((x: any) => x.StorageAreaID == Number(this.form.controls["cbBeforLocation"].value));
      const OldService = this.ServiceTypeList.filter((x: any) => x.StorageAreaTypeID == Number(this.form.controls["cbBeforServiceType"].value));
      const NewService = this.ServiceTypeList.filter((x: any) => x.StorageAreaTypeID == Number(this.form.controls["cbAfterServiceType"].value));
      const OldLabourCont = this.labourContractorList.filter((x: any) => x.LabourContractorID == Number(this.form.controls["cbBeforLabourContractorID"].value));
      const NewLabourCont = this.labourContractorList.filter((x: any) => x.LabourContractorID == Number(this.form.controls["cbAfterLabourContractor"].value));
      const RepackDetailAdd = {
        "RepackingDID": this.RepackingDIDs,
        "InwardDID": this.InwardDIDs,
        "LotNo": this.form.controls["txtLotNo"].value,
        "NewLotNo": this.form.controls["txtNewLotNo"].value,
        "ProductID": this.form.controls["cbProductID"].value,
        "OldProductName": oldProdct[0].ProductName,
        "NewProductID": this.form.controls["cbAfterProductID"].value.ProductID,
        "NewProductName": this.form.controls["cbAfterProductID"].value.ProductName,
        "OldBrandID": Oldbrand[0].BrandID,//this.form.controls["txtBeforBrand"].value,
        "oldBrandName": Oldbrand[0].BrandName,
        "NewBrandID": this.form.controls["cbAfterBrand"].value.BrandID,
        "NewBrandName": this.form.controls["cbAfterBrand"].value.BrandName,
        "InwardLocationID": this.InwardLocationIDs,
        "OldStorageAreaID": this.form.controls["cbBeforLocation"].value,
        "OldStorageArea": OldStoragearea[0].Storage_Area_Name,
        "NewStorageAreaID": this.form.controls["cbAfterLocation"].value.StorageAreaID,
        "NewStorageArea": this.form.controls["cbAfterLocation"].value.Storage_Area_Name,
        "Quantity": this.form.controls["txtBeforRepackingQty"].value,
        "NewQuantity": this.form.controls["txtAfterRepackingQty"].value,
        "OldServiceID": this.form.controls["cbBeforServiceType"].value,
        "OldService": OldService[0].ServiceName,
        "NewServiceID": this.form.controls["cbAfterServiceType"].value,
        "NewService": NewService[0].ServiceName,
        "NewStorageTypeID": this.StorageTypeIDs,
        "OldCountinPacket": this.form.controls["txtBeforCount"].value,
        "NewCountinPacket": this.form.controls["cbAfterCount"].value,
        "OldLabourContracter": OldLabourCont[0].ContractorName,
        "NewLabourContracterID": this.form.controls["cbAfterLabourContractor"].value,
        "NewLabourContracter": NewLabourCont[0].ContractorName,
        "AfterRemarks": this.form.controls["txtAfterRemarks"].value,
        "AfterClassName": this.form.controls["cbAfterClass"].value,
        "ProductTotalWeight": this.form.controls["txtAfter_AfterWeight"].value,
        "ProductWeight": this.form.controls["txtAfterWeight"].value,
      }
      this.CurrentLotNo = Number(this.CurrentLotNo) + 1;
      this.form.controls["txtNewLotNo"].setValue(this.CurrentLotNo);

      this.detailfdata = this.ADDRepackingDetails;
      this.detailfdata.push(RepackDetailAdd);
      this.ADDRepackingDetails = this.detailfdata.slice();
      // this.detailfdata.push(RepackDetailAdd);
      // this.detailfdata.slice();
      // this.ADDRepackingDetails=this.detailfdata
      // this.ADDRepackingDetails.push(RepackDetailAdd);
      // this.ADDRepackingDetails.slice()

      this.ResetAfterProductAdd();
      if (this.form.controls["cbProductID"].value != null) {
        const ServiceData = {
          "productID": this.form.controls["cbProductID"].value,
          "customerID": this.form.controls["cbCustomerID"].value.CustomerID
        }
        this.api.post('/Repacking/GetRepackingServices', ServiceData).subscribe(
          data => {
            this.Repackingservicelist = [];
            this.Repackingservicelist = data.Table;
          }, error => { console.error(error); });

      }

      if (Number(this.form.controls["txtBeforTotalWeight"].value) == Number(this.form.controls["txtAfter_AfterWeight"].value)) {
        this.ResetBefterProductAdd();
        this.Repackingservicelist = [];
        this.AfterAddProductWeight = 0;
        this.form.controls["txtBeforTotalWeight"].setValue(0);
      }
      console.log("ADD_Json2", this.ADDRepackingServiceCharge);
      console.log("ADD_Json3", this.ADDRepackingDetails)
    }
    // else if (Number(this.form.controls["txtBeforTotalWeight"]) == Number(this.form.controls["txtAfter_AfterWeight"])) {
    //     this.ResetAfterProductAdd();
    //     this.onAfterADDRepackingDetails();
    //   }
    else {
      this.dialog.alert("Repacking Quantity does not greater than Balance Quantity...")
    }

  }
  GetStorageAreaTypeID(Eventtype: any) {
    console.log("GetStorageAreaTypeID", Eventtype)
  }
  ADDRepackingDetailColumn: ColDef[] = [
    { field: 'RepackingDID', hide: true },
    { field: 'InwardDID', hide: true, resizable: true },
    { field: 'LotNo', width: 120 },
    { field: 'NewLotNo', hide: false, width: 80 },
    { field: 'InwardLocationID', hide: true, width: 80 },
    { field: 'ProductID', hide: true, resizable: true },
    { field: 'OldProductName', hide: false, resizable: true },
    { field: 'NewProductID', hide: true, width: 80 },
    { field: 'NewProductName', hide: false, width: 80 },
    { field: 'OldBrandID', hide: false, width: 120 },
    { field: 'oldBrandName', width: 120 },
    { field: 'NewBrandID', hide: true },
    { field: 'NewBrandName', width: 120 },
    { field: 'OldStorageAreaID', hide: true, },
    { field: 'OldStorageArea', hide: false },
    { field: 'NewStorageAreaID', hide: true, width: 120 },
    { field: 'NewStorageArea', width: 120 },
    { field: 'Quantity', width: 120 },
    { field: 'NewQuantity', hide: false },
    { field: 'OldServiceID', hide: true, width: 120 },
    { field: 'OldService', width: 120 },
    { field: 'NewServiceID', width: 120, hide: true, },
    { field: 'NewService', hide: false },
    { field: 'NewStorageTypeID', hide: true, width: 120 },
    { field: 'OldCountinPacket', hide: false },
    { field: 'NewCountinPacket', width: 120 },
    { field: 'OldLabourContracter', width: 120 },
    { field: 'NewLabourContracterID', hide: true },
    { field: 'NewLabourContracter', width: 120 },
    { field: 'AfterRemarks', width: 120 },
    { field: 'AfterClassName', width: 120 },
    { field: 'ProductTotalWeight', hide: false },
    { field: 'ProductWeight', width: 120 },
  ];

  OnSaveRepacking(SaveData: any) {

    this.FinalRepackingInwardDetails = [];
    this.FinalRepackingService = [];
    this.ADDRepackingDetails.forEach((electS: any) => {
      const FRID = {
        RepackingDID: electS.RepackingDID,
        NewInwardDID: electS.InwardDID,
        NewLotNo: electS.NewLotNo,
        NewInwardLocationID: electS.InwardLocationID,
        NewStorageAreaID: electS.NewStorageAreaID,
        NewProductID: electS.NewProductID,
        NewQuantity: electS.NewQuantity,
        NewBrandID: electS.NewBrandID,
        NewCountinPacket: electS.NewCountinPacket,
        NewLabourContracterID: electS.NewLabourContracterID,
        NewRemarks: electS.AfterRemarks,
        NewStorageTypeID: electS.NewStorageTypeID,
        NewServiceID: electS.NewServiceID,
        OldLotNo: electS.LotNo,
        ClassName: electS.AfterClassName,
      }
      this.FinalRepackingInwardDetails.push(FRID);
      const FRIDSlice = this.FinalRepackingInwardDetails.slice();
      this.FinalRepackingInwardDetails = FRIDSlice;
    });

    this.ADDRepackingDetails.forEach((electD: any) => {
      const FRepackD = {
        RepackingDID: electD.RepackingDID,
        InwardDID: electD.InwardDID,
        LotNo: electD.LotNo,
        NewLotNo: electD.NewLotNo,
        InwardLocationID: electD.InwardLocationID,
        StorageAreaID: electD.OldStorageAreaID,
        ProductId: electD.ProductID,
        Quantity: electD.Quantity,
        NewProductID: electD.NewProductID,
        NewQuantity: electD.NewQuantity,
        NewBrandID: electD.NewBrandID,
        NewCountinPacket: electD.NewCountinPacket,
        NewStorageAreaID: electD.NewStorageTypeID,
        LabourContractorID: electD.NewLabourContracterID,
        Remarks: electD.AfterRemarks,
        StorageTypeID: electD.NewStorageTypeID,
        ClassName: electD.AfterClassName,
        ProductTotalWeight: electD.ProductTotalWeight,
        ProductWeight: electD.ProductWeight,
      }
      this.FinalRepackingDetail.push(FRepackD);
      const FRepackDSlice = this.FinalRepackingDetail.slice();
      this.FinalRepackingDetail = FRepackDSlice;
    });

    this.ADDRepackingServiceCharge.forEach((electCH: any) => {
      const FRepackCH = {
        RepackingDID: electCH.RepackingDID,
        ServiceID: electCH.ServiceID,
        ServiceName: electCH.ServiceName,
        Rate: electCH.C_Rate,
        Rate_L: electCH.L_Rate,
      }
      this.FinalRepackingService.push(FRepackCH);
      const FRepackCH_Slice = this.FinalRepackingService.slice();
      this.FinalRepackingService = FRepackCH_Slice;
    });
    console.log("ServiceCharge", this.ADDRepackingServiceCharge)
    // console.log("OnSaveRepacking", SaveData)
    // console.log("RepackingInward", this.FinalRepackingInwardDetails)
    // console.log("RepackingDetail", this.FinalRepackingDetail)
    const SaveRepackingData = {
      RepackingID: this.RepackingIDs,
      WarehouseID: Number(this.currentUser.warehouseId),
      CustomerID: this.form.controls["cbCustomerID"].value.CustomerID,
      RepackingDate: this.form.controls["dtRepacking_Date"].value,
      OrderGivenBy: this.form.controls["txtOrderGivenBy"].value,
      Remarks: this.form.controls["txtRemarks"].value,
      CreatedBy: Number(this.currentUser.userId),
      RepackingDetailsModel: this.FinalRepackingDetail,
      RepackingChargesModel: this.FinalRepackingService,// this.ADDRepackingServiceCharge,
      RepackingInwardDetailsModel: this.FinalRepackingInwardDetails,
      FinancialYearID: Number(this.currentUser.FinantialYearId),
      StorageAreaMasterID: 1,
      CompanyID: Number(this.currentUser.companyId)
    };
    console.log("SaveRepackingData", SaveRepackingData);
    this.api.post('/Repacking/SaveRepacking', SaveRepackingData).subscribe(
      data => {
        console.log(data.Table[0].message);
        this.dialog.alert(data.Table[0].message);
        this.GetRepackingList();
      }, error => { console.error(error); });
  }


  columnsRepackingList: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 100,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnRepackingActions.bind(this),

      }
    },
    { field: 'RepackingID', hide: true, resizable: true },
    { field: 'RepackingNo', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    { field: 'CustomerName', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    { field: 'OrderGivenBy', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    { field: 'RepackingDate', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    { field: 'Main_Remarks', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    { field: 'Remarks', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    { field: 'StatusName', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    { field: 'CreatedBy', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },
    { field: 'WareHouseName', width: 120, filter: 'agNumberColumnFilter', floatingFilter: true, },

  ];

  GetRepackingList() {
    let WarehouseID = String(this.currentUser.warehouseId);
    this.api.get('/Repacking/Repacking_List?WarehouseID=' + WarehouseID).subscribe(
      data => {
        this.RepackingList = [];
        this.RepackingList = data;
      }, error => { console.error(error); });
  }
  OnRepackingActions(ActionData: any) {
    if (String(ActionData.actions) == 'Delete') {
      console.log("Delete", ActionData.rowData);
    } else
      if (String(ActionData.actions) == 'Print') {
        console.log("print", ActionData.rowData);
        this.api.get('/Repacking/RepackingReport?RepackingID='+ActionData.rowData.RepackingID).subscribe(
          data => {
            data;
            console.log("RepackingReceipt=>",data)
            var pdfResult = data[0].Base64Str;
            let pdfWindow = window.open("")
            pdfWindow?.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(pdfResult) + "'></iframe>")
            
          },
          error => { console.error(error); }
        );
      }
  }
  OnListRepacking(){
    this.GetRepackingList();
  }

}
export class TdALLDetails {
  RepackingDID: number = 0;
  InwardDID: number = 0;
  LotNo: string = "";
  NewLotNo: string = "";
  ProductID: number = 0;
  OldProductName: string = "";
  NewProductID: number = 0;
  NewProductName: string = "";
  OldBrandID: number = 0;
  oldBrandName: string = "";
  NewBrandID: number = 0;
  NewBrandName: string = "";
  InwardLocationID: number = 0;
  OldStorageAreaID: number = 0;
  OldStorageArea: string = "";
  NewStorageAreaID: number = 0;
  NewStorageArea: string = "";
  Quantity: number = 0;
  NewQuantity: number = 0;
  OldServiceID: number = 0;
  OldService: string = "";
  NewServiceID: number = 0;
  NewService: string = "";
  NewStorageTypeID: number = 0;
  OldCountinPacket: string = "";
  NewCountinPacket: string = "";
  OldLabourContracter: string = "";
  NewLabourContracterID: number = 0;
  NewLabourContracter: string = "";
  AfterRemarks: string = "";
  AfterClassName: string = "";
  ProductTotalWeight: number = 0;
  ProductWeight: number = 0;
}
export class TdALLServiceCharges {
  RepackingDID: number = 0;
  ServiceID: number = 0;
  ServiceName: string = "";
  C_Rate: number = 0;
  L_Rate: number = 0;
}
export class TdRepackingInwardDetails {
  RepackingDID: number = 0;
  NewInwardDID: number = 0;
  NewLotNo: string = "";
  NewInwardLocationID: number = 0;
  NewStorageAreaID: number = 0;
  NewProductID: number = 0;
  NewQuantity: number = 0;
  NewBrandID: number = 0;
  NewCountinPacket: string = "";
  NewLabourContracterID: number = 0;
  NewRemarks: string = "";
  NewStorageTypeID: number = 0;
  NewServiceID: number = 0;
  OldLotNo: string = "";
  ClassName: string = "";
}
export class TdRepackingDetails {
  RepackingDID: number = 0;
  InwardDID: number = 0;
  LotNo: number = 0;
  NewLotNo: number = 0;
  InwardLocationID: number = 0;
  StorageAreaID: number = 0;
  ProductId: number = 0;
  Quantity: number = 0;
  NewProductID: number = 0;
  NewQuantity: number = 0;
  NewBrandID: number = 0;
  NewCountinPacket: number = 0;
  NewStorageAreaID: number = 0;
  LabourContractorID: number = 0;
  Remarks: number = 0;
  StorageTypeID: number = 0;
  ClassName: number = 0;
  ProductTotalWeight: number = 0;
  ProductWeight: number = 0;
}
export class TdRepackingServiceCharge {
  RepackingDID: number = 0;
  ServiceID: number = 0;
  ServiceName: string = "";
  Rate: number = 0;
  Rate_L: number = 0;
}

