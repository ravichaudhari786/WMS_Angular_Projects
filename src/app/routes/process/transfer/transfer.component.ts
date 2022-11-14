import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { DatePipe } from '@angular/common';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '@core/authentication/interface';
import { ColDef,GridApi } from 'ag-grid-community';
import { TransferdeletebuttonComponent } from './transferdeletebutton/transferdeletebutton.component'
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  private currentUser:User;
  tab=0;
  form!: FormGroup;
  frameworkComponents: any;
  customerList:any;
  submitted = false;
  HideSaveButton=true;
  todayDate : any ;
  ProductList:any;
  TransferServiceList:any;  
  TransferServiceTest:any;  
  ServiceTest:any; 
  DID:number=0;
  TransferList:any;
  StorageAreaTypeList:any;
  labourContractorList:any;
  remarkList:any;
  LocationList:any;
  ProductNameList:any;
  newTransferDetail:any;
  TransfersID:number=0;
  InwardDID:number=0;
  InwardLocationID:number=0;
  StorageAreaID:number=0;
  NewLotNo:string="";
  NewLotNoID:number=0;
  BindNewLotNoData:any;
  TransferDetailsList: Array<TransferDetails>=[];
  DetailList: Array<TransferDetails>=[];
  ChargesList: Array<TransferCharege>=[];
  TransferchargesList: Array<TransferCharege>=[];
  NewLotNolist:any;
  TrnsNewLotList:Array<TransferNewLotList>=[];
  flag:boolean=false;
  TransferDetailtab=0;
  SaveTransferData:any;
  TransferDetailsListSave: Array<TransferDetailSave>=[];
  TransferChargesListSave: Array<TransferCharegeSave>=[];
  constructor(private fb: FormBuilder,private fbAdd: FormBuilder,private api:ApiService,public dialog: MtxDialog,public dialogBox: MatDialog) { 
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
    this.todayDate=dateSendingToServer;
    this.currentUser=this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: TransferdeletebuttonComponent,
    }
  }

  ngOnInit(): void {
    this.ProductList=[];
    this.TransferServiceList=[];
    
    this.form = this.fb.group({
      cbCustomerID : ['', Validators.required],
      Transfer_date: ['', Validators.required],
      txtTransfeNo: ['', Validators.required],
      cbToCustomerID: ['', Validators.required],
      txtOrderGivenBy: [null, Validators.required],
      txtRemarks: [''],
      txtLotNo: [''],
      cbproduct_id: [''],
      txtBalanceQty: [''],
      txtBrand: [''],
      txtCount: [''],
      txtTransferQty: [''],
      cbStorageAreaType:[''],
      txtBillingCycle:[''],
      ckCustomerarea:[''],
      cbRemarks:[''],
      txtNewLotNo:[''],
      cbLocation:[''],
      cbLabourContractor:[''],
    });
    this.BindDropdown();
    this.BindTransferList();
    this.BindTransferNewLotList();
  }
  get f() { return this.form.controls; }

  async BindDropdown(){
    const StorageData={
      wareHouseID:this.currentUser.warehouseId,
      companyID:0,
      fromCustomerID:0,
      toCustomerID:0,
      transferDate:0,
      orderGivenBy:0,
      remarks:0,
      createdBy:0,
      financialYearID:0,
      storageAreaMasterID:0,
    };

    this.api.get('/Customer').subscribe(
      data=>{this.customerList=data},
      error=>{ console.error(error);}
    );  
    this.api.get('/StorageAreaType/ServieceStorageAreaType').subscribe(
      data=>{this.StorageAreaTypeList=data},
      error=>{ console.error(error);}
    );  
    this.api.post('/Transfer/GetStorageArea',StorageData).subscribe(
      data=>{this.LocationList=data},
      error=>{ console.error(error);}
    ); 
    this.api.get('/LabourContracter').subscribe(
      data=>{this.labourContractorList=data},
      error=>{ console.error(error);}
    );
    this.api.get('/Remarks').subscribe(
      data=>{this.remarkList=data.filter((p:any)=>p.ProcessID==6);},
      error=>{ console.error(error);}
    );
    
  }
  async BindTransferNewLotList(){
    this.TrnsNewLotList=[];
    this.NewLotNolist=[];
    this.BindNewLotNoData={
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
    this.api.post('/Inward/GetLotNo',this.BindNewLotNoData).subscribe(
      data=>  {//this.NewLotNo=data[0]["LotNo"];  
        this.NewLotNolist=data;
        // this.NewLotNolist.forEach((i:any)=>{ 
        //     this.TrnsNewLotList.push(
        //       {
        //         "LotNo":i.LotNo,
        //          "Prefix":i.Prefix,
        //          "Sufix":i.Sufix,
        //       });
        //   });
          this.NewLotNo=this.NewLotNolist[0].Prefix+this.NewLotNolist[0].LotNo+this.NewLotNolist[0].Sufix;
          this.NewLotNoID=Number(this.NewLotNolist[0].LotNo);
          // console.log("this.NewLotNolist",this.NewLotNolist)
          // console.log("TrnsNewLotList",this.NewLotNolist)
          //console.log("NewLot",this.NewLotNo);
        this.form.controls['txtNewLotNo'].setValue(this.NewLotNo);
        },error=>{ console.error(error);});
  }
  async BindTransferList(){
    const DataParam={
      transferID:0,
      wareHouseID:this.currentUser.warehouseId,
      companyID:0,
      fromCustomerID:0,
      toCustomerID:0,
      transferDate:0,
      orderGivenBy:0,
      remarks:"",
      createdBy:0,
      financialYearID:0,
      storageAreaMasterID:0,
    };
      this.api.post('/Transfer/Transfer_List',DataParam).subscribe(
        data=>{this.TransferList=data;  },
        error=>{ console.error(error);}
      );  
  }
  tabchange(event:any){
    this.tab=event;
  }
  OnSaveTransfer(formData:any){
    this.submitted=true;
    console.log(formData)

    this.TransferDetailsList.forEach(i=>{
      if(this.TransferDetailsList.length>0){
        this.TransferDetailsListSave.push(
          {
            "TransferDID":i.TransferDID,
            "InwardDID":i.InwardDID,
            "ProductID":i.ProductID,
            "LotNo":i.LotNo,
            "InwardLocationID":i.InwardLocationID,
            "StorageAreaID":i.StorageAreaID,
            "TransferQuantity":i.TransferQty,
            "ToStorageAreaID":i.ToStorageAreaID,
            "LabourContractorID":i.LabourContractorID,
            "Remarks":i.ProductRemarks,
            "StorageAreaTypeID":i.StorageAreaTypeID,
            "NewLotNo":i.NewLotNo,
          });
        }  
      }); 
      this.TransferDetailsListSave.slice();

      this.TransferchargesList.forEach(i=>{
        if(this.TransferchargesList.length>0){
          this.TransferChargesListSave.push(
            {
              "Add":i.Add,
              "TransferDID":i.TransferDID,
              "ServiceID":i.ServiceID,
              "ServiceName":i.ServiceName,
              "C_Rate":i.C_Rate,
              "L_Rate":i.L_Rate,
            });
          }  
        }); 
        this.TransferChargesListSave.slice();
    this.SaveTransferData={
      TransferID:this.TransfersID,
      WareHouseID:this.currentUser.warehouseId,
      CompanyID:this.currentUser.companyId,
      FromCustomerID:this.form.value.cbCustomerID,
      ToCustomerID:this.form.value.cbToCustomerID,
      TransferDate:this.form.value.Transfer_date,
      OrderGivenBy:this.form.value.txtOrderGivenBy,
      Remarks:this.form.value.txtRemarks,
      CreatedBy:this.currentUser.userId,
      TDTransferDetail:this.TransferDetailsListSave,
      TDTransferCharges:this.TransferChargesListSave,
      FinancialYearID:this.currentUser.FinantialYearId,
      StorageAreaMasterID:1
    };
    console.log(this.SaveTransferData)
    this.api.post('/Transfer/Transfer_Insert',this.SaveTransferData).subscribe(
      data=>{data;
        this.dialog.alert(data.Table[0].Message);
        this.BindTransferList();
        //this.OnResetInward();
    },
      error=>{ console.error(error);}
    );
  }

  GetCustomerID(e:any){
    //console.log("cbCustomerID= ",this.form.value.cbCustomerID);
    const DataParam={
        transferID:0,
        wareHouseID:this.currentUser.warehouseId,
        companyID:0,
        fromCustomerID:this.form.value.cbCustomerID,
        toCustomerID:0,
        transferDate:0,
        orderGivenBy:'',
        remarks:'',
        createdBy:0,
        financialYearID:this.currentUser.FinantialYearId,
        storageAreaMasterID:0,
    }
      
  this.api.post('/Transfer/GetTransferProductList',DataParam).subscribe(
    data=>{this.ProductList=data; //console.log(this.ProductList);
    }, error=>{ console.error(error);}
  );
  this.api.post('/Inward/GetCustomerProducts?customerid='+this.form.value.cbCustomerID+'&warehouseid='+this.currentUser.warehouseId).subscribe(
    data=>{this.ProductNameList=data; },
    error=>{ console.error(error);}
  );
}


checkBoxCellEditRenderer(params:any) {
  //console.log("params",params);
  const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      //console.log(val);
      this.ChargesList=[];
      this.TransferServiceList.forEach((i:any)=>{ 
        if(i.Add==true){
          this.ChargesList.push(
            {
             "Add":true,
             "TransferDID":this.DID,
             "ServiceID":i.ServiceID,
             "ServiceName":i.ServiceName,
             "C_Rate":i.C_Rate,
             "L_Rate":i.L_Rate
            });
          }        
      });
      this.ChargesList.slice();
    });    
    //console.log("ChargesList",this.ChargesList);
    return input;
}
OnCustomerarea(ckData:any){
  if(this.form.value.ckCustomerarea==true){
    if(this.form.value.cbToCustomerID==null || this.form.value.cbToCustomerID==""){
      alert("Please... Select To CustomerID ..!!!");
      document?.getElementById("cbToCustomerID")?.focus();
      this.form.controls['ckCustomerarea'].setValue(false);
    }else{
      const StorageDataCheck={
        wareHouseID:this.currentUser.warehouseId,
        companyID:0,
        fromCustomerID:0,
        toCustomerID:this.form.value.cbToCustomerID,
        transferDate:0,
        orderGivenBy:0,
        remarks:0,
        createdBy:0,
        financialYearID:0,
        storageAreaMasterID:0,
      };
      this.api.post('/Transfer/GetStorageArea',StorageDataCheck).subscribe(
        data=>{this.LocationList=data; //console.log(this.LocationList);
        },error=>{ console.error(error);}
      ); 
    }    
  }else{
    const StorageDataUnCheck={
      wareHouseID:this.currentUser.warehouseId,
      companyID:0,
      fromCustomerID:0,
      toCustomerID:0,
      transferDate:0,
      orderGivenBy:0,
      remarks:0,
      createdBy:0,
      financialYearID:0,
      storageAreaMasterID:0,
    };
    this.api.post('/Transfer/GetStorageArea',StorageDataUnCheck).subscribe(
      data=>{this.LocationList=data; //console.log(this.LocationList);
      },error=>{ console.error(error);}
    ); 
  }
}
onProductListRowClicked(event:any){
  const ChargeData={
    InwardID :0,
    CustomerID :Number(this.form.value.cbCustomerID),
    Remarks :"",
    CreatedBy :0,
    serviceID :0,
    ProductID :Number(event.data.ProductID),
    CompanyId :0,
    WarehouseId :this.currentUser.warehouseId,
    FinantialYearId:0, 
    challan :"",
    StorageAreaMasterID :0,
    FinancialYear :"",
  };
  //console.log(ChargeData);
  this.api.post('/Transfer/GetTransferServices',ChargeData).subscribe(
    data=>{this.TransferServiceList =data;    //console.log("onProductListRowClicked",this.TransferServiceList);
    },error=>{ console.error(error);});
    this.form.patchValue({
      txtLotNo:event.data.LotNo,
      cbproduct_id:event.data.ProductID, 
      txtBrand:event.data.BrandName,
      txtBalanceQty:event.data.BalanceQuantity,
      txtCount:event.data.CountInPacket,
      cbStorageAreaType:event.data.StorageAreaTypeID,      
      cbLocation:event.data.StorageAreaID,          
  });
  this.InwardDID=0;  
  this.InwardLocationID=0;  
  this.StorageAreaID=0; 
  this.InwardDID=event.data.InwardDID;  
  this.InwardLocationID=event.data.InwardLocationID;   
  this.StorageAreaID=event.data.StorageAreaID ;  
  document?.getElementById("txtTransferQty")?.focus();
}
onKeyTransferQty(Tqty:string){
  if(Number(this.form.value.txtTransferQty)>0)
    {
      if(Number(this.form.value.txtBalanceQty)<Number(Tqty))
      {
        this.dialog.alert("Transfer Quantity is less than equal to balance quantity ....!!!");
        ///alert("Transfer Quantity is less than equal to balance quantity ....!!!");
        this.form.controls['txtTransferQty'].setValue('');
      }
    }
}
OnAddClick(){   
  
  if(this.form.value.txtTransferQty==null || this.form.value.txtTransferQty==""|| this.form.value.txtTransferQty=="0"){
    //alert("Please .... Enter Transfer Quantity...");
    document?.getElementById("txtTransferQty")?.focus();
    this.dialog.alert("Please .... Enter Transfer Quantity...");    
    return;
  }else if(this.form.value.cbLabourContractor==null || this.form.value.cbLabourContractor==""){
    //alert("Please .... Enter Labour Contractor");
    document?.getElementById("cbLabourContractor")?.focus();
    this.dialog.alert("Please .... Enter Labour Contractor....");   
    return;
  }else {
      
    if(this.flag==true){
      const indexTransferDetail=this.DetailList.filter((x:any)=>x.TransferDID!=this.DID);
      this.DetailList=indexTransferDetail;
      const indexTransfercharges=this.TransferchargesList.filter((x:any)=>x.TransferDID!=this.DID);
      this.TransferchargesList=indexTransfercharges;  
    }
    const ProductName=this.ProductNameList.filter((x:any)=>x.ProductID==this.form.value.cbproduct_id);
    const LocationName=this.LocationList.filter((x:any)=>x.StorageAreaID==this.form.value.cbLocation);
    const StorageAreaTypeName=this.StorageAreaTypeList.filter((x:any)=>x.StorageAreaTypeID==this.form.value.cbStorageAreaType);
    const LabourContractorName=this.labourContractorList.filter((x:any)=>x.LabourContractorID==this.form.value.cbLabourContractor);
  
    if(this.flag==false){
      this.DID=this.DID+1;      
      this.TrnsNewLotList.push(
        {
          "LotNo":String(this.NewLotNoID),
           "Prefix":'',
           "Sufix":'',
        });
        this.NewLotNoID=this.NewLotNoID+1;
    }
    
    this.newTransferDetail=[];
    //this.DetailList=[];
    this.newTransferDetail={
      TransferDID:this.DID,
      InwardDID:this.InwardDID,
      LotNo:this.form.value.txtLotNo,
      NewLotNo:this.form.value.txtNewLotNo,	
      ProductID:this.form.value.cbproduct_id,
      ProductName:ProductName[0].ProductName,
      BrandName:this.form.value.txtBrand,
      InwardLocationID:this.InwardLocationID,
      StorageAreaID:this.StorageAreaID,
      ToStorageAreaID:Number(this.form.value.cbLocation),
      Location:LocationName[0].StorageArea,
      BalanceQty:this.form.value.txtBalanceQty,
      TransferQty:Number(this.form.value.txtTransferQty),
      StorageAreaTypeID:this.form.value.cbStorageAreaType,
      StorageAreaType:StorageAreaTypeName[0].ServiceName,
      LabourContractorID:this.form.value.cbLabourContractor,
      LabourContractorName:LabourContractorName[0].ContractorName,      
      countInPacket:this.form.value.txtCount,
      ProductRemarks:this.form.value.cbRemarks,
    };
    
    this.DetailList.push(this.newTransferDetail);
    this.TransferDetailsList=this.DetailList.slice();
    
    this.TransferServiceList.forEach((i:any)=>{ 
      if(i.Add==true){
        this.TransferchargesList.push(
          {
            "Add":true,
            "TransferDID":this.DID,
             "ServiceID":i.ServiceID,
             "ServiceName":i.ServiceName,
             "C_Rate":i.C_Rate,
             "L_Rate":i.L_Rate
          });
        }        
      });  
  
  this.NewLotNo=this.NewLotNolist[0].Prefix+this.NewLotNoID+this.NewLotNolist[0].Sufix;
  this.form.controls['txtNewLotNo'].setValue(this.NewLotNo);
  //--------------------------Reset Product Details
  this.form.controls['txtLotNo'].reset();
  this.form.controls['cbproduct_id'].reset();
  this.form.controls['txtBalanceQty'].reset();
  this.form.controls['txtBrand'].reset();
  this.form.controls['txtCount'].reset();
  this.form.controls['txtTransferQty'].reset();
  this.form.controls['cbStorageAreaType'].reset();
  this.form.controls['txtBillingCycle'].reset();
  this.form.controls['ckCustomerarea'].reset();
  this.form.controls['cbRemarks'].reset();  
  this.form.controls['cbLocation'].reset();
  this.TransferServiceList=[];
  //this.form.controls['cbLabourContractor'].reset();
  }  
  console.log("Add_detail",this.TransferDetailsList);
  console.log("Add_charges",this.TransferchargesList);
}
onRowDblclickedTransfer(Data:any,event:any){
  this.flag =true;
  //console.log("Data",Data.cellSelection[0].rowData);
  this.InwardDID=0;  
  this.InwardLocationID=0;  
  this.StorageAreaID=0;
  this.DID =Data.cellSelection[0].rowData.TransferDID;
  this.InwardDID=Data.cellSelection[0].rowData.InwardDID;  
  this.InwardLocationID=Data.cellSelection[0].rowData.InwardLocationID;   
  this.StorageAreaID=Data.cellSelection[0].rowData.StorageAreaID;

  this.form.patchValue({
    txtLotNo:Data.cellSelection[0].rowData["LotNo"],
    cbproduct_id:Data.cellSelection[0].rowData["ProductID"],
    txtBalanceQty:Data.cellSelection[0].rowData["BalanceQty"],
    txtBrand:Data.cellSelection[0].rowData["BrandName"],
    txtCount:Data.cellSelection[0].rowData["countInPacket"],
    txtTransferQty:Data.cellSelection[0].rowData["TransferQty"],
    cbStorageAreaType:Data.cellSelection[0].rowData["StorageAreaTypeID"],
    txtBillingCycle:"",
    ckCustomerarea:false,
    cbRemarks:Data.cellSelection[0].rowData["ProductRemarks"],  
    txtNewLotNo:Data.cellSelection[0].rowData["NewLotNo"],
    cbLocation:Data.cellSelection[0].rowData["ToStorageAreaID"],
    cbLabourContractor:Data.cellSelection[0].rowData["LabourContractorID"],      
});
this.TransferDetailtab=0;
const ChargeData={
  InwardID :0,
  CustomerID :Number(this.form.value.cbCustomerID),
  Remarks :"",
  CreatedBy :0,
  serviceID :0,
  ProductID :Number(Data.cellSelection[0].rowData["ProductID"]),
  CompanyId :0,
  WarehouseId :this.currentUser.warehouseId,
  FinantialYearId:0, 
  challan :"",
  StorageAreaMasterID :0,
  FinancialYear :"",
};
//console.log(ChargeData);
this.api.post('/Transfer/GetTransferServices',ChargeData).subscribe(
  data=>{this.TransferServiceList =data; //console.log("TransferServiceList",this.TransferServiceList);
    this.serviceListEditBind(); 
    //console.log("Edit",this.TransferServiceList);
  },error=>{ console.error(error);});
}
serviceListEditBind(){  
  const TransferL=this.TransferchargesList.filter((x:any)=>x.TransferDID==this.DID);  
  this.TransferServiceTest=TransferL;
  let result = this.TransferServiceTest.concat( this.TransferServiceList.filter( (i2:any) => !this.TransferServiceTest.find( (i1:any) => i1.ServiceID == i2.ServiceID ) ) );
  this.TransferServiceList=result;  
  this.TransferServiceList.forEach((i:any) => {
    if(i.ServiceID>0)
    {
      i.TransferDID=this.DID;
    }});
}
OnCancelledTransfer(Td:any){
  console.log(Td.rowData)
  if(window.confirm("Do you want to cancel your Transfer...!!!")){
    const SearchData={
      transferID:Number(Td.rowData.TransferID),
      wareHouseID:Number(Td.rowData.WareHouseID),
      companyID:0,
      fromCustomerID:Number(Td.rowData.FromCustomerID),
      toCustomerID:0,
      transferDate:"",
      orderGivenBy:"",
      remarks:"",
      createdBy:0,
      financialYearID:0,
      storageAreaMasterID:0,
      StatusID:Number(Td.rowData.StatusID),
    };
    console.log(SearchData)
    this.api.post('/Transfer/TransferStatus_validation',SearchData).subscribe(
      data=>{data;
        if(Number(data[0])>0){
          if(Number(Td.rowData.StatusID)==72){
            this.dialog.alert("Sorry,Transfer already deactivated or deleted ....!!!");
          }else{
            const cancelDataParam={
              transferID:Number(Td.rowData.TransferID),
              wareHouseID:Number(Td.rowData.WareHouseID),
              companyID:0,
              fromCustomerID:Number(Td.rowData.FromCustomerID),
              toCustomerID:Number(Td.rowData.ToCustomerID),
              transferDate:"",
              orderGivenBy:"",
              remarks:"",
              createdBy:this.currentUser.userId,
              financialYearID:0,
              storageAreaMasterID:0,
              StatusID:Number(Td.rowData.StatusID),
            };
            this.api.post('/Transfer/Transfer_Cancelled',cancelDataParam).subscribe(
              data=>{data;
                this.dialog.alert(data);
                this.BindTransferList();
            },error=>{ console.error(error);});
          }
        }else
          {
            this.dialog.alert("Please re-perform your delete operation...!!!");
          }       
      },error=>{ console.error(error);});    
  }    
}
//-----------end
// TransferProductListCol: MtxGridColumn[] = [
//   {    header:"InwardDID",    field:"InwardDID",    hide:false,  },
//   {    header:"ProductID",    field:"ProductID",    hide:false,  },
//   {    header:"ProductName",    field:"ProductName",  },  
//   {    header:"LotNo",    field:"LotNo",  },
//   {    header:"FirstLotNo",    field:"FirstLotNo",    hide:false,  },
//   {    header:"BrandName",    field:"BrandName",  },
//   {    header:"CountInPacket",    field:"CountInPacket",  },
//   {    header:"InwardLocationID",    field:"InwardLocationID",    hide:false,  },
//   {    header:"StorageAreaID",    field:"StorageAreaID",    hide:false,  },
//   {    header:"Location",    field:"Location",  },
//   {    header:"StorageAreaTypeID",    field:"StorageAreaTypeID", hide:false,  },
//   {    header:"StorageAreaType",    field:"StorageAreaType",  },
//   {    header:"BalanceQuantity",    field:"BalanceQuantity",hide:false,  },
//   {    header:"ProductRemarks",    field:"ProductRemarks",  },
// ];

ShiftingProductListCol: ColDef[] = [
  {    headerName:"InwardDID",    field:"InwardDID",    hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"ProductID",    field:"ProductID",    hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"ProductName",    field:"ProductName", filter: 'agTextColumnFilter',floatingFilter: true, },  
  {    headerName:"LotNo",    field:"LotNo", filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"FirstLotNo",    field:"FirstLotNo",    hide:false, filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"BrandName",    field:"BrandName", filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"CountInPacket",    field:"CountInPacket", filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"InwardLocationID",    field:"InwardLocationID",    hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"StorageAreaID",    field:"StorageAreaID",    hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"Location",    field:"Location", filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"StorageAreaTypeID",    field:"StorageAreaTypeID", hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"StorageAreaType",    field:"StorageAreaType", filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"BalanceQuantity",    field:"BalanceQuantity",hide:false, filter: 'agTextColumnFilter',floatingFilter: true, },
  {    headerName:"ProductRemarks",    field:"ProductRemarks", filter: 'agTextColumnFilter',floatingFilter: true, },
];
serviceColumns:ColDef[] = [
  {
    field: 'Add', cellRenderer: (params:any) => this.checkBoxCellEditRenderer(params), 
    hide:false,width:10,     
  },
  { field: 'TransferDID', hide:true },
  { field: 'ServiceID', hide:true,resizable: false },
  { field: 'ServiceName' }, { field: 'C_Rate', hide:true }, { field: 'L_Rate', hide:true },
];
TransferListColumnDefs:ColDef[] = [
  {  headerName: 'Action', width:100 ,floatingFilter: false,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.OnCancelledTransfer.bind(this),
      label: 'Click 1'
    }
  },
  {headerName:'TransferID',field:'TransferID',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'TransferNo',field:'TransferNo',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'WareHouseID',field:'WareHouseID',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'FromCustomerID',field:'FromCustomerID',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'FromCustomer',field:'FromCustomer',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'ToCustomerID',field:'ToCustomerID',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'ToCustomer',field:'ToCustomer',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'TransferDate',field:'TransferDate',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'OrderGivenBy',field:'OrderGivenBy',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'WareHouseName',field:'WareHouseName',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'Remarks',field:'Remarks',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'StatusID',field:'StatusID',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  {headerName:'Status',field:'Status',hide:false,filter:'agTextColumnFilter',floatingFilter:true,},
  ];

  TransferDetailColumns: MtxGridColumn[] = [
    {    header:"TransferDID",    field:"TransferDID",    hide:true,  },    
    {    header:"InwardDID",    field:"InwardDID",hide:true,  },
    {    header:"LotNo",    field:"LotNo", hide:false,  },
    {    header:"NewLotNo",    field:"NewLotNo" },
    {    header:"ProductID",    field:"ProductID",hide:true  },
    {    header:"ProductName",    field:"ProductName",  },
    {    header:"BrandName",    field:"BrandName",  },
    {    header:"InwardLocationID",    field:"InwardLocationID",hide:true  },
    {    header:"StorageAreaID",    field:"StorageAreaID",hide:true },
    {    header:"ToStorageAreaID",    field:"ToStorageAreaID",hide:true  },
    {    header:"Location",    field:"Location",  },
    {    header:"BalanceQty",field:"BalanceQty",},
    {    header:"TransferQty",    field:"TransferQty",  },
    {    header:"StorageAreaTypeID",    field:"StorageAreaTypeID",hide:true},
    {    header:"StorageAreaType",    field:"StorageAreaType",  },
    {    header:"LabourContractorID",    field:"LabourContractorID",hide:true},
    {    header:"LabourContractorName",    field:"LabourContractorName",  },
    {    header:"countInPacket",    field:"countInPacket",  },
    {    header:"ProductRemarks",    field:"ProductRemarks",  },
  ];
}
export class TransferCharege{
  Add:boolean=false;
  TransferDID:number=0;
  ServiceID:number=0;
  ServiceName:string="";
  C_Rate:number=0;
  L_Rate:number=0;
}
export class TransferDetails{
  TransferDID:number=0;  
  InwardDID:number=0;
  LotNo:string="";
  NewLotNo:string="";
  ProductID:number=0;	
  ProductName:string="";
  BrandName:string="";
  InwardLocationID:number=0;
  StorageAreaID:number=0;
  ToStorageAreaID:number=0;
  Location:string="";
  BalanceQty:number=0;
  TransferQty:number=0;
  StorageAreaTypeID:number=0;
  StorageAreaType:string="";
  LabourContractorID:number=0;
  LabourContractorName:string="";
  countInPacket:string="";
  ProductRemarks:string="";
}
export class TransferNewLotList{
   LotNo:string=""; 
   Prefix:string=""; 
   Sufix:string="";
}
export class TransferDetailSave{
  TransferDID:number=0;
  InwardDID:number=0;
  ProductID:number=0;
  LotNo:string="";
  InwardLocationID:number=0;
  StorageAreaID:number=0;
  TransferQuantity:number=0;
  ToStorageAreaID:number=0;
  LabourContractorID:number=0;
  Remarks:string="";
  StorageAreaTypeID:number=0;
  NewLotNo:string="";
}
export class TransferCharegeSave{
  Add:boolean=false;
  TransferDID:number=0;
  ServiceID:number=0;
  ServiceName:string="";
  C_Rate:number=0;
  L_Rate:number=0;
}
