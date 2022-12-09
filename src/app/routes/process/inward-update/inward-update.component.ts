import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColDef,GridApi } from 'ag-grid-community';
import { ApiService } from '@core';
import { User } from '@core/authentication/interface';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn,MtxGridRowClassFormatter  } from '@ng-matero/extensions';
@Component({
  selector: 'app-inward-update',
  templateUrl: './inward-update.component.html',
  styleUrls: ['./inward-update.component.scss']
})
export class InwardUpdateComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  HideSaveButton=true;
  LotDetailList:any;
  productList:any;
  BrandsList:any;
  packateCountList:any;
  StorageAreaList:any;
  dockList:any;
  remarkList:any;
  labourContractorList:any;
  unloadingList:any;
  InwardID:number=0;
  InwardDID:number=0;
  CustomerName:string="";
  BalanceQuantity:number=0;
  OutQuantity:number=0;
  PendingDO:number=0;
  LotUpdateDataList:Array<LotUpdatedList>=[];
  private currentUser:User;
  constructor(private fb: FormBuilder,private api:ApiService,public dialog: MtxDialog) { 
    this.currentUser=this.api.getCurrentUser();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      txtLotNo: [null, Validators.required],
      txtProductid: [null, Validators.required],
      lot_no: [null, Validators.required],
      cbbrandid: [null, Validators.required],
      txtpacketcount: [null, Validators.required],
      cbDockID: [null, Validators.required],
      cbUnloadingBy: [null, Validators.required],
      txtTruckNo: [null, Validators.required],
      txtContainerNo: [''],
      txtInQuantity: [null, Validators.required],
      cbStorageArea: [null, Validators.required],
      remarks: [''],
      
    });
    this.LotDetailList=[];
    this.BindComboBox();
  }
  get f() { return this.form.controls; }

  async BindComboBox(){ 
  
  this.api.get('/Brands/Brand_Select').subscribe(
    data => { this.BrandsList = data;  },
    error=>{ console.error(error);}
  );
  this.api.get('/CountInPacket').subscribe(
    data=>{this.packateCountList=data},
    error=>{ console.error(error);}
  );
  this.api.get('/dock').subscribe(
    data=>{this.dockList=data; },
    error=>{ console.error(error);}
  );
  this.api.get('/UnloadingBy').subscribe(
    data=>{this.unloadingList=data},
    error=>{ console.error(error);}
  );
  this.api.post('/Storage/StorageArea_Select').subscribe(
    data => {this.StorageAreaList = data;  },
    error => { console.error(error); }
  );

}
  OnSearch(){
    if(this.form.value.txtLotNo==null||this.form.value.txtLotNo==''){
      document?.getElementById("txtLotNo")?.focus();
      this.dialog.alert("Select LotNo .....");
      return;
    }else{
      const DataParam={
        LotNo:this.form.value.txtLotNo,
        WarehouseID:this.currentUser.warehouseId,
      }
      this.api.post('/InwardUpdate/GetInwardByLotNo',DataParam).subscribe(
        data=>{this.LotDetailList=data.Table;},
        error=>{ console.error(error);});
    }
  }
  onSubmit(data:any){
    //console.log("LotDetailList1",this.LotDetailList[0]);
    if(this.LotDetailList.length>0){
      const Updateddata={
        "inwardDID":this.LotDetailList[0].InwardDID,
        "brandId":Number(this.LotDetailList[0].BrandID),
        "itemsInPacket":this.LotDetailList[0].ItemsInPacket,
        "inQuantity":this.LotDetailList[0].InQuantity,
        "lotno":this.LotDetailList[0].LotNo,
        "docID":this.LotDetailList[0].DockID,
        "unLoadingBy":this.LotDetailList[0].UserID,
        "remarks":this.LotDetailList[0].Remarks,
        "truckNo":this.LotDetailList[0].TruckNo,
        "containerNo":this.LotDetailList[0].ContainerNo,
        "inwardID":this.LotDetailList[0].InwardID,
        "storageAreaID":this.LotDetailList[0].StorageAreaID,
      };
      //console.log("LotDetailList2",Updateddata);
      this.api.post('/InwardUpdate/InwardUpdate_insert',Updateddata).subscribe(
        data=>{data;
          //console.log(data)
          this.dialog.alert(data);
          this.form.controls['txtLotNo'].reset();
          this.LotDetailList=[];
          this.onResetClick();          
      },error=>{ console.error(error);});
    }else{
      this.dialog.alert("Invalid");
    }
  }
  OnUpdateclick(){
    this.submitted=true;
    if(this.form.invalid){
      this.dialog.alert("Invalid");
      return;
    }else if(this.LotDetailList.length==0){
      this.dialog.alert("Invalid");
      return;
    }else{
      if(this.LotDetailList.length>0){
        const BrandNames=this.BrandsList.filter((x:any)=>x.BrandID==this.form.value.cbbrandid);
        const DockNames=this.dockList.filter((x:any)=>x.DockID==this.form.value.cbDockID);
        const unloadings=this.unloadingList.filter((x:any)=>x.UserID==this.form.value.cbUnloadingBy);
        const StorageAreas=this.StorageAreaList.filter((x:any)=>x.StorageAreaID==this.form.value.cbStorageArea);
        this.LotDetailList.forEach((i:any)=>{ 
          if(this.LotDetailList.length>0){
            this.LotUpdateDataList.push(
              {
                "InwardID":i.InwardID,
                "InwardDID":i.InwardDID,
                "CustomerName":i.CustomerName,
                "LotNo":this.form.value.lot_no,
                "ProductName":this.form.value.txtProductid,
                "BrandName":BrandNames[0].BrandName,
                "BrandID":this.form.value.cbbrandid,
                "ItemsInPacket":this.form.value.txtpacketcount,
                "DockName":DockNames[0].DockName,	
                "DockID":this.form.value.cbDockID,	
                "UnLoadingBy"	:unloadings[0].UserName,
                "UserID":this.form.value.cbUnloadingBy,
                "InQuantity":i.InQuantity,
                "PendingDO":i.PendingDO,
                "TruckNo"	:this.form.value.txtTruckNo,
                "ContainerNo"	:this.form.value.txtContainerNo,
                "OutQuantity":i.OutQuantity,	
                "BalanceQuantity":i.BalanceQuantity,	
                "StorageAreaID":this.form.value.cbStorageArea,
                "StorageArea"	:StorageAreas[0].Storage_Area_Name,
                "Remarks":this.form.value.remarks,
              });
            }        
          }); 
      }    
      this.LotDetailList=this.LotUpdateDataList;
      console.log("LotUpdateDataList",this.LotUpdateDataList);
      this.onResetClick();
    }    
  }
  onResetClick(){
    this.submitted = false;
    this.LotUpdateDataList=[];
     //--------------------------Reset Product Details
    this.form.controls['txtProductid'].reset();
    this.form.controls['lot_no'].reset();
    this.form.controls['cbbrandid'].reset();
    this.form.controls['txtpacketcount'].reset();
    this.form.controls['cbDockID'].reset();
    this.form.controls['txtTruckNo'].reset();
    this.form.controls['cbUnloadingBy'].reset();
    this.form.controls['txtContainerNo'].reset();
    this.form.controls['txtInQuantity'].reset();
    this.form.controls['cbStorageArea'].reset();  
    this.form.controls['remarks'].reset();
  }
  onProductListRowClicked(event :any){
      //this.submitted = true;
      console.log("onProductListRowClicked",event.data);
      this.InwardID=event.data.InwardID;
      this.InwardDID=event.data.InwardDID;
      this.CustomerName=event.data.CustomerName;
      this.BalanceQuantity=event.data.CustomerName;
      this.OutQuantity=event.data.OutQuantity;
      this.PendingDO=event.data.PendingDO;

      this.form.patchValue({
        txtProductid:event.data.ProductName,
        lot_no:event.data.LotNo,
        cbbrandid:event.data.BrandID,
        txtpacketcount: event.data.ItemsInPacket,
        cbDockID: event.data.DockID,
        cbUnloadingBy: event.data.UserID,
        txtTruckNo:event.data.TruckNo,
        txtContainerNo:event.data.ContainerNo,
        txtInQuantity:event.data.InQuantity,
        cbStorageArea: event.data.StorageAreaID,
        remarks:event.data.Remarks,          
    });
  }
  //---------------end function
  //---------column defination			
  						
  					
  LotColumnDefs: ColDef[] = [    
    {    headerName:'InwardID',    field:'InwardID',    hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'InwardDID',    field:'InwardDID',    hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'CustomerName',    field:'CustomerName',    minWidth: 200,  filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'LotNo',    field:'LotNo', filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'ProductName',    field:'ProductName',    hide:false,  filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'BrandName',    field:'BrandName',    minWidth: 100, filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'BrandID',    field:'BrandID',hide:true,    minWidth: 100, filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'DockName',    field:'DockName',    minWidth: 120, filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'DockID',    field:'DockID', hide:true,minWidth: 120,filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'UnLoadingBy',    field:'UnLoadingBy',    hide:true,    minWidth: 120, filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'UserID',    field:'UserID', hide:true,filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'InQuantity',    field:'InQuantity',filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'PendingDO',    field:'PendingDO',minWidth: 200,  filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'TruckNo',    field:'TruckNo',filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'ContainerNo',    field:'ContainerNo',hide:false,  filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'OutQuantity',    field:'OutQuantity', minWidth: 100, filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'BalanceQuantity',    field:'BalanceQuantity', minWidth: 100, filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'StorageAreaID',    field:'StorageAreaID',hide:true,minWidth: 120, filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'StorageArea',    field:'StorageArea',    hide:false,minWidth: 120,filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'Remarks',    field:'Remarks', minWidth: 120, filter: 'agTextColumnFilter',floatingFilter: true, },
  
  ];

}

export class LotUpdatedList{
  InwardID:number=0;
  InwardDID:number=0;
  CustomerName:string="";
  LotNo	:string="";
  ProductName	:string="";
  BrandName	:string="";
  BrandID	:number=0;
  ItemsInPacket	:string="";
  DockName:string="";	
  DockID:number=0;	
  UnLoadingBy:string="";	
  UserID	:number=0;
  InQuantity	:number=0;
  PendingDO	:number=0;
  TruckNo:string="";	
  ContainerNo:string="";	
  OutQuantity	:number=0;
  BalanceQuantity	:number=0;
  StorageAreaID	:number=0;
  StorageArea:string="";	
  Remarks:string="";
}
