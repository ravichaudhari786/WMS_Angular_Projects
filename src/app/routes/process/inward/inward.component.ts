import { Component, OnInit,ElementRef,NgModule,  Pipe, PipeTransform, enableProdMode,TemplateRef,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { User } from '@core/authentication/interface';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn,MtxGridRowClassFormatter  } from '@ng-matero/extensions';
import { BehaviorSubject } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AlertPromise } from 'selenium-webdriver';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NgbCheckBox } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ColDef,GridApi } from 'ag-grid-community';
//import 'ag-grid-enterprise';
import { FooterRowOutlet } from '@angular/cdk/table';
import { findIndex } from 'rxjs/operators';
import { now } from 'moment';
import { AgGridAngular} from "ag-grid-angular";
import { type } from 'os';
import * as $ from 'jquery';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,DxDataGridComponent 
} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { ICON_REGISTRY_PROVIDER_FACTORY } from '@angular/material/icon';
import { ButtonRendererComponent } from 'app/routes/renderer/button-renderer.component';

@Component({
  selector: 'app-inward',
  templateUrl: './inward.component.html',
  styleUrls: ['./inward.component.scss']
})
export class InwardComponent implements OnInit {
  // rowClassFormatter: MtxGridRowClassFormatter = {
  //   success: (data, index) => data.name === 'Boron',
  //   danger: (data, index) => index === 1,
  // };

  public gridInward!:DxDataGridComponent;
  dataSource!: DataSource;
  collapsed = false;
  DeleteInward:any;
  private gridApi!: GridApi;
  OnAddProductClick:boolean=false;
  public gridOptions!: AgGridAngular;
  InwardID: number=0;
  ReceiptNo:string='0';
  DID:number=0;
  Flag:boolean=false;
  click : boolean = false;
  challanid:number=0;
  InwardTransportID:number=0;
  challandid:number=0; closeResult:string='';
  tab=0; 
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  
filtertext!:string;
  form!: FormGroup;
  submitted = false;
  todayDate : any ; test :any; productdate:any;
  CurrentLotNo:any;
  firstlotno:string="";
  StorageId:number=0;
  challanquantity:number=0;
  allocatedQty:number=0;
  outquantity:number=0;
  InwardEdit:any;
  inprocessquantity:number=0;
  balancequantity:number=0;
  transferdid:number=0;
  selectedClient:any;
  product:any;
  focusedRowKey = 117;
  servicesid:number=0;
  ProductRate:number=0;
  isnew:boolean=true;
  customerList:any; productList:any; dockList:any; unloadingList:any;remarkList:any;
  brandList:any;packateCountList:any;serviceTypeList:any;labourContractorList:any;
  inwardservicelist:any;Inwardservicecharges:any;InwardList:any;inwardserviTest:any;
  private currentUser:User;
  InwardDetailList: Array<InwardDetails>=[];
  DetailList: Array<InwardDetails>=[];
  newDynamicInwardDetails: any = {};
  newDynamicInwardtransfer: any = {};  
  InwardchargesList:Array<InwardCharege>=[];
  ChargesList: Array<InwardCharege>=[];
  InwardTransportList:Array<InwardTransport>=[];
  TransportList:Array<InwardTransportData>=[];
  InwardshowStorageArea:Array<InwardStorageArea>=[];
  InwardshowStorage:Array<InwardShowStorageArea>=[];
  InwardValidateStorage:Array<StorageArea>=[];
  storageAreaList:Array<StorageArea>=[];
  customercontactList:any;
  SaveInward:Array<SaveInward>=[];
  SaveInwardlist:Array<SaveInward>=[];
  newDynamicSaveInward: any = {};
  GetInwardListJson:any={};
  InData:any={};  
  InServiceData:any={};
  BindDropdownData:any={};
  frameworkComponents:any;

  public rowSelection = 'multiple';
  //selectedBrand:any;
  constructor(private fb: FormBuilder,private api:ApiService,public dialog: MtxDialog, private modalService: NgbModal,private el: ElementRef) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    this.currentUser=this.api.getCurrentUser();
    //this.todayDate=new Date();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.todayDate=dateSendingToServer;
    this.productdate=new Date();//DatePipe('en-US');
    this.form = this.fb.group({
      customer_id: [null, Validators.required],
      challan_no: [null, Validators.required],
      dock_name: ['', Validators.required],
      inward_date: ['', Validators.required],
      unloading_by: [null, [Validators.required]],
      custremarks: [null, Validators.required],
      transportername: [null, Validators.required],
      truckno: [null, Validators.required],
      container_no: [null, Validators.required],
      selflife: [null, Validators.required],
      product_id: [null, Validators.required],
      brand_id: [null, Validators.required],
      packetcount: [null, Validators.required],
      quantity: [null, Validators.required],
      service_id: [null, Validators.required],
      mgfdate: [null, Validators.required],
      expdate: [null, Validators.required],
      labourcontractor_id: [null, Validators.required],
      lot_no: [null, Validators.required],
      remarks: [null, Validators.required],
      country: ["", Validators.required],
      allocatedQty: [0, Validators.required],
    });
    
  }


  ngOnInit(): void {
    this.BindDropdownData={
      InwardID :0,
      CustomerID :0,
      Remarks :0,
      CreatedBy :0,
      serviceID :0,
      ProductID :0,
      CompanyId :Number(this.currentUser.companyId),
      WarehouseId :Number(this.currentUser.warehouseId),
      FinantialYearId:Number(this.currentUser.FinantialYearId), 
      challan :0,
      StorageAreaMasterID :1,
      FinancialYear :"",
    }
    this.BindDropdown();
    
    // console.log(this.todayDate+'----'+this.productdate);
    // console.log(this.todayDate);
  }

  async BindDropdown(){
    this.api.get('/Customer').subscribe(
      data=>{this.customerList=data},
      error=>{ console.error(error);}
    );

    this.api.get('/dock').subscribe(
     data=>{this.dockList=data},
     error=>{ console.error(error);}
   );

   this.api.get('/UnloadingBy').subscribe(
     data=>{this.unloadingList=data},
     error=>{ console.error(error);}
   );

   this.api.get('/Remarks').subscribe(
     data=>{this.remarkList=data.filter((p:any)=>p.ProcessID==1);},
     error=>{ console.error(error);}
   );

   this.api.get('/brand').subscribe(
     data=>{this.brandList=data},
     error=>{ console.error(error);}
   );

   this.api.get('/CountInPacket').subscribe(
     data=>{this.packateCountList=data},
     error=>{ console.error(error);}
   );

   this.api.get('/LabourContracter').subscribe(
     data=>{this.labourContractorList=data},
     error=>{ console.error(error);}
   );

   this.api.get('/StorageAreaType/servieceStorageAreaType').subscribe(
    data=>{this.serviceTypeList=data},
    error=>{ console.error(error);}
  );

  

  this.api.post('/InwardList',this.BindDropdownData).subscribe(
    data=>{
      this.InwardList=data},
    error=>{ console.error(error);} );

 this.api.post('/Inward/GetLotNo',this.BindDropdownData).subscribe(
  data=>  {this.CurrentLotNo=data[0]["LotNo"];
          console.log(this.CurrentLotNo)},
    error=>{ console.error(error);});

    this.api.get('/StorageAreaMaster',this.BindDropdownData).subscribe(
      data=>{this.storageAreaList=data;},
      error=>{ console.error(error);} );

 }

  get f() { return this.form.controls; }

  GetCustomerID(id:any){
    console.log(this.form.value)
    id=this.form.value.customer_id;
    this.api.post('/Inward/GetCustomerProducts',this.BindDropdownData).subscribe(
      data=>{this.productList=data;//console.log(this.productList);
    },
      error=>{ console.error(error);}
    );
  }
GetServicedetail(){
  this.api.get('/StorageAreaType/servieceStorageAreaType').subscribe(
    data=>{this.serviceTypeList=data},
    error=>{ console.error(error);}
  );
}
  // OnEditInward(){
    
     //var dataGrid = $("#InwardListgrid").data();
    // var selectedKeys = dataGrid.getSelectedRowKeys();
    // var selectedData = dataGrid.getSelectedRowsData();
    // console.log("dataGrid");
   
    //   this.api.post('/Inward/GetInwardDetailsByID?InwardID=53').subscribe(
    // data=>  {this.InwardEdit=data;
    // console.log(this.InwardEdit);},
    // error=>{ console.log(error);}
    // ); 
  // }

  // editIconClick(e:any){
  //   console.log(e);
    // this.api.get('/CountInPacket').subscribe(
    //   data=>{this.packateCountList=data},
    //   error=>{ console.error(error); alert(error)}
    // );
    

    //console.log('/Inward/GetInwardDetailsByID?InwardID='+e.row.data.InwardID);
    
   //else if(e.row.data.Status==52 || e.row.data.Status==0)
    // {
    //   console.log("Sorry,Inward is under process. You can't edit ....!!!");
    // }else if(e.row.data.Status==53)
    // {
    //   console.log("Sorry,Outward already generated.You can't edit ....!!!");
    // }else if(e.row.data.Status==54)
    // {
    //   console.log("Sorry,Inward is already cancelled ....!!!");
    // }
    // console.log(e.row.data);
    // const Inwarditems:any={
    //   customer_id:e.row.data.CustomerID,
    //   challan_no:e.row.data.challan_no==null?0:e.row.data.challan_no,
    //   container_no :e.row.data.container_no,

    //   dock_name:e.row.data.DocID,
    //   inward_date:e.row.data.InwardDate,
    //   unloading_by:e.row.data.UnLoadingBy,
    //   custremarks:e.row.data.Remarks,

    //   //transportername:e.row.data.transportername,
      
     
    // }
    // console.log(Inwarditems);
    // this.form.setValue(Inwarditems);
    
  // }

//   deleteIconClick(e:any){
//     if(e.row.data.Status==51)
//     {
//       console.log("new inward");

//     }else if(e.row.data.Status==52 || e.row.data.Status==0)
//     {
//       console.log("Sorry,Inward is under process. You can't edit ....!!!");
//     }else if(e.row.data.Status==53)
//     {
//       console.log("Sorry,Outward already generated.You can't edit ....!!!");
//     }else if(e.row.data.Status==54)
//     {
//       console.log("Sorry,Inward is already cancelled ....!!!");
//     }
    
// }
// onTabclick(){  
//   console.log("new inward");
//   this.api.post('/Inward/GetInwardDetailsByID?InwardID=53').subscribe(
//     data=>  {this.InwardEdit=data;
//     console.log(this.InwardEdit);},
//     error=>{ console.log(error);}
//     ); 
// }

printIconClick(e:any){
  
//   this.tab=0;
if(e.row.data.Status==51 || e.row.data.Status==5)
{
 
}
}

  OnApplyClick(customer_id:any,challan_no:any){
    console.log(this.form.value.challan_no);
    if(this.form.value.customer_id==null||this.form.value.customer_id==0){
      alert("Select Customers .....");
      document?.getElementById("customer_id")?.focus();
    }else if(this.form.value.challan_no==""||this.form.value.challan_no==null)
    {
      alert("Enter challan No .....");
      document?.getElementById("challan_no")?.focus();
    }
  }

  onCustomerContact(CustomerContactcontent:any){
    if(this.form.value.customer_id==null||this.form.value.customer_id==0){
      alert("Select Customers .....");
      document?.getElementById("customer_id")?.focus();
    }else{
      //console.log("open Customers .....");
      this.api.get('/Inward/GetCustomerContact?customerid='+this.form.value.customer_id).subscribe(
        data=>{this.customercontactList=data;
          console.log(this.customercontactList);
        },
        error=>{ console.error(error);}
      );
      this.modalService.open(CustomerContactcontent);
    }
    
  }

  onCloseCustomerContact(CustomerContactcontent:any){
    this.modalService.dismissAll(CustomerContactcontent);
  }

  //-----------------------------------------------------------------tansport popup
  onCloseTransportContact(TranspoterDetailcontent:any){
    const InwardTransports=this.TransportList.filter((x:any)=>x.TruckNo.length>0);
    this.TransportList=InwardTransports;
    //console.log(this.TransportList);
    this.modalService.dismissAll(TranspoterDetailcontent);
  }
  OnTransportAdd(TranspoterDetailcontent:any)
  {
    if(this.form.value.truckno==null || this.form.value.truckno =="")
    {
      alert("Please .... Enter Truck Number...");
    }
    else
    {
      console.log('truckno= '+this.form.value.truckno);
      if(this.TransportList.length==0){
        this.InwardTransportID=1;
        this.TransportList.push(
          {"InwardTransportID":this.InwardTransportID,
           "TransporterName":this.form.value.transportername,
           "TruckNo":this.form.value.truckno,
           "ContainerNo":this.form.value.container_no,
          });
        this.TransportList.slice();
      }else
      {
        this.InwardTransportID=this.InwardTransportID+1;
      }
      this.modalService.open(TranspoterDetailcontent);
    }
  }

  onRowSelectedTransport(e:any){
    this.InwardTransportID=e.data.InwardTransportID;
  }
  onRemoveTranspoterDetailNewrow(){
    //console.log(this.InwardTransportID);
    const InwardTransports=this.TransportList.filter((x:any)=>x.InwardTransportID!=this.InwardTransportID);
    this.TransportList=InwardTransports;
    //console.log(this.TransportList);
  }
  onAddTranspoterDetailNewrow(){
    this.InwardTransportID=this.InwardTransportID+1;
    const lists=this.TransportList;
    //console.log(this.TransportList);
    lists.push(
      {"InwardTransportID":this.InwardTransportID,
       "TransporterName":'',
       "TruckNo":'',
       "ContainerNo":'',
      });      
      let newRowData = this.TransportList.filter((row) => {
        return row;
      });
      this.TransportList = newRowData;  
      //console.log(this.TransportList);
  }
 

  OnProductSelect(id:any){
    id=this.form.value.product_id;
    this.api.get('/service/InwardService?productID='+id+"&customerID="+this.form.value.customer_id).subscribe(
      data=>{this.inwardservicelist=data},
      error=>{ console.error(error);}
    );
    //console.log(this.inwardservicelist);
  }

  OnBrandSelect(id:any){

  }

  OnServiceSelect(id:any)
  {
    if (this.form.value.customer_id==null){
      alert("Please .... select Customers");
      this.form.controls['product_id'].reset();
      this.form.controls['service_id'].reset();
      this.inwardservicelist=[];
      document?.getElementById("customer_id")?.focus();
      return;
    }
    else if (this.form.value.product_id==null){
      alert("Please .... select Product");
      this.form.controls['product_id'].reset();
      this.form.controls['service_id'].reset();
      this.inwardservicelist=[];
      document?.getElementById("product_id")?.focus();
      return;
    }
    else
    {
      id=this.form.value.service_id;//.StorageAreaTypeID;
      this.InServiceData={
        InwardID :0,
        CustomerID :Number(this.form.value.customer_id),
        Remarks :0,
        CreatedBy :0,
        serviceID :Number(this.form.value.service_id),
        ProductID :Number(this.form.value.product_id),
        CompanyId :0,
        WarehouseId :0,
        FinantialYearId:0, 
        challan :0,
        StorageAreaMasterID :0,
        FinancialYear :"",
      };
      console.log(this.InServiceData);
      this.api.get('/Inward/GetServiceId',this.InServiceData).subscribe(
        data=>{this.servicesid=data[0]["StorageAreaTypeID"]},
        error=>{ console.error(error);}
      );
  
      this.api.get('/Inward/GetInwardProductRate',this.InServiceData).subscribe(
        datas=>{console.log(" mess =>"+datas[0]["Message"]);
        if(datas[0]["Message"]!==''){
          alert(""+datas[0]["Message"])
          this.form.controls['product_id'].reset();
          this.form.controls['service_id'].reset();
          this.inwardservicelist=[];
          document?.getElementById("product_id")?.focus();
        }      
      },errors=>{ console.error(errors);});
    }

    
  }

  OnLabourSelect(id:any){

  }

  // getDropDownText(id:any, object:any){
  //   const selObj = _.filter(object, function (o:any) {
  //       return (_.includes(id,o.id));
  //   });
  //   return selObj;
  // }
 
  // onRowDoubleClick(a:any,e:any)
  // {
  //   console.log(a);
  //   console.log(e);
  // }
onRowDblclicked(a:any,e:any)
{
    this.Flag=true;
    this.GetServicedetail();
    console.log(this.InwardTransportList)
    //-----------------------------------------------------Reset
   this.form.controls['product_id'].reset();
   this.form.controls['brand_id'].reset();
   this.form.controls['packetcount'].reset();
   this.form.controls['service_id'].reset();
   this.form.controls['mgfdate'].reset();
   this.form.controls['expdate'].reset();
   this.form.controls['remarks'].reset();
   this.form.controls['selflife'].setValue('0');
   this.form.controls['quantity'].reset();
   this.form.controls['country'].setValue('');
   this.CurrentLotNo=Number(this.CurrentLotNo)+1;

    this.form.patchValue({
      brand_id:a.cellSelection[0].rowData["BrandID"],
      product_id:a.cellSelection[0].rowData["ProductID"],
      packetcount:a.cellSelection[0].rowData["ItemsInPacket"],
      quantity:a.cellSelection[0].rowData["InQuantity"],
      selflife:a.cellSelection[0].rowData["SelfLife"],
      mgfdate:a.cellSelection[0].rowData["MFGDate"],
      expdate:a.cellSelection[0].rowData["ExpDate"],
      lot_no:a.cellSelection[0].rowData["LotNo"],
      country:a.cellSelection[0].rowData["Country"],
      service_id:a.cellSelection[0].rowData["StorageAreaTypeID"],  
      labourcontractor_id:a.cellSelection[0].rowData["LabourContractorID"],      
  });
  this.DID=a.cellSelection[0].rowData["InwardDID"];
  this.servicesid=a.cellSelection[0].rowData["ServiceID"];
  this.challanid=a.cellSelection[0].rowData["ChallanID"];
  this.challandid=a.cellSelection[0].rowData["ChallanDID"];
  this.firstlotno=a.cellSelection[0].rowData["FirstLotNo"];
  this.challanquantity=a.cellSelection[0].rowData["ChallanQuantity"];
  this.outquantity=a.cellSelection[0].rowData["OutQuantity"];
  this.inprocessquantity=a.cellSelection[0].rowData["InprocessQuantity"];
  this.transferdid=a.cellSelection[0].rowData["TransferDID"];
  this.isnew=a.cellSelection[0].rowData["IsNew"];
  //Get services for edit
  this.inwardservicelist=[];
  this.inwardservicelist=this.InwardchargesList.filter((x:any)=>x.InwardDID==a.cellSelection[0].rowData["InwardDID"])
  this.inwardservicelist.forEach((element:any) => {
    element["Add"]=true;
  });
  this.api.get('/service/InwardService?productID='+a.cellSelection[0].rowData["ProductID"]+"&customerID="+this.form.value.customer_id).subscribe(
    data=>{this.inwardserviTest=data; 
      this.SetServiceTo_inwardservicelist(); 
      },
    error=>{ console.error(error);});
    this.GetStorageAreaList();
    const indexStorageArea=this.InwardshowStorageArea.filter((x:any)=>x.InwardDID==this.DID);
    const resultStorageArea = this.storageAreaList;
    resultStorageArea.forEach(element => {
      indexStorageArea.forEach(test => {
        if (element.StorageAreaID === test.StorageAreaID) {
          element.AllocatedQty = test.StorageQuantity;
        }});
      return element;
    });
    this.storageAreaList=[];
    this.storageAreaList=resultStorageArea;
    var Qtydata = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
    this.allocatedQty=Qtydata; 
    this.form.controls['allocatedQty'].setValue(this.allocatedQty);
    //console.log(this.storageAreaList);
  }
  
  SetServiceTo_inwardservicelist(){
    if(this.inwardserviTest.length>0){
      let result = this.inwardservicelist.concat( this.inwardserviTest.filter( (i2:any) => !this.inwardservicelist.find( (i1:any) => i1.ServiceID == i2.ServiceID ) ) );
      this.inwardservicelist=result;
  }}
  

OnAddClick(){ 
  if(this.storageAreaList.length>0)
  {
    this.InwardValidateStorage=this.storageAreaList.filter((x:any)=>x.AllocatedQty>0);
    if(this.InwardValidateStorage.length>0)
    {
      this.allocatedQty= this.InwardValidateStorage.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
    }
    else
    {
      this.allocatedQty=0;
    }
  }
  if(this.serviceTypeList.length==0)
  {
    this.GetServicedetail();
  }
  if(this.TransportList.length==0)
  {
    this.InwardTransportID=1;
    this.TransportList.push(
        {"InwardTransportID":this.InwardTransportID,
         "TransporterName":this.form.value.transportername,
         "TruckNo":this.form.value.truckno,
         "ContainerNo":this.form.value.container_no,
        });
    this.TransportList.slice();
    //console.log(this.TransportList);
  }
if(this.form.value.truckno==null || this.form.value.truckno==""){
  alert("Please .... Enter Truck number");
  document?.getElementById("truckno")?.focus();
  return;
}else if (this.form.value.product_id==null){
  alert("Please .... select Product");
  document?.getElementById("product_id")?.focus();
  return;
}else if(this.form.value.quantity==null){
  alert("Please... Enter Quantity ..!!!");
  document?.getElementById("quantity")?.focus();
  return;
}else if(this.form.value.service_id==null){
  alert("Please... Select Service Type ..!!!");
  document?.getElementById("service_id")?.focus();
  return;
}else if(this.form.value.labourcontractor_id==null){
  alert("Please... Select labour contractor ..!!!");
  document?.getElementById("labourcontractor_id")?.focus();
  return;
}
else if(this.form.value.quantity!=this.allocatedQty){
  alert("Please... Add storage area quntity ..!!!");
  document?.getElementById("BtnStorageArea")?.focus();
  return;
}
else if(this.Flag==true){
  if(this.ChargesList.length==0) {
    const indexcharges=this.InwardchargesList.filter((x:any)=>x.InwardDID==this.DID);
    this.ChargesList=indexcharges;
    var Qtydata = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
    this.allocatedQty=Qtydata;
  }
  const indexInwardDetail=this.InwardDetailList.filter((x:any)=>x.InwardDID!=this.DID);
  this.InwardDetailList=indexInwardDetail;
  const indexInwardcharges=this.InwardchargesList.filter((x:any)=>x.InwardDID!=this.DID);
  this.InwardchargesList=indexInwardcharges;
  const indexInwardTransper=this.InwardTransportList.filter((x:any)=>x.InwardDID!=this.DID);
  this.InwardTransportList=indexInwardTransper;
  const indexInwardStorageArea=this.InwardshowStorageArea.filter((x:any)=>x.InwardDID!=this.DID);
  this.InwardshowStorageArea=indexInwardStorageArea;

  console.log(this.InwardDetailList);  
}else if(this.Flag==false)
{
  this.DID=this.DID+1;
  this.allocatedQty=0;
}

if(this.form.value.selflife==null ||this.form.value.selflife==''){  this.form.controls['selflife'].setValue('0');   }
if(this.form.value.remarks==null){  this.form.value.remarks=' ';  }
if(this.form.value.brand_id==null){   this.form.value.brand_id=' ';  }
var Brand = this.brandList.filter((x:any) => x.BrandID == this.form.value.brand_id);
var product = this.productList.filter((x:any) => x.ProductID == this.form.value.product_id);
var StorageAreaTypes = this.serviceTypeList.filter((x:any) => x.StorageAreaTypeID == this.form.value.service_id);
var LabourContractors = this.labourContractorList.filter((x:any) => x.LabourContractorID == this.form.value.labourcontractor_id);
if(Brand.length==0){
Brand.push({
  BrandID:0,
  BrandName:''
});
}
if(StorageAreaTypes.length==0){
  StorageAreaTypes.push({
    BrandID:0,
    BrandName:''
  });
  }
this.newDynamicInwardDetails=[];
this.DetailList=[];
this.newDynamicInwardtransfer=[];
//this.TransportList=[];
this.newDynamicInwardDetails={
  InwardDID:this.DID,
  ChallanID:this.challanid,
  ChallanDID:this.challandid,    
  ProductID:this.form.value.product_id,
  ProductName:product[0].ProductName,//this.form.value.product_id.ProductName,
  LotNo:this.form.value.lot_no,
  FirstLotNo:this.firstlotno,    
  BrandID:this.form.value.brand_id,//BrandID:this.form.value.brand_id.BrandID,
  BrandName:Brand[0].BrandName,//this.form.value.brand_id.BrandName,
  ItemsInPacket:this.form.value.packetcount,
  InQuantity:this.form.value.quantity,
  ChallanQuantity:this.challanquantity,
  OutQuantity:this.outquantity,
  InprocessQuantity:this.inprocessquantity,
  BalanceQuantity:this.form.value.quantity,
  MFGDate:this.todayDate,
  ExpDate:this.todayDate,
  Remarks:this.form.value.remarks.Remarks,
  TransferDID:this.transferdid,
  LabourContractorID:this.form.value.labourcontractor_id,//.LabourContractorID,
  LabourContracterName:LabourContractors[0].ContractorName,//this.form.value.labourcontractor_id.ContractorName,
  StorageAreaTypeID:this.servicesid,
  StorageAreaType:StorageAreaTypes[0].ServiceName,//this.form.value.service_id.ServiceName,
  SelfLife:this.form.value.selflife,
  IsNew:this.isnew,
  Country:this.form.value.country,
  ServiceID:this.form.value.service_id//.StorageAreaTypeID     
}; 
this.DetailList=this.InwardDetailList;
 this.DetailList.push(this.newDynamicInwardDetails);
 this.InwardDetailList=this.DetailList.slice();

////--------------Inward Transfer
// this.newDynamicInwardtransfer={
// InwardDID:this.DID,
// LotNo:this.form.value.lot_no,
// TransporterName:this.form.value.transportername,
// TruckNo:this.form.value.truckno,
// ContainerNo:this.form.value.container_no,
// Qty:this.form.value.quantity
// };
// this.TransportList=this.InwardTransportList;
// this.TransportList.push(this.newDynamicInwardtransfer);
// this.InwardTransportList=this.TransportList.slice();


//-------------------InwardChareges
this.ChargesList.forEach(i=>{ 
this.InwardchargesList.push(
{
 "InwardDID":this.DID,
 "ServiceID":i.ServiceID,
 "ServiceName":i.ServiceName,
 "C_Rate":i.C_Rate,
 "L_Rate":i.L_Rate
});
});
this.InwardchargesList.slice();

//-------------------Inward Transport
this.TransportList.forEach(i=>{ 
  this.InwardTransportList.push(
  {
    "InwardDID":this.DID,
    "LotNo":this.form.value.lot_no,
    "TransporterName":i.TransporterName==null?'A':i.TransporterName,
    "TruckNo":i.TruckNo==null?'B':i.TruckNo,
    "ContainerNo":i.ContainerNo==null?'C':i.ContainerNo,
    "Qty":this.form.value.quantity
  });
  });
  this.InwardchargesList.slice();
//---------------------------------InwardStorageArea
this.storageAreaList.forEach(i=>{
if(i.AllocatedQty>0){
  this.InwardshowStorageArea.push(
    {
     "InwardDID":this.DID,
     "StorageAreaID":i.StorageAreaID,
     "StorageQuantity":i.AllocatedQty,
     "LotNo":this.form.value.lot_no,
     "IsCustomerAreaSelected":false
    });
  }   
});
this.InwardshowStorageArea.slice();
// console.log(this.InwardshowStorageArea);
 //--------------------detail
   console.log(this.InwardDetailList);
  console.log(this.InwardchargesList);    
  console.log(this.InwardTransportList);
  console.log(this.InwardshowStorageArea);
  //Reset
  this.form.controls['product_id'].reset();
  this.form.controls['brand_id'].reset();
  this.form.controls['packetcount'].reset();
  this.form.controls['service_id'].reset();
  this.form.controls['mgfdate'].reset();
  this.form.controls['expdate'].reset();
  //this.form.controls['labourcontractor_id'].reset();
  this.form.controls['remarks'].reset();
  //this.form.value.remarks=null;
  this.form.controls['selflife'].setValue('0');
  this.form.controls['quantity'].reset();
  this.form.controls['country'].setValue('');
  this.CurrentLotNo=Number(this.CurrentLotNo)+1;
  this.ChargesList=[];
  this.inwardservicelist=[];
  this.storageAreaList=[];
  this.Flag=false;
  this.GetStorageAreaList();
  // this.api.get('/StorageAreaMaster?WarehouseID='+this.currentUser.warehouseId).subscribe(
  //   data=>{this.storageAreaList=data;this.allocatedQty=0;},
  //   error=>{ console.error(error);}
  // );
  //}
}
GetStorageAreaList(){
  this.api.get('/StorageAreaMaster?WarehouseID='+this.currentUser.warehouseId).subscribe(
    data=>{this.storageAreaList=data;this.allocatedQty=0;},
    error=>{ console.error(error);}
  );
}

// OnProductSelect(args:any) {
//   this.ChargesList=args;
//   //console.log(this.ChargesList);
// }

openStorageArea(StorageAreacontent:any) {
  //console.log(this.form.value.quantity);
  this.allocatedQty=0; 
  if(this.form.value.quantity==null|| this.form.value.quantity==0){
    alert("Please .... Enter Quantity");    
    document?.getElementById("quantity")?.focus();
  }
  else
  {    
    if(this.Flag==true)
    {
      //this.GetStorageAreaList();
      const indexStorageArea=this.InwardshowStorageArea.filter((x:any)=>x.InwardDID==this.DID);
      const resultStorageArea = this.storageAreaList;
      resultStorageArea.forEach(element => {
        indexStorageArea.forEach(test => {
          if (element.StorageAreaID === test.StorageAreaID) {
            element.AllocatedQty = test.StorageQuantity;
          } 
          
        });
        return element;
      });
      this.storageAreaList=[];
      this.storageAreaList=resultStorageArea;
      var Qtydata = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
      this.allocatedQty=Qtydata; 
      this.form.controls['allocatedQty'].setValue(this.allocatedQty);
    }
    else
    {
      if(this.storageAreaList.length>0)
      {
        this.InwardValidateStorage=this.storageAreaList.filter((x:any)=>x.AllocatedQty>0);
        if(this.InwardValidateStorage.length>0)
        {
          this.allocatedQty= this.InwardValidateStorage.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
          this.form.controls['allocatedQty'].setValue(this.allocatedQty);
        }
        else
        {
          this.allocatedQty=0;
          this.form.controls['allocatedQty'].setValue(this.allocatedQty);
        }
      }
    }
    
    this.modalService.open(StorageAreacontent,this.config);
  }
  
}


oncloseStoragearea(StorageAreacontent:any){
  var validatedata = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
  if(this.form.value.quantity==validatedata){
    this.onStorageGridRefresh();
    this.modalService.dismissAll(StorageAreacontent);
    this.allocatedQty=0;    
  }else 
  { 
    alert("Please, Enter correct Quantity ...");
    this.onStorageGridRefresh(); 
    //this.modalService.open(StorageAreacontent)
    this.modalService.dismissAll(StorageAreacontent);
    this.allocatedQty=0; 
  }
  console.log(this.storageAreaList);
}
onSaveStorageArea(StorageAreacontent:any){  
  var validatedata = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
  //this.allocatedQty=validatedata; 
  if(this.form.value.quantity==validatedata)
  {
    this.onStorageGridRefresh(); 
    this.modalService.dismissAll(StorageAreacontent);    
  }else 
  { 
    alert("Please, Enter correct Quantity ...");
    this.onStorageGridRefresh(); 
    this.modalService.open(StorageAreacontent)
    this.allocatedQty=0; 
  }
  console.log(this.storageAreaList);
}

onCellKeyPress(e:any){
  this.allocatedQty=0;
  this.StorageId=e.data.StorageAreaID;
  var data = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
  this.allocatedQty=data;  
  if(this.form.value.quantity>=this.allocatedQty){
    this.form.controls['allocatedQty'].setValue(this.allocatedQty);
      this.storageAreaList.slice();
  }
  else
  {
    this.storageAreaList.forEach(i => {
      if(i.StorageAreaID==e.data.StorageAreaID)
      {
        i.AllocatedQty=0;
      }});
      alert("Please .... enter proper quantity");
  }  
  this.onStorageGridRefresh();
}
onStorageGridRefresh(){
  this.allocatedQty=0;
  var data = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
  this.allocatedQty=data; 
  this.form.controls['allocatedQty'].setValue(this.allocatedQty);
  let newRowData = this.storageAreaList.filter((row) => {
    return row;
  });
  this.storageAreaList = newRowData;
}
// onCellValueChangedStorageArea(content:any){
  // let updatedData=this.storageAreaList;
  // var data = this.storageAreaList.map(v1=>v1.AllocatedQty).reduce((acc, v1) => v1 + acc);
  // this.allocatedQty=data;  
  // //console.log(updatedData);
  
  // if(this.form.value.quantity>=this.allocatedQty){
  //   this.form.controls['allocatedQty'].setValue(this.allocatedQty);
  // }
  // else
  // {
  //   this.storageAreaList=[];
  //   console.log(this.storageAreaList);  
  //   updatedData.forEach(i => {
  //     if(i.StorageAreaID==this.StorageId)
  //     {
  //       i.AllocatedQty=0;
  //     }});
  //     console.log(updatedData);
  //     this.storageAreaList.slice();
  //     this.storageAreaList=updatedData;
  // }  
  // console.log("refesh");
  // console.log(this.storageAreaList);  
//}
Ondeleteclick(e:any){
console.log(e);
}
tabInwardchange(event:any){
    //console.log(this.Inwardtab);
    //console.log("tab=>"+this.tab)
    this.tab=event;
    this.GetInwardList();
  }
  OnSaveinward(){
    
    //console.log(this.form.value.dock_name);
    if(this.form.value.customer_id==null || this.form.value.customer_id==""){
      alert("Please .... Select Customer Name");
      document?.getElementById("customer_id")?.focus();
      return;
    }else if (this.form.value.dock_name==null || this.form.value.dock_name==""){
      alert("Please .... select Dock name ....");
      document?.getElementById("dock_name")?.focus();
      return;
    }else if(this.form.value.inward_date==null){
      alert("Please... Enter inward date ..!!!");
      document?.getElementById("inward_date")?.focus();
      return;
    }else if(this.form.value.unloading_by==null){
      alert("Please... Select unloading by ..!!!");
      document?.getElementById("unloading_by")?.focus();
      return;
    }else if(this.form.value.truckno==null){
      alert("Please... Select truck no ..!!!");
      document?.getElementById("truckno")?.focus();
      return;
    }else if(this.InwardDetailList.length==0){
      alert("Please... Add Product Details ..!!!");
      //document?.getElementById("truckno")?.focus();
      return;
    }else if(this.InwardshowStorageArea.length==0){
      alert("Please... Add Storage Details ..!!!");
      //document?.getElementById("truckno")?.focus();
      return;
    }else if(this.InwardTransportList.length==0){
      alert("Please... Add transport Details..!!!");
      //document?.getElementById("truckno")?.focus();
      return;
    }
    else{
      this.click = true;
      this.newDynamicSaveInward={
        InwardID:this.InwardID,
        CustomerID:this.form.value.customer_id,
        CompanyID:this.currentUser.companyId, 
        WarehouseID:this.currentUser.warehouseId,
        InwardDate:this.form.value.inward_date,
        Remarks:this.form.value.custremarks==null?"":this.form.value.custremarks,
        FinancialYearID:this.currentUser.FinantialYearId,
        UserID:this.currentUser.userId,
        ReceiptNo:this.ReceiptNo,
        dockID:this.form.value.dock_name,
        UnLoadingBy:this.form.value.unloading_by,
        StorageAreaMasterID:1,//this.form.value.StorageAreaMasterID,
      
      InwardDetailModel:this.InwardDetailList,
      InwardChargesModel:this.InwardchargesList,
      InwardLocationModel:this.InwardshowStorageArea,
      InwardTransperModel:this.InwardTransportList
       }     
      // console.log("save");
      // console.log(this.newDynamicSaveInward);
      this.api.post('/Inward/SaveInward',this.newDynamicSaveInward).subscribe(
        data=>{data;
        alert(data.Table[0]["Column1"]);},
        error=>{ console.error(error);}
      );
      this.GetInwardList();
    } 

    console.log("save");
  }
 GetInwardList(){

  this.GetInwardListJson={
    CompanyId:this.currentUser.companyId, 
    WarehouseId:this.currentUser.warehouseId, 
    FinantialYearId:this.currentUser.FinantialYearId,
  }
  
  this.api.post('/InwardList',this.GetInwardListJson).subscribe(
    data=>{this.InwardList=data},
    error=>{ console.error(error);} );
}


  onKeyfilter(e:string){
    this.api.get('/InwardList?companyId='+this.currentUser.companyId+'&warehouseId='
    +this.currentUser.warehouseId+'&finantialYearId='+this.currentUser.FinantialYearId).subscribe(
    data=>{this.InwardList=data;
      var searchName = e;
      const lists=this.InwardList;
      let res = lists.filter((obj:any) => 
      (obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
      (obj.BillingStartDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
      (obj.InwardDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
      (obj.PersonName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
      (obj.ReceiptNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
      (obj.StatusName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) 
      );
      this.InwardList=res;
    },
    error=>{ console.error(error);} );
  }

  SetDataTo_Inwardlist(){
    this.api.get('/InwardList?companyId='+this.currentUser.companyId+'&warehouseId='
    +this.currentUser.warehouseId+'&finantialYearId='+this.currentUser.FinantialYearId).subscribe(
      data=>{this.InwardList=[];
             this.InwardList=data},
      error=>{ console.error(error);} );
  }
onDeleteTestListRow(d:any){
  if(d.Status==51)
  {
    this.api.post('/Inward/DeleteInward?InwardID='+d.InwardID+'&CustomerID='+d.CustomerID+'&Remarks=test_by_angular&CreatedBy='+this.currentUser.userId).subscribe(
      data=>{data;
      alert(data.Table[0]["message"]); 
      this.SetDataTo_Inwardlist();},
      error=>{ console.error(error);}
     ); 
    //document?.getElementById("customer_id")?.focus();
    // this.DeleteInward= document?.getElementById("DeleteInward")?;
    // this.modalService.open(this.DeleteInward);
    
    
  }else if(d.Status==52 || d.Status==0)
  {
    console.log("Sorry,Inward is under process. You can't Delete ....!!!");
    alert("Sorry,Inward is under process. You can't Delete....!!!");
  }else if(d.Status==53)
  {
    console.log("Sorry,Outward already generated.You can't Delete....!!!");
    alert("Sorry,Outward already generated.You can't Delete....!!!");
  }else if(d.Status==54)
  {
    console.log("Sorry,Inward is already cancelled ....!!!");
    alert("Sorry,Inward is already cancelled ....!!!");
  }
}

OnResetInward(){
  this.click = false;
  this.form.reset();
  this.BindDropdown();  
  this.InwardTransportID=0;
  const inwardeditedDate = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd');
  this.todayDate=inwardeditedDate ;
  this.form.controls['inward_date'].setValue(this.todayDate);
  this.InwardDetailList=[];
  this.customercontactList=[];
  this.inwardservicelist=[];
  this.storageAreaList=[];
  this.TransportList=[];
  this.GetStorageAreaList();
  this.DID=0;
  this.InwardID=0;
  this.ReceiptNo='0';
}

   onEditTestListRow(e:any){
    const inwardeditedDate = new DatePipe('en-US').transform(e.InwardDate, 'yyyy-MM-dd')
    if(e.Status==51)
    {
      this.api.post('/Inward/GetCustomerProducts?customerid='+e.CustomerID+'&warehouseid='+this.currentUser.warehouseId).subscribe(
        data=>{this.productList=data; },
        error=>{ console.error(error);}
      );
        this.GetStorageAreaList();
        this.InData={
          InwardID :e.InwardID,
          CustomerID :0,
          Remarks :0,
          CreatedBy :0,
          serviceID :0,
          ProductID :0,
          CompanyId :0,
          WarehouseId :0,
          FinantialYearId:0, 
          challan :0,
          StorageAreaMasterID :0,
          FinancialYear :"",
        };
        this.api.post('/Inward/GetInwardDetailsByID',this.InData).subscribe(
        data=>  {this.InwardDetailList=data.Table;          
        this.InwardshowStorageArea=data.Table1;
        this.InwardTransportList=data.Table2;
        this.InwardchargesList=data.Table3; 
        this.InwardID=e.InwardID;
        this.TransportList
        this.InwardTransportID=0;
        this.ReceiptNo= e.ReceiptNo;

        const distinctTransport = this.InwardTransportList.filter((thing, i, arr) => arr.findIndex(t => t.TruckNo === thing.TruckNo) === i);
        distinctTransport.forEach(i=>{ 
        this.InwardTransportID=this.InwardTransportID+1;
        this.TransportList.push(
          {
            "InwardTransportID":this.InwardTransportID,
            "TransporterName":i.TransporterName==null?'A':i.TransporterName,
            "TruckNo":i.TruckNo==null?'B':i.TruckNo,
            "ContainerNo":i.ContainerNo==null?'C':i.ContainerNo,
          });
          });
      this.TransportList.slice();
      const inwarditem:any={
      customer_id :e.CustomerID ==null?'':e.CustomerID,
      dock_name :e.DocID,
      challan_no:0,
      inward_date:inwardeditedDate,
      unloading_by:e.UnLoadingBy,
      custremarks:e.Remarks,      
      transportername:this.InwardTransportList[0]["TransporterName"]==null?'':this.InwardTransportList[0]["TransporterName"],
      truckno:this.InwardTransportList[0]["TruckNo"]==null?'':this.InwardTransportList[0]["TruckNo"], 
      container_no:this.InwardTransportList[0]["TruckNo"]==null?'':this.InwardTransportList[0]["TruckNo"], 
      selflife:"0",
      product_id:0,
      brand_id:0,
      packetcount:0,
      quantity:0,
      service_id:0, mgfdate:null,expdate:null,
      labourcontractor_id:0,
      lot_no:this.CurrentLotNo,remarks:"",country:"",
      allocatedQty:0,
      }
      this.form.setValue(inwarditem);},error=>{ console.log(error);}); 
      this.tab=0;
      console.log(this.InwardTransportList);
    console.log(this.TransportList);
    }else if(e.Status==52 || e.Status==0)
    {
      console.log("Sorry,Inward is under process. You can't edit ....!!!");
      alert("Sorry,Inward is under process. You can't edit ....!!!");
    }else if(e.Status==53)
    {
      console.log("Sorry,Outward already generated.You can't edit ....!!!");
      alert("Sorry,Outward already generated.You can't edit ....!!!");
    }else if(e.Status==54)
    {
      console.log("Sorry,Inward is already cancelled ....!!!");
      alert("Sorry,Inward is already cancelled ....!!!");
    }   
       
  }

  // onEditInward(e:any) {
  //   console.log(e);
  //   this.tab=0;
  // }

  contentReady(e:any){
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };
  // onSubmit(formData:any){
  //   console.log("onSubmit");
  // }
  checkBoxCellEditRenderer(params:any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      //console.log(val);
      this.ChargesList=[];
      this.inwardservicelist.forEach((i:any)=>{ 
        if(i.Add==true){
          this.ChargesList.push(
            {
             "InwardDID":this.DID,
             "ServiceID":i.ServiceID,
             "ServiceName":i.ServiceName,
             "C_Rate":i.C_Rate,
             "L_Rate":i.L_Rate
            });
          }        
      });
      this.ChargesList.slice();
      //console.log(this.ChargesList);
    });

    //console.log(this.rowData);
    return input;
  }

  columnDefs: ColDef[] = [
    { headerName:'StorageAreaID',field: 'StorageAreaID',hide:true},
    { headerName:'StorageArea',field: 'StorageArea' , checkboxSelection: false,filter: 'agTextColumnFilter',
    filterParams: {
      applyMiniFilterWhileTyping: true,
    },floatingFilter: true, },
    { headerName:'Qty',field: 'AllocatedQty' ,aggFunc: "sum",cellEditorPopup: true,
    editable: true, valueParser: "Number(newValue)"  ,sort:"desc", filter: 'agNumberColumnFilter' ,
    floatingFilter: true, 
    cellEditorPopupPosition: 'defualt',  
    cellStyle: params => {
      if (params.value >0) {
          //mark police cells as red
          return { color: 'white', backgroundColor: 'blue'  };
      }
      return { color: 'black', backgroundColor: 'transparent' };
  }  },
];
AppliedStoragecolumnDefs: ColDef[] = [
  { headerName:'InwardDID',field: 'InwardDID',hide:false},
  { headerName:'LotNo',field: 'LotNo' ,  filter:true },
  { headerName:'TransporterName',field: 'TransporterName' ,filter:true},
  { headerName:'TruckNo',field: 'TruckNo' ,filter:true},
  { headerName:'TransporterName',field: 'TransporterName' ,filter:true},
  { headerName:'ContainerNo',field: 'ContainerNo' ,filter:true},
  { headerName:'Applied Qty',field: 'Qty' ,filter:true},
];

CustomerContactcolumnDefs: ColDef[] = [
  { headerName:'CustomerContactID',field: 'CustomerContactID',hide:true},
  { headerName:'Contact Person',field: 'ContactPersonName'  },
  { headerName:'Mobile No',field: 'MobileNo' },
  { headerName:'Email ID',field: 'EmailID'  },
  { headerName:'Send SMS',field: 'SendSMS'  },
  { headerName:'Send Email',field: 'SendEmail'  },
];
TransperdetailcolumnDefs: ColDef[] = [
  { headerName:'InwardTransportID',field: 'InwardTransportID',hide:true},
  { headerName:'TransporterName',field: 'TransporterName', editable: true,},
  { headerName:'TruckNo',field: 'TruckNo', editable: true,},
  { headerName:'ContainerNo',field: 'ContainerNo', editable: true, },
];

  InwardDetailColumns: MtxGridColumn[] = [
    {
      header:"InwardDID",
      field:"InwardDID",
      hide:true,
    },
    {
      header:"ProductID",
      field:"ProductID",
      hide:true,
    },
    {
      header:"ProductName",
      field:"ProductName",
    },
    {
      header:"LotNo",
      field:"LotNo",
    },
    {
      header:"BrandID",
      field:"BrandID",
      hide:true,
    },
{
      header:"BrandName",
      field:"BrandName",
    },
    {
      header:"ItemsInPacket",
      field:"ItemsInPacket",
    },
{
      header:"InQuantity",
      field:"InQuantity",
    },
    {
      header:"MFD Date",
      field:"MFGDate",
      hide:true,
    },
    {
      header:"ExpiryDate",
      field:"ExpDate",
      hide:true,
    },
    {
      header:"Remarks",
      field:"Remarks",
    },
    {
      header:"LabourContractorID",
      field:"LabourContractorID", hide:true,
    },
{
      header:"LabourContracterName",
      field:"LabourContracterName",
    },
{
      header:"StorageAreaTypeID",
      field:"StorageAreaTypeID",hide:true,
    },
{
      header:"StorageAreaType",
      field:"StorageAreaType",
    },
    {
      header:"SelfLife",
      field:"SelfLife",
    },
{
      header:"Country",
      field:"Country",
    },

  
  ]
  serviceColumns:ColDef[]  = [
    {
      field: 'Add', cellRenderer: (params:any) => this.checkBoxCellEditRenderer(params), hide:false,width:10,     
    },
    { field: 'InwardDID', hide:true },
    { field: 'ServiceID', hide:true,resizable: true },
    { field: 'ServiceName' }, { field: 'C_Rate', hide:true }, { field: 'L_Rate', hide:true },
  ];
  // serviceColumns: MtxGridColumn[] = [
  //   {
  //     header:"Add",
  //     field:"Add",
  //     hide:true
  //   },{
  //     header:"InwardDID",
  //     field:"InwardDID",
  //     hide:true
  //   },
  //   {
  //     header:"ServiceID",
  //     field:"ServiceID",
  //     hide:true
  //   },
  //   {
  //     header:"ServiceName",
  //     field:"ServiceName",
  //   },{
  //     header:"C_Rate",
  //     field:"C_Rate",
  //     hide:true
  //   },{
  //     header:"L_Rate",
  //     field:"L_Rate",
  //     hide:true
  //   }
  // ]
  AppliedStorageArea: MtxGridColumn[] = [
    {
      header:"Add",
      field:"Add",
      hide:true
    },{
      header:"InwardDID",
      field:"InwardDID",
      hide:true
    },
    {
      header:"ProductID",
      field:"ProductID",
      hide:true
    },
    {
      header:"ProductName",
      field:"ProductName",
    },{
      header:"LotNo",
      field:"LotNo",
      hide:true
    },{
      header:"StorageArea",
      field:"StorageArea",
      hide:true
    },{
      header:"StorageAreaID",
      field:"StorageAreaID",
      hide:true
    },{
      header:"AllocatedQuantity",
      field:"AllocatedQuantity",
      hide:true
    },{
      header:"IsCustomerArea",
      field:"IsCustomerArea",
      hide:true
    }
  ]
  StorageAreaColumns: MtxGridColumn[] = [
    {
      header:"StorageAreaID",
      field:"StorageAreaID",
      hide:true
    },{
      header:"StorageArea",
      field:"StorageArea",
      hide:false
    },{
      header:"AllocatedQty",
      field:"AllocatedQty",
    
    }
 ]

 public defaultColDef: ColDef = {
  flex: 1,
  minWidth: 200,
  resizable: true,
  floatingFilter: true,
};

// public columnInwardDefs: ColDef[] = [
//   {
//     headerName:'Action',
//     minWidth: 100,
//     cellRenderer: 'buttonRenderer',
//     cellRendererParams: {
//       onClick: this.onEditInward.bind(this),
//       label: 'Edit'
//     }
//   },
//   {
//     headerName:'InwardID',
//     field:'InwardID',
//     hide:false,      
//     minWidth: 100,
//   },
//   {
//     headerName:'CustomerID',
//     field:'CustomerID',
//     hide:true
//   },
//   {
//     headerName:'ReceiptNo',
//     field:'ReceiptNo',
//     minWidth: 100,    
//   },
//   {
//     headerName:"CustomerName",
//     field:"CustomerName",
//     minWidth:200,filter: 'agTextColumnFilter'
//   },
//   {
//     headerName:"DocID",
//     field:"DocID",
//     minWidth:100,
//   },
//   {
//     headerName:'UnLoadingBy',
//     field:'UnLoadingBy',
//     filter: 'agTextColumnFilter',
//     hide:true
//   },
//   {
//     headerName:"InwardDate",
//     field:"InwardDate",filter: 'agTextColumnFilter',
//     minWidth:100,
//   },
//   {
//     headerName:"BillingStartDate",
//     field:"BillingStartDate",filter: 'agTextColumnFilter',
//     minWidth:100,
//   },
//   {
//     headerName:"PersonName",
//     field:"PersonName",filter: 'agTextColumnFilter',
//     minWidth:100,
//   },
//   {
//     headerName:"Remarks",
//     field:"Remarks",filter: 'agTextColumnFilter',
//     minWidth:100,
//   },
//   {
//     headerName:"Status",
//     field:"Status",
//     minWidth:100,
//     hide:true
//   },
//   {
//     headerName:"StatusName",
//     field:"StatusName",filter: 'agTextColumnFilter',
//     minWidth:100,
//   },
// ];
  columns: MtxGridColumn[] = [
    {
      minWidth: 100,
      header: 'Edit',
      field: 'Edit',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        // {
        //   type: 'icon',
        //   text: 'copy',
        //   icon: 'file_copy',
        //   tooltip: 'copy',
        //   disabled: true,
        //   click: () => {
        //     alert('copy');
        //   },
        // },
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: (e:any) => {
            console.log(e);
            this.tab=0;

            
          },
        },
        // {
        //   type: 'icon',
        //   text: 'delete',
        //   icon: 'delete',
        //   tooltip: 'Delete',
        //   color: 'warn',
        //   pop: true,
        //   popTitle: 'Confirm delete?',
        //   click: () => {
        //     alert('delete');
        //   },
        // },
      ],
    },

    {
      header:'InwardID',
      field:'InwardID',
      hide:false,      
      minWidth: 100,
    },
    {
      header:'CustomerID',
      field:'CustomerID',
      hide:true
    },
    {
      header:'ReceiptNo',
      field:'ReceiptNo',
      minWidth: 100,
      
    },
    {
      header:"CustomerName",
      field:"CustomerName",
      minWidth:200,
    },
    {
      header:"DocID",
      field:"DocID",
      minWidth:100,
    },
    {
      header:'UnLoadingBy',
      field:'UnLoadingBy',
      hide:true
    },
    {
      header:"InwardDate",
      field:"InwardDate",
      minWidth:100,
    },
    {
      header:"BillingStartDate",
      field:"BillingStartDate",
      minWidth:100,
    },
    {
      header:"PersonName",
      field:"PersonName",
      minWidth:100,
    },
    {
      header:"Remarks",
      field:"Remarks",
      minWidth:100,
    },
    {
      header:"Status",
      field:"Status",
      minWidth:100,
      hide:true
    },
    {
      header:"StatusName",
      field:"StatusName",
      minWidth:100,
    },

  ]


  columnstest: MtxGridColumn[] = [
    {
      header: "Action",
      field: 'Action',
      minWidth: 105,
      pinned:'left',    
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: 'Edit',
          click: record => this.onEditTestListRow(record),
        }
        ,{
          color: 'warn',
          type: 'icon',
          icon: 'delete',
          tooltip: 'delete',
          pop: true,
          popTitle:'Do you want to delete inward ....!!', //this.translate.stream('table_kitchen_sink.confirm_delete'),
          popCloseText:'No', //this.translate.stream('table_kitchen_sink.close'),
          popOkText:'Yes', 
          popDescription:'',
          popCloseColor:'warn',
          popOkColor:'primary',
          click: record => this.onDeleteTestListRow(record),
        }
      ]
    },
    {
      header:'InwardID',
      field:'InwardID',
      hide:true,
    },
    {
      header:'CustomerID',
      field:'CustomerID',
      hide:true,
    },
    {
      header:'ReceiptNo',
      field:'ReceiptNo',
      minWidth: 80,
      
    },
    {
      header:'CustomerName',
      field:'CustomerName',
      minWidth: 200,
    },
    {
      header:'DocID',
      field:'DocID',
      hide:true,
    },
    {
      header:'UnLoadingBy',
      field:'UnLoadingBy',
      hide:true
    },
    {
      header:'InwardDate',
      field:'InwardDate',
      minWidth: 100,
      type:'date',
      typeParameter:{ format:'dd-MM-yyyy'}
    },
    {
      header:'BillingStartDate',
      field:'BillingStartDate',
      minWidth: 100,
      type:'date',
      typeParameter:{ format:'dd-MM-yyyy'},
      hide:true,
    },
    {
      header:'PersonName',
      field:'PersonName',
      minWidth: 120,
    },
    {
      header:'Status',
      field:'Status',
      hide:true,
      minWidth: 120,
    },
    {
      header:'Remarks',
      field:'Remarks',
      minWidth: 200,
    },
    {
      header:'StatusName',
      field:'StatusName',
      minWidth: 120,
    }
  ]
 //-----------end 
}
export class StorageArea{
  StorageAreaID:number=0;
  StorageArea:string="";
  AllocatedQty:number=0;
}
export class InwardStorageArea{
  InwardDID:number=0;
  StorageAreaID:number=0;
  StorageQuantity:number=0;
  LotNo:string="";
  IsCustomerAreaSelected:boolean=false;  
}
export class InwardShowStorageArea{
  AddArea:boolean=false;
  Auto:boolean=false;
  InwardDID:number=0;
  ProductID:number=0;
  ProductName:string="";
  LotNo:string="";
  BrandName:string="";
  ItemsInPacket:string="";
  InQuantity:number=0;
  StorageAreaTypeID:number=0;
  StorageAreaType:string="";
  Applied:boolean=false;
}
export class InwardCharege{
  InwardDID:number=0;
  ServiceID:number=0;
  ServiceName:string="";
  C_Rate:number=0;
  L_Rate:number=0;
}
export class InwardTransportData{
  InwardTransportID:number=0;
  TransporterName:string="";
  TruckNo:string="";
  ContainerNo:string="";
}
export class InwardTransport{
  InwardDID:number=0;
  LotNo:string="";
  TransporterName:string="";
  TruckNo:string="";
  ContainerNo:string="";
  Qty:number=0;
}
export class InwardDetails{
  InwardDID:number=0;
  ChallanID:number=0;
  ChallanDID:number=0;
  ProductID:number=0;
  ProductName:string="";
  LotNo:string="";
  FirstLotNo:string="";
  BrandID:number=0;
  BrandName:string="";
  ItemsInPacket:string="";
  InQuantity:number=0;
  ChallanQuantity:number=0;
  OutQuantity:number=0;
  InprocessQuantity:number=0;
  BalanceQuantity:number=0;
  MFGDate:Date=new Date();
  ExpDate:Date=new Date();
  Remarks:string="";
  TransferDID:number=0;
  LabourContractorID:number=0;
  LabourContractorName:string="";
  StorageAreaTypeID:number=0;
  StorageAreaType:string="";
  SelfLife:number=0;
  IsNew:boolean=true;
  Country:string="";
  ServiceID:number=0;  
}


export class SaveInward{
  InwardID:number=0;
  CustomerID:number=0;
  CompanyID:number=0;
  WarehouseID:number=0;
  InwardDate:Date=new Date();
  Remarks:string="";
  FinancialYearID:number=0;
  UserID:number=0;
  ReceiptNo:number=0;
  dockID:number=0;
  UnLoadingBy:number=0;
  StorageAreaMasterID:number=0;

InwardDetailModel:Array<InwardDetails>=[];
InwardChargesModel:Array<InwardCharege>=[];
InwardLocationModel:Array<InwardShowStorageArea>=[];
InwardTransperModel:Array<InwardTransport>=[];
}

