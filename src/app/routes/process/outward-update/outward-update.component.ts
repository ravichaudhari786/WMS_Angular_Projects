import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColDef,GridApi } from 'ag-grid-community';
import { ApiService } from '@core';
import { User } from '@core/authentication/interface';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn,MtxGridRowClassFormatter  } from '@ng-matero/extensions';

@Component({
  selector: 'app-outward-update',
  templateUrl: './outward-update.component.html',
  styleUrls: ['./outward-update.component.scss']
})
export class OutwardUpdateComponent implements OnInit {
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
  LabourContractorList:any;
  DeliverToList:any;
  loadingList:any;
  InwardID:number=0;
  InwardDID:number=0;
  CustomerName:string="";
  BalanceQuantity:number=0;
  OutQuantity:number=0;
  PendingDO:number=0;
  LotUpdateDataList:Array<LotUpdatedList>=[];
  private currentUser:User;
  CustomerList:any;
  strUserID:any;
  UserID:number=0;

  constructor(private fb: FormBuilder,private api:ApiService,public dialog: MtxDialog) {
    this.currentUser=this.api.getCurrentUser();
 
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      Customerid: [null, Validators.required],
      txtOutwardNo: [null, Validators.required],
      cbDockID: [null, Validators.required],
      cbLoadingBy: [null, Validators.required],
      txtTruckNo: [null, Validators.required],
      txtContainerNo: [null, Validators.required],
      cbLabourContractor: [null, Validators.required],
      cbDeliverTo: [null, Validators.required],
      remarks: [''],
      
    });
    this.LotDetailList=[];
    this.BindComboBox();
  }
  get f() { return this.form.controls; }

  BindComboBox(){

      
  this.api.get('/Customer').subscribe(
    data => { this.CustomerList = data;  },
    error=>{ console.error(error);}
  );
  this.api.get('/dock').subscribe(
    data=>{this.dockList=data; },
    error=>{ console.error(error);}
  );
 
  this.api.get('/UnloadingBy').subscribe(
    data=>{this.loadingList=data; console.log(data)},
    error=>{ console.error(error);}
  );
  this.api.get('/LabourContracter/LabourContractors_Select').subscribe(
    data => {this.LabourContractorList = data;  },
    error => { console.error(error); }
    
  );

   this.api.get('/CustomerParty').subscribe(
    data=>{this.DeliverToList=data; },
    error=>{ console.error(error);}
  );



  }
  OnSearch(){
    if(this.form.value.Customerid==null||this.form.value.Customerid==''){
      document?.getElementById("Customerid")?.focus();
      this.dialog.alert("Select Customer .....");
      return;
    }
    if(this.form.value.txtOutwardNo==null||this.form.value.txtOutwardNo==''){
      document?.getElementById("txtOutwardNo")?.focus();
      this.dialog.alert("Select OutwardNo .....");
      return;
    }else{
      const DataParam={
        CustomerID:2,//this.form.value.Customerid,
        OutWardNo:"146",//this.form.value.txtOutwardNo,
        
      }
      this.api.post('/OutWard_Update/OutwardUpdate_Search',DataParam).subscribe(
        data=>{this.LotDetailList=data;},
        error=>{ console.error(error);});
    }
    console.log("LotDeatailList",this.LotDetailList)

  }
  onSubmit(data:any){
    
   
    if(this.LotDetailList.length>0){
      const customeri=this.CustomerList.filter((x:any)=>x.CustomerName==this.LotDetailList[0].CustomerName);
      const loadingi=this.loadingList.filter((x:any)=>x.UserName==this.LotDetailList[0].LoadingBy);
      const Updateddata={
    "outWardID":this.LotDetailList[0].outWardID,
    "docID":this.LotDetailList[0].DocID,
    "truckNo":this.LotDetailList[0].TruckNo,
    "containerNo":this.LotDetailList[0].ContainerNo,
    "loadingBy":loadingi[0].UserID,
    "customerPartyID":this.LotDetailList[0].customerPartyID,
    "remarks":this.LotDetailList[0].Remarks,
    "labourContractorID":this.LotDetailList[0].LabourContractorID,
    "customerID":customeri[0].CustomerID,
    "createdBy":this.LotDetailList[0].createdBy,
      };
      this.api.post('/OutWard_Update/OutwardUpdate_insert',Updateddata).subscribe(
        data=>{data;
          //console.log(data)
          this.dialog.alert(data);
          this.form.controls['outWardID'].reset();
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
      
        const DockNames=this.dockList.filter((x:any)=>x.DockID==this.form.value.cbDockID);
        const loadings=this.loadingList.filter((x:any)=>x.UserID==this.form.value.cbLoadingBy);
        const LabourContracter=this.LabourContractorList.filter((x:any)=>x.LabourContractorID==this.form.value.cbLabourContractor);
        const DeliverTo=this.DeliverToList.filter((x:any)=>x.CustomerPartyID==this.form.value.cbDeliverTo);
        this.LotDetailList.forEach((i:any)=>{ 
          if(this.LotDetailList.length>0){
            this.LotUpdateDataList.push(
              {
                "outWardID": i.OutWardID,
                "DocID": this.form.value.cbDockID,
                "DockName": DockNames[0].DockName,
                "TruckNo": this.form.value.txtTruckNo,
                "ContainerNo": this.form.value.txtContainerNo,
                "LoadingBy": loadings[0].UserName,
                "LabourContractorID":i.LabourContractorID,
                "Remarks": this.form.value.remarks,
                "DeliverTo":DeliverTo[0].PartyName,
                "createdBy": i.CreatedBy,
                "customerPartyID":DeliverTo[0].CustomerPartyID,
                "CustomerName":i.CustomerName,
                "ContractorName":i.ContractorName,
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


    // this.form.controls['Customerid'].reset();
    // this.form.controls['txtOutwardNo'].reset();
    this.form.controls['cbDockID'].reset();
    this.form.controls['cbLoadingBy'].reset();
    this.form.controls['txtTruckNo'].reset();
    this.form.controls['txtContainerNo'].reset();
    this.form.controls['cbLabourContractor'].reset();
    this.form.controls['cbDeliverTo'].reset();
    this.form.controls['remarks'].reset();
  }
 
  
  onProductListRowClicked(event :any){


  this.strUserID=this.loadingList.filter((x:any)=>x.UserName==event.data.LoadingBy);
    this.form.patchValue({
      
      cbDockID:event.data.DocID,
      cbLoadingBy:this.strUserID[0].UserID,
      txtTruckNo:event.data.TruckNo,
      txtContainerNo:event.data.ContainerNo,
      cbLabourContractor:event.data.LabourContractorID,
      cbDeliverTo:event.data.CustomerPartyID,
      remarks:event.data.Remarks,          
  });
  }

  LotColumnDefs: ColDef[] = [    
    {    headerName:'outWardID',    field:'OutWardID',    hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'CustomerName',    field:'CustomerName',    minWidth: 200,  filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'DocID',    field:'DocID',    hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
     {    headerName:'DockName',    field:'DockName',    minWidth: 120, filter: 'agTextColumnFilter',floatingFilter: true, },
     {    headerName:'UserID',    field:'UserID', hide:true, minWidth: 120, filter: 'agTextColumnFilter',floatingFilter: true, },
     {    headerName:'LoadingBy',    field:'LoadingBy',  minWidth: 120, filter: 'agTextColumnFilter',floatingFilter: true, },
     {    headerName:'TruckNo',    field:'TruckNo',filter: 'agTextColumnFilter',floatingFilter: true, },
     {    headerName:'ContainerNo',    field:'ContainerNo',hide:false,  filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'LabourContractorID',    field:'LabourContractorID', hide:true,filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'LabourContractor',    field:'ContractorName', filter: 'agTextColumnFilter',floatingFilter: true, },
    {    headerName:'CustomerPartyID',    field:'CustomerPartyID',hide:true,  filter: 'agTextColumnFilter',floatingFilter: true,},
    {    headerName:'DeliverTo',    field:'DeliverTo',hide:false,  filter: 'agTextColumnFilter',floatingFilter: true,},
   {    headerName:'Remarks',    field:'Remarks', minWidth: 120, filter: 'agTextColumnFilter',floatingFilter: true, },
  
  ];
}
export class LotUpdatedList{
 
  
  outWardID:number=0;
  CustomerName:string="";
  DocID:number=0;
  DockName:string="";
  TruckNo:string="";	
  ContainerNo:string="";
  createdBy:string="";
  LoadingBy:string="";
  customerPartyID:number=0;
  DeliverTo:string="";
  Remarks:string="";
  LabourContractorID:number=0;
  ContractorName:string="";
  

}
export class LotDetailList{
 
  
  OutWardID:number=0;
  CustomerName:string="";
  DocID:number=0;
  DockName:string="";
  TruckNo:string="";	
  ContainerNo:string="";
  CreatedBy:string="";
  LoadingBy:string="";
  CustomerPartyID:number=0;
  DeliverTo:string="";
  Remarks:string="";
  LabourContractorID:number=0;
  ContractorName:string="";

}
