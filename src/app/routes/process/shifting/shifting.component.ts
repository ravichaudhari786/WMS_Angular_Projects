import { Component, OnInit } from '@angular/core';
import { noUndefined } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { DatePipe } from '@angular/common';
import { User } from '@core/authentication/interface';
import { ColDef,GridApi } from 'ag-grid-community';
@Component({
  selector: 'app-shifting',
  templateUrl: './shifting.component.html',
  styleUrls: ['./shifting.component.scss']
})
export class ShiftingComponent implements OnInit {
  form!: FormGroup;
  //addShiftingdetail!: FormGroup;
  private currentUser:User;
  submitted = false;
  HideSaveButton=true; customerList:any;
  dataSource = new MatTableDataSource<any>();
  tab=0;
  UserID:any=0;
  todayDate : any ;
  loadingByList:any;
  BalanceStockList:any;
  labourContractorList:any;
  StorageAreas:any;
  packateCountList:any;
  brandList:any;
  productList:any;
  ShiftingServiceList:any;
  ServiceList:Array<ShiftingCharege>=[];
  ShiftingDetailList:Array<ShiftingDetailsList>=[];
  DetailList: Array<ShiftingDetailsList>=[];
  ShiftDetail: any = {};
  ShiftingList:any;
  InwardDID:number=0;
  InwardLocationID:number=0;
  WareHousesID:number=0;
  FromLocationID:number=0;
  shiftingsDID:number=0;
  constructor(private fb: FormBuilder,private fbAdd: FormBuilder,private api:ApiService,public dialog: MtxDialog,) {
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss')
    this.todayDate=dateSendingToServer;
    this.currentUser=this.api.getCurrentUser();
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      cbCustomerID : ['', Validators.required],
      txtLotNo : [''],
      inward_date : ['', Validators.required],
      cbloadingByID: [null,Validators.required],
      txtProductName: [''],
      txtShiftDetailLotNo: [''],
      txtBrandName: [''],
      txtpacketcount: [''],
      txtBalquantity: [''],
      txtShiftingQty: [''],
      txtLocation: [''],
      cbToLocation: [''],
      cblabourcontractor_id:[''],
    });
    this.ShiftingServiceList=[];
    this.BindDropdown();
    this.BindShiftingList();
  }

  async BindDropdown(){
    const DataParam={
      warehouseID:this.currentUser.warehouseId,
      StorageAreaID:0,
      LTD_StorageAreaS:null,
      createdBy:0,
      BlockID:0,
    }
    this.api.get('/Customer').subscribe(
      data=>{this.customerList=data},
      error=>{ console.error(error);}
    );    
   this.api.get('/UnloadingBy').subscribe(
    data=>{this.loadingByList=data},
    error=>{ console.error(error);}
  );
  this.api.get('/LabourContracter').subscribe(
    data=>{this.labourContractorList=data},
    error=>{ console.error(error);}
  );
  this.api.post('/Storage/StorageArea_Select',DataParam).subscribe(
    data=>{this.StorageAreas=data},
    error=>{ console.error(error);}
  );
  // this.api.get('/CountInPacket').subscribe(
  //   data=>{this.packateCountList=data},
  //   error=>{ console.error(error);}
  // );
  // this.api.get('/brand').subscribe(
  //   data=>{this.brandList=data},
  //   error=>{ console.error(error);}
  // );
  // this.api.get('/ProductList').subscribe(
  //   data=>{this.productList=data},
  //   error=>{ console.error(error);}
  // );
 }
 async BindShiftingList(){
  const DataParam={
    warehouseID:this.currentUser.warehouseId,
    StorageAreaID:0,
    LTD_StorageAreaS:null,
    createdBy:0,
    BlockID:0,
  };
    this.api.post('/Shifting/Shifting_List',DataParam).subscribe(
      data=>{this.ShiftingList=data; console.log(data);},
      error=>{ console.error(error);}
    );

}
 get f() { return this.form.controls; }

 OnSearchClick(){
  if(this.form.value.cbCustomerID==null || this.form.value.cbCustomerID==""){
    alert("Please .... Select Customer Name");
    document?.getElementById("cbCustomerID")?.focus();
    return;
  }else if (this.form.value.txtLotNo==null || this.form.value.txtLotNo==""){
    alert("Please .... Enter Lot No ");
    document?.getElementById("txtLotNo")?.focus();
    return;
  }else
  {
    const SearchData={
      remarks:'', 
      shiftingDID:0, 
      shiftingID:0, 
      warehouseID:0, 
      customerID:this.form.value.cbCustomerID, 
      createdBy:0, 
      shiftingDate:0, 
      loadingBy:0,          
      LotNo:this.form.value.txtLotNo,  
    };
    this.api.post('/Shifting/GetInwardDetails',SearchData).subscribe(
      data=>{this.BalanceStockList=data;
            //console.log(data);
          },error=>{ console.error(error);});
  }
 }
 onRowDblclicked(a:any,e:any)
 {
  //console.log("SD",a.cellSelection[0].rowData);
  this.api.get('/Shifting/Shifting_services').subscribe(
    data=>{this.ShiftingServiceList =data; 
    //console.log("SC",data);   
    this.InwardDID=0;
    this.InwardLocationID=0;
    this.WareHousesID=0;
    this.FromLocationID=0;

    this.form.controls['txtProductName'].reset();
    this.form.controls['txtShiftDetailLotNo'].reset();
    this.form.controls['txtBrandName'].reset();
    this.form.controls['txtpacketcount'].reset();
    this.form.controls['txtBalquantity'].reset();
    this.form.controls['txtShiftingQty'].reset();
    this.form.controls['txtLocation'].reset();
    this.form.controls['cbToLocation'].reset();
    //this.form.controls['cblabourcontractor_id'].reset();
    
    this.InwardDID=a.cellSelection[0].rowData["InwardDID"];
    this.InwardLocationID=a.cellSelection[0].rowData["InwardLocationID"];
    this.WareHousesID=a.cellSelection[0].rowData["WareHouseID"];
    this.FromLocationID=a.cellSelection[0].rowData["StorageAreaID"];

      this.form.patchValue({
        txtProductName:a.cellSelection[0].rowData["ProductName"],
        txtShiftDetailLotNo:a.cellSelection[0].rowData["LotNo"],
        txtBrandName:a.cellSelection[0].rowData["BrandName"],
        txtpacketcount:a.cellSelection[0].rowData["ItemsInPacket"],
        txtBalquantity:a.cellSelection[0].rowData["BalanceQuantity"],
        txtShiftingQty:'',
        txtLocation:a.cellSelection[0].rowData["Location"],
    });  
    document?.getElementById("txtShiftingQty")?.focus();
    },error=>{ console.error(error);}
  );
 }

 onKeyfilter(e:string)
  {
    if(Number(this.form.value.txtBalquantity)>0)
    {
      if(Number(this.form.value.txtBalquantity)<Number(e))
      {
        alert("Shifting Quantity greater than the Balance Quantity ....!!!");
        this.form.controls['txtShiftingQty'].setValue('');
      }
    } 
  }
  OnToLocationSelect(ID:any){
    const ToLocationNames=this.StorageAreas.filter((x:any)=>x.StorageAreaID==this.form.value.cbToLocation);
    if(this.form.value.txtLocation!="" || this.form.value.txtLocation!=null)
    {
      if(this.form.value.txtLocation==ToLocationNames[0].Storage_Area_Name){
        alert("Please Select other location");
        this.form.controls['cbToLocation'].reset(); 
      }    
    }
  }

 OnAddClick()
 {
    if(this.form.value.txtShiftingQty==null || this.form.value.txtShiftingQty==""){
    alert("Please .... Enter Shifting Quantity...!!");
    document?.getElementById("txtShiftingQty")?.focus();
    return;
    }else if(Number(this.form.value.txtBalquantity)<Number(this.form.value.txtShiftingQty)){
      alert("Shifting Quantity greater than the Balance Quantity ....!!!");
      document?.getElementById("txtShiftingQty")?.focus();
      return;
    }
    else if(this.form.value.cbToLocation==null || this.form.value.cbToLocation==0){
      alert("Please .... Select To Location...!!");
      document?.getElementById("cbToLocation")?.focus();
      return;
    }
    else if(this.form.value.cblabourcontractor_id==null || this.form.value.cblabourcontractor_id==0){
      alert("Please .... Select Labour Contractor...!!");
      document?.getElementById("cblabourcontractor_id")?.focus();
      return;
    }
    else
    {
      const ToLocationName=this.StorageAreas.filter((x:any)=>x.StorageAreaID==this.form.value.cbToLocation);
      const FromLocationName=this.StorageAreas.filter((x:any)=>x.StorageAreaID==this.FromLocationID);
      const LabourContractorName=this.labourContractorList.filter((x:any)=>x.LabourContractorID==this.form.value.cblabourcontractor_id);
      this.shiftingsDID=this.shiftingsDID+1;
      // this.InwardDID=0;
      // this.InwardLocationID=0;
      // this.WareHousesID=0;
      // this.FromLocationID=0;
  
      // this.form.controls['txtProductName'].reset();
      // this.form.controls['txtShiftDetailLotNo'].reset();
      // this.form.controls['txtBrandName'].reset();
      // this.form.controls['txtpacketcount'].reset();
      // this.form.controls['txtBalquantity'].reset();
      // this.form.controls['txtShiftingQty'].reset();
      // this.form.controls['txtLocation'].reset();
      // this.form.controls['cbToLocation'].reset();
      // //this.form.controls['cblabourcontractor_id'].reset();
      this.ShiftDetail=[];
      this.ShiftDetail={
        ShiftingDID:this.shiftingsDID,
        InwardLocationID:this.InwardLocationID,
        InwardDID:this.InwardDID,
        ProductName:this.form.value.txtProductName,
        LotNo:this.form.value.txtShiftDetailLotNo,
        BrandName:this.form.value.txtBrandName,
        ItemInPacket:this.form.value.txtpacketcount,
        BalanceQuantity:this.form.value.txtBalquantity,
        ShiftingQuantity:Number(this.form.value.txtShiftingQty),
        FromLocation:FromLocationName[0].Storage_Area_Name,
        ToLocation:ToLocationName[0].Storage_Area_Name,
        LabourContractor:LabourContractorName[0].ContractorName,
        FromLocationID:this.FromLocationID,
        ToLocationID:this.form.value.cbToLocation,      
        LabourContractorID:Number(this.form.value.cblabourcontractor_id),
      };  
      this.DetailList=this.ShiftingDetailList;
      this.DetailList.push(this.ShiftDetail);
      this.ShiftingDetailList=this.DetailList.slice();

        this.ShiftingServiceList.forEach((i:any)=>{ 
          if(i.Rate>=0){
            this.ServiceList.push(
              {
                "ShiftingDID":this.shiftingsDID,
                "ServiceID":i.ServiceID,
                "ServiceName":i.ServiceName,
                "Rate":i.Rate,
                "Rate_L":i.Rate_L
              });
              }        
            });
        console.log("SHifting Detail",this.ShiftingDetailList);
        console.log("SHifting Charges",this.ServiceList);
        this.InwardDID=0;
        this.InwardLocationID=0;
        this.WareHousesID=0;
        this.FromLocationID=0;
    
        this.form.controls['txtProductName'].reset();
        this.form.controls['txtShiftDetailLotNo'].reset();
        this.form.controls['txtBrandName'].reset();
        this.form.controls['txtpacketcount'].reset();
        this.form.controls['txtBalquantity'].reset();
        this.form.controls['txtShiftingQty'].reset();
        this.form.controls['txtLocation'].reset();
        this.form.controls['cbToLocation'].reset();
    }
  };

  onSubmit(formData:any){
  this.submitted=true;
  console.log(formData);
  if(this.form.invalid){
    alert("invalid");
    return;
  }else {
    this.HideSaveButton=false;
    alert("Save");

  }  
 }

 tabchange(event:any){
  this.tab=event;
}
onReset(){
  this.submitted=false;
  this.HideSaveButton=true;
}
onEditTestListRow(e:any){}
onDeleteTestListRow(d:any){}
//----------------------------Grid Column
BalanceStockColumn: MtxGridColumn[] = [
  {    header:"InwardDID",    field:"InwardDID",    hide:false,  },
  {    header:"WareHouseID",    field:"WareHouseID",    hide:false,  },
  {    header:"InwardLocationID",    field:"InwardLocationID",  },
  {    header:"StorageAreaID",    field:"StorageAreaID",  },
  {    header:"Location",    field:"Location",    hide:false,  },
  {    header:"ProductName",    field:"ProductName",  },
  {    header:"LotNo",    field:"LotNo",  },
  {    header:"BrandName",    field:"BrandName",  },
  {    header:"ItemsInPacket",    field:"ItemsInPacket",    hide:false,  },
  {    header:"InQuantity",    field:"InQuantity",    hide:false,  },
  {    header:"OutQuantity",    field:"OutQuantity",  },
  {    header:"InprocessQuantity",    field:"InprocessQuantity",  },
  {    header:"BalanceQuantity",    field:"BalanceQuantity",  },
] ;

serviceColumns:ColDef[]  = [
  { field: 'ShiftingID',  hide:true,}, { field: 'ServiceID', hide:true },
  { field: 'ServiceName', hide:false,resizable: true,width:120, },
  { field: 'Rate' , hide:false,width:70,cellEditorPopup: true, editable: true, valueParser: "Number(newValue)"},
  { field: 'Rate_L', hide:false ,width:80,cellEditorPopup: true, editable: true, valueParser: "Number(newValue)"}
];

ShiftingDetailColumns: MtxGridColumn[] = [
  {    header:"ShiftingDID",    field:"ShiftingDID",    hide:false,  },
  {    header:"InwardLocationID",    field:"InwardLocationID",    hide:false,  },
  {    header:"InwardDID",    field:"InwardDID",  },  
  {    header:"ProductName",    field:"ProductName",  },
  {    header:"LotNo",    field:"LotNo",    hide:false,  },
  {    header:"BrandName",    field:"BrandName",  },
  {    header:"ItemInPackets",    field:"ItemInPackets",  },
  {    header:"BalanceQuantity",    field:"BalanceQuantity",  },
  {    header:"ShiftingQuantity",    field:"ShiftingQuantity",    hide:false,  },
  {    header:"FromLocation",    field:"FromLocation",    hide:false,  },
  {    header:"ToLocation",    field:"ToLocation",  },
  {    header:"LabourContractor",    field:"LabourContractor", hide:false,  },
  {    header:"FromLocationID",    field:"FromLocationID",  },
  {    header:"ToLocationID",    field:"ToLocationID",hide:false,  },
  {    header:"LabourContractorID",    field:"LabourContractorID",  },
];
ShiftingListColumn: MtxGridColumn[] = [
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
  {    header:'ShiftingDID',    field:'ShiftingDID',    hide:true,  },
  {    header:'ShiftingID',    field:'ShiftingID',    hide:true,  },
  {    header:'ShiftingDate',    field:'ShiftingDate',    minWidth: 100,type:'date',  typeParameter:{ format:'dd-MM-yyyy'} },
  {    header:'CustomerName',    field:'CustomerName',    minWidth: 200,  },
  {    header:'LotNo',    field:'LotNo',    hide:true,  },
  {    header:'ProductName',    field:'ProductName',    hide:true  },
  {    header:'FromLocation',    field:'FromLocation',    minWidth: 100, },
  {    header:'ToLocation',    field:'ToLocation',    minWidth: 100,  },
  {    header:'Quantity',    field:'Quantity',    minWidth: 120,  },
  {    header:'LabourContractorName',    field:'LabourContractorName',    hide:true,    minWidth: 120,  },
  {    header:'LoadingBy',    field:'LoadingBy',    minWidth: 200,  },
  {    header:'CreatedBy',    field:'CreatedBy',    minWidth: 120,  },
  {    header:'CreatedDate',    field:'CreatedDate',    minWidth: 200,  },
  {    header:'WarehouseID',    field:'WarehouseID',    minWidth: 200,  },
  {    header:'StatusName',    field:'StatusName',    minWidth: 200,  },
  {    header:'StatusID',    field:'StatusID',    minWidth: 200,  },
];
//---end
}
//----------------Define Class
export class ShiftingCharege{
  ShiftingDID:number=0;
  ServiceID:number=0;
  ServiceName:string="";
  Rate:number=0;
  Rate_L:number=0;
}
export class ShiftingDetailsList{
  // ShiftingDID:number=0;
  // InwardLocationID:number=0;
  // InwardDID:number=0;
  // ProductName:string="";
  // LotNo:string="";
  // BrandName:string="";
  // ItemInPackets:string="";
  // BalanceQuantity:number=0;
  // ShiftingQuantity:number=0;
  // FromLocation:string="";
  // ToLocation:string="";
  // LabourContractor:number=0;
  // FromLocationID:number=0;
  // ToLocationID:number=0;
  ShiftingDID:number=0;
  InwardLocationID:number=0;
  InwardDID:number=0;
  ProductName:string="";
  LotNo:string="";
  BrandName:string="";
  ItemInPackets:string="";
  BalanceQuantity:number=0;
  ShiftingQuantity:number=0;
  FromLocation:string="";
  ToLocation:string="";
  LabourContractor:string="";
  FromLocationID:number=0;
  ToLocationID:number=0;
  LabourContractorID:number=0;
}
export class ShiftingDetailSave{
  ShiftingDID:number=0;
  InwardLocationID:number=0;
  InwardDID:number=0;
  LotNo:string="";
  FromLocation:string="";
  ToLocation:string="";
  Quantity:number=0;
  LabourContractor:number=0;
}