import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@core/authentication/interface';
import { ColDef,GridApi } from 'ag-grid-community';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn,MtxGridRowClassFormatter  } from '@ng-matero/extensions';
import { DispatchdeletebuttonComponent } from './dispatchdeletebutton/dispatchdeletebutton.component'
@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {
  customerList:any;
  frameworkComponents: any;
  customePartyList:any;
  remarkList:any;
  SaveDispatch: any = {}; 
  tab=0;
  clickSave: boolean=false;
  form!: FormGroup;
  DispatchSearchList:any;                         
  private currentUser:User;
  DeliveryOrderID:number=0;
  DispatchDetailList:Array<DispatchDetail>=[];
  DispatchDetail:Array<DDetail>=[];
  DispatchList:any;
  constructor(private api:ApiService,private fb: FormBuilder,public dialog: MtxDialog) 
  { 
    this.currentUser=this.api.getCurrentUser();
    this.form = this.fb.group({
      customer_id: [null, Validators.required],
      DeliveryTo_ID: [null, Validators.required],
      txtShipping_Address: [null, Validators.required],
      OrderGivenBy_id: [null, Validators.required],
      txtTruckNo: [null, Validators.required],
      txtContainerNo: [null, Validators.required],
      DispatchRemarks: [null, Validators.required],
      txtTotalDispatchQty: [null, Validators.required],
    });
    this.frameworkComponents = {
      buttonRenderer: DispatchdeletebuttonComponent,
    }
  }

  ngOnInit(): void {
    this.BindDropdown();
    this.onDispatchList();
    this.DispatchSearchList=[];
    this.DispatchDetailList=[];
  }
  async BindDropdown(){
    this.api.get('/Customer').subscribe(
     data=>{this.customerList=data},
     error=>{ console.error(error);}
   );
   this.api.get('/CustomerParty').subscribe(
     data=>{this.customePartyList=data;},
     error=>{ console.error(error);}
   );
   this.api.get('/Remarks').subscribe(
     data=>{this.remarkList=data.filter((p:any)=>p.ProcessID==2);},
     error=>{ console.error(error);}
   );
   
 }

 tabDeliveryOrderchange(e:any){
    this.tab=e;
    this.onDispatchList();
 }
 OnSearchClick()
 {
    if(this.form.value.customer_id==null || this.form.value.customer_id=="")
    {
      alert("Please .... Select Customer Name");
      document?.getElementById("customer_id")?.focus();
      return;
    }
    else
    {
      this.api.get('/Dispatch/DispatchSearch?CustomerID='+this.form.value.customer_id+'&WarehouseId='+this.currentUser.warehouseId+'&CompanyID='+this.currentUser.companyId).subscribe(
        data=>{this.DispatchSearchList=data;},
        error=>{ console.error(error);});
    }  
  }

  rowDODoubleClicked(e:any)
  {
    const DeliverTo=this.customePartyList.filter((x:any)=>x.PartyName==e.data.DeliverTo);
    if(DeliverTo.length>0)
    {
      const DeliverOrderItem:any={
        customer_id:this.form.value.customer_id,
        DeliveryTo_ID:DeliverTo[0]["CustomerPartyID"],
        txtShipping_Address:e.data.ShippingAddress,
        OrderGivenBy_id:e.data.OrderGivenBy,
        txtTruckNo:e.data.TruckNo,
        txtContainerNo:e.data.ContainerNo,
        DispatchRemarks:e.data.Remarks,
        txtTotalDispatchQty:0
      };
      this.form.setValue(DeliverOrderItem);
    }
    else
    {
      const DeliverOrderItem:any={
        customer_id:this.form.value.customer_id,
        DeliveryTo_ID:0,
        txtShipping_Address:e.data.ShippingAddress,
        OrderGivenBy_id:e.data.OrderGivenBy,
        txtTruckNo:e.data.TruckNo,
        txtContainerNo:e.data.ContainerNo,
        DispatchRemarks:e.data.Remarks,
        txtTotalDispatchQty:0
      };
      this.form.setValue(DeliverOrderItem);
    }    
    this.DeliveryOrderID=e.data.DeliveryOrderID;
    this.api.get('/Dispatch/GetDispatchDetails?DeliveryOrderID='+e.data.DeliveryOrderID+'&DeliveryOrderNo='+e.data.DeliveryOrderNo).subscribe(
      data=>{this.DispatchDetailList=data;
      }, error=>{ console.error(error);});
  }

  onDispatchCellKeyPress(e:any)
    {console.log(this.DispatchDetailList);
      if(e.data.BalanceQuantity>e.data.DispatchQuantity)
      {
        this.onDispatchDetailGridRefresh();
      }else if(e.data.BalanceQuantity==e.data.DispatchQuantity)
      {
        this.onDispatchDetailGridRefresh();
      }     
      else if(e.data.BalanceQuantity<e.data.DispatchQuantity)
      {        
        this.DispatchDetailList.forEach((i:any) => {
          if(i.InwardLocationID==e.data.InwardLocationID)
          {
            i.DispatchQuantity=0;
          }});
          alert("DispatchQuantity Must be less than or equal to BalanceQuantity.....!!!");
        this.onDispatchDetailGridRefresh();
      }
    }
    onDispatchDetailGridRefresh(){    
      let newRowData = this.DispatchDetailList.filter((row:any) => {
        return row;
      });
      this.DispatchDetailList = newRowData;
      var Totalqty = this.DispatchDetailList.map(v1=>v1.DispatchQuantity).reduce((acc, v1) => v1 + acc);
      console.log(Totalqty);
      this.form.controls['txtTotalDispatchQty'].setValue(Totalqty);
    }
    onDispatchList()
    {    
      this.api.get('/Dispatch/Dispatch_Select').subscribe(
        data=>{this.DispatchList=data;
          //console.log(this.DispatchList);
        }, error=>{ console.error(error);});
    }
    OnActionDispatch(d:any){
      if(String(d.actions)=='Delete'){        
        if (d.rowData.StatusID== 41)
        {
          this.dialog.alert("This transaction already generated Outward, You can't delete it....!!!");
        }
        else if (d.rowData.StatusID== 43)
        {
          this.dialog.alert("This transaction already generated Cancelled, You can't delete it....!!!");
        }
        else
        {
          let bar = confirm('Do you want to deleted or deactivate your dispatch...');
          if(bar==true)
          {
            let foo = prompt('Remarks ');
            //console.log(bar, foo);
            this.api.post('/Dispatch/Dispatch_Cancelled?DispatchID='+d.rowData.DispatchID+'&Remark='+foo+'&CreatedBy='+this.currentUser.userId).subscribe(
              data=>{data;
                this.dialog.alert(data);
                this.onDispatchList();},
              error=>{ console.error(error);});
          }
          
        }
      }else if(String(d.actions)=='Print'){
        this.api.get('/Dispatch/DispatchReceipt?DispatchID='+d.rowData.DispatchID).subscribe(
          data => {
            data;
            console.log("OnDeliveryOrderActions=>",data)
            var pdfResult = data[0].Base64Str;
            let pdfWindow = window.open("")
            pdfWindow?.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(pdfResult) + "'></iframe>")
            
          },
          error => { console.error(error); }
        );
      }      
    }
    onDeleteDORow(e:any)
    {
      console.log(e);
      if (e.StatusID== 41)
      {
        alert("This transaction already generated Outward, You can't delete it....!!!");
      }
      else if (e.StatusID== 43)
      {
        alert("This transaction already generated Cancelled, You can't delete it....!!!");
      }
      else
      {
        let bar = confirm('Do you want to deleted or deactivate your dispatch...');
        if(bar==true)
        {
          let foo = prompt('Remarks ');
          //console.log(bar, foo);
          this.api.post('/Dispatch/Dispatch_Cancelled?DispatchID='+e.DispatchID+'&Remark='+foo+'&CreatedBy='+this.currentUser.userId).subscribe(
            data=>{data;
              alert(data);
              this.onDispatchList();},
            error=>{ console.error(error);});
        }
        
      }
    }

    onSaveDispatch()
    {
      var TotalDispatchQty;
      if(this.DispatchDetailList.length>0 )
      {
        TotalDispatchQty = this.DispatchDetailList.map(v1=>v1.DispatchQuantity).reduce((acc, v1) => v1 + acc);
      }
      else
      {
        TotalDispatchQty =0;
      }
      if(this.form.value.customer_id==null || this.form.value.customer_id==""){
        alert("Please .... Select Customer Name");
        document?.getElementById("customer_id")?.focus();
        return;
      }else if(this.form.value.DeliveryTo_ID==null || this.form.value.DeliveryTo_ID==""){
        alert("Please.... Select Deliver To..!!!");
        document?.getElementById("DeliveryTo_ID")?.focus();
        return;
      }else if(this.form.value.OrderGivenBy_id==null || this.form.value.OrderGivenBy_id==""){
        alert("Please Enter Order Given By..!!!");
        document?.getElementById("OrderGivenBy_id")?.focus();
        return;
      }else if(TotalDispatchQty<=0){
        alert("Please .... Add Dispatch quantity In delivery order detail ");
        return;
      }else
      {
        console.log(TotalDispatchQty);
        //alert("Work Fine ...!!!");
      this.clickSave=true;
        this.DispatchDetail=[];
        const DODetail=this.DispatchDetailList.filter((x:any)=>x.DispatchQuantity>0);
            DODetail.forEach((i:any)=>{
              this.DispatchDetail.push({
                "DeliveryOrderDID":i.DeliveryOrderDID ,
                "ProductID":i.ProductID, 
                "InwardDID":i.InwardDID, 
                "LotNo":i.LotNo, 
                "DispatchQuantity":i.DispatchQuantity, 
                "InwardLocationID":i.InwardLocationID, 
                "StorageAreaID":i.StorageAreaID,
              });
            });
            this.DispatchDetail.slice();
            console.log(this.DispatchDetail);
            this.SaveDispatch={
              DispatchID:0,
              CustomerID: this.form.value.customer_id,
              CustomerPartyID:this.form.value.DeliveryTo_ID,
              WareHouseID:this.currentUser.warehouseId,
              ShippingAddress:this.form.value.txtShipping_Address,
              OrderGivenBy:this.form.value.OrderGivenBy_id,
              Remarks:this.form.value.DispatchRemarks,
              CreatedBy:this.currentUser.userId,              
              DeliveryOrderID:this.DeliveryOrderID,
              TruckNo:this.form.value.txtTruckNo,
              ContainerNo:this.form.value.txtContainerNo,
              DispatchDetailModel:this.DispatchDetail
            };
            console.log(this.SaveDispatch);
            this.api.post('/Dispatch/SaveDispatch',this.SaveDispatch).subscribe(
              data=>{data;
                console.log(data);
                alert(data.Table[0]["Message"]);
              },error=>{ console.error(error);this.clickSave=false;});
      }
    }

    onResetDispatch(){
      this.form.reset();
      this.BindDropdown();
      this.DispatchSearchList=[];
      this.DispatchDetailList=[];
      this.clickSave=false;
    }
    // onKeyfilter(e:string){
    //   this.api.get('/Dispatch/Dispatch_Select').subscribe(
    //     data=>{this.DispatchList=data;
    //       var searchName = e;
    //       const lists=this.DispatchList;
    //       let res = lists.filter((obj:any) => 
    //       (obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.DispatchNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.DeliveryOrderNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.OrderGivenBy.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.PartyName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.Remarks.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.ShippingAddress.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.TruckNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.ContainerNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //       (obj.Status.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) 
    //       );
    //       this.DispatchList=res;
    //     },
    //     error=>{ console.error(error);}
    //   );
    // }
    
  DispatchDetailcolumnDefs: ColDef[] = [
  { headerName:'DeliveryOrderNo',field: 'DeliveryOrderNo',hide:false,filter: 'agTextColumnFilter',floatingFilter: true, },
  { headerName:'DeliveryOrderDID',field: 'DeliveryOrderDID',hide:true,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'ProductID',field: 'ProductID',hide:true,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'ProductName',field: 'ProductName',hide:true,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'LotNo',field: 'LotNo',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'StorageArea',field: 'StorageArea',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'InwardDID',field: 'InwardDID',hide:true,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'InwardLocationID',field: 'InwardLocationID',hide:true,filter: 'agTextColumnFilter',floatingFilter: true},
  { headerName:'DOQuantity',field: 'DOQuantity',hide:false,filter: 'agTextColumnFilter',floatingFilter: true},
  { headerName:'BalanceQuantity',field: 'BalanceQuantity',hide:false,filter: 'agTextColumnFilter',floatingFilter: true},
  { headerName:'DispatchQuantity',field: 'DispatchQuantity',hide:false,filter: 'agNumberColumnFilter',valueParser: "Number(newValue)",
  floatingFilter: true,cellEditorPopup: true,sort:"desc",editable: true,cellStyle: params => {
    if (params.value >0 ) {
        return {color: 'white', backgroundColor: '#FF0000'};
    }else{
      return {color: 'black', backgroundColor: '#98FB98'};
    }}},
  { headerName:'BrandName',field: 'BrandName',hide:false,filter: 'agTextColumnFilter',floatingFilter: true},
  { headerName:'ItemsInPacket',field: 'ItemsInPacket',hide:false,filter: 'agTextColumnFilter',floatingFilter: true},
  { headerName:'StorageAreaID',field: 'StorageAreaID',hide:true,filter: 'agTextColumnFilter',floatingFilter: true},
  { headerName:'OrderGivenBy',field: 'OrderGivenBy',hide:false,filter: 'agTextColumnFilter',floatingFilter: true},
];
DispatchSearchcolumnDefs: ColDef[] = [
  { headerName:'DeliveryOrderID',field: 'DeliveryOrderID',hide:true,  },
  { headerName:'DeliveryOrderNo',field: 'DeliveryOrderNo',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'DeliveryOrderDate',field: 'DeliveryOrderDate',hide:false,type:'date',cellRenderer: 'dateTimeRenderer' ,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'OrderGivenBy',field: 'OrderGivenBy',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'DeliverTo',field: 'DeliverTo',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'ShippingAddress',field: 'ShippingAddress',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'Remarks',field: 'Remarks',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'TruckNo',field: 'TruckNo',hide:false,filter: 'agTextColumnFilter',floatingFilter: true},
  { headerName:'ContainerNo',field: 'ContainerNo',hide:false,filter: 'agTextColumnFilter',floatingFilter: true},
  
];

// Dispatch_ListcolumnDefs: MtxGridColumn[] = [
//   { header: "Action",
//   field: 'Action',
//   minWidth: 80,
//   pinned:'left',    
//   type: 'button',
//   buttons: [
//    {
//       color: 'warn',
//       type: 'icon',
//       icon: 'delete',
//       tooltip: 'delete',
//       pop: true,
//       popTitle:'Do you want to delete Dispatch ....!!', //this.translate.stream('table_kitchen_sink.confirm_delete'),
//       popCloseText:'No', //this.translate.stream('table_kitchen_sink.close'),
//       popOkText:'Yes', 
//       popDescription:'',
//       popCloseColor:'warn',
//       popOkColor:'primary',
//       click: record => this.onDeleteDORow(record),
//     }
//   ]},
//   { header:'DispatchID',field: 'DispatchID',hide:true ,minWidth: 100,},
//   { header:'DeliveryOrderNo',field: 'DeliveryOrderNo',hide:false,minWidth: 100,},
//   { header:'DispatchNo',field: 'DispatchNo',hide:false,minWidth: 100,},
//   { header:'CustomerID',field: 'CustomerID',hide:true,minWidth: 100,},
//   { header:'CustomerName',field: 'CustomerName',hide:false,minWidth: 200,},
//   { header:'CustomerPartyID',field: 'CustomerPartyID',hide:true,minWidth: 100,},
//   { header:'PartyName',field: 'PartyName',hide:false,minWidth: 200,},
//   { header:'ShippingAddress',field: 'ShippingAddress',hide:false,minWidth: 100,},
//   { header:'OrderGivenBy',field: 'OrderGivenBy',hide:false,minWidth: 200,},
//   { header:'Status',field: 'Status',hide:false,minWidth: 200,},
//   { header:'Remarks',field: 'Remarks',hide:false,minWidth: 100,},
//   { header:'DispatchDate',field: 'DispatchDate',hide:false,minWidth: 100,type:'date',typeParameter:{ format:'dd-MM-yyyy'}},
//   { header:'WareHouseID',field: 'WareHouseID',hide:true,minWidth: 100,},
//   { header:'StatusID',field: 'StatusID',hide:true,minWidth: 100,},
//   { header:'CeatedBy',field: 'CeatedBy',hide:false,minWidth: 100,},
//   { header:'TruckNo',field: 'TruckNo',hide:false,minWidth: 100,},
//   { header:'ContainerNo',field: 'ContainerNo',hide:false,minWidth: 100,},
// ];
DispatchsListColumnDefs: ColDef[] = [
  {  headerName: 'Action', width:180 ,floatingFilter: false,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.OnActionDispatch.bind(this),
      label: 'Click 1'
    }
  },
  { headerName:'DispatchID',field: 'DispatchID',minWidth: 100,hide:false, filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'DeliveryOrderNo',field: 'DeliveryOrderNo',hide:false,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'DispatchNo',field: 'DispatchNo',hide:false,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'CustomerID',field: 'CustomerID',hide:true,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'CustomerName',field: 'CustomerName',hide:false,minWidth: 200,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'CustomerPartyID',field: 'CustomerPartyID',hide:true,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'PartyName',field: 'PartyName',hide:false,minWidth: 200,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'ShippingAddress',field: 'ShippingAddress',hide:false,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'OrderGivenBy',field: 'OrderGivenBy',hide:false,minWidth: 200,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'Status',field: 'Status',hide:false,minWidth: 200,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'Remarks',field: 'Remarks',hide:false,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'DispatchDate',field: 'DispatchDate',hide:false,minWidth: 100,type:'date',filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'WareHouseID',field: 'WareHouseID',hide:true,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'StatusID',field: 'StatusID',hide:true,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'CeatedBy',field: 'CeatedBy',hide:false,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'TruckNo',field: 'TruckNo',hide:false,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},
  { headerName:'ContainerNo',field: 'ContainerNo',hide:false,minWidth: 100,filter: 'agTextColumnFilter',floatingFilter: true,},];
//---------end 
}
export class DispatchDetail{
  DeliveryOrderNo:number=0;	
  DeliveryOrderDID:number=0;	
  ProductID:number=0;
  ProductName:string="";
  LotNo:string="";
  StorageArea:string="";
  InwardDID:number=0;
  InwardLocationID:number=0;
  DOQuantity:number=0;
  BalanceQuantity:number=0;
  DispatchQuantity:number=0;	
  BrandName:string="";	
  ItemsInPacket:string="";	
  StorageAreaID:number=0;	
  OrderGivenBy:string="";
}
export class DDetail{
  DeliveryOrderDID:number=0;
  ProductID:number=0; 
  InwardDID:number=0; 
  LotNo:number=0; 
  DispatchQuantity:number=0; 
  InwardLocationID:number=0; 
  StorageAreaID:number=0;
}