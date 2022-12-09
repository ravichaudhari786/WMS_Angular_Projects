import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { User } from '@core/authentication/interface';
import { ColDef,GridApi,RowClassRules } from 'ag-grid-community';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn,MtxGridRowClassFormatter  } from '@ng-matero/extensions';
import { endWith } from 'rxjs/operators';
import { DeliveryorderactionButtonsComponent } from './deliveryorderaction-buttons/deliveryorderaction-buttons.component'
@Component({
  selector: 'app-deliveryorder',
  templateUrl: './deliveryorder.component.html',
  styleUrls: ['./deliveryorder.component.scss']
})
export class DeliveryorderComponent implements OnInit {
  customerList:any;
  customePartyList:any;
  remarkList:any;
  //getRowStyle:any;
  OrderGivenByList:any=[];
  DeliveryOrdersearchList:Array<DeliveryOrderDetail>=[];
  DO_Detail:Array<DODetail>=[];
  form!: FormGroup;
  todayDate : any ;
  DeliveryOrderList:any;
  checkCust : boolean = false;
  frameworkComponents: any;
  private currentUser:User;
  SaveCustomerParty:any={};
  SaveDeliveryOrder: any = {}; 
  clickSave: boolean=false;
  DeliveryOrderID:number =0;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  tab=0; 
  
  constructor(private api:ApiService,private fb: FormBuilder,private modalService: NgbModal,public dialog: MtxDialog) { 
    this.currentUser=this.api.getCurrentUser();
    this.form = this.fb.group({
      customer_id: [null, Validators.required],
      chk_Do_Disptch: [null, Validators.required],
      deliveryorder_date: [null, Validators.required],
      customerParty_id: [null, Validators.required],
      DeliveryParty_id: [null, Validators.required],
      txtDO_No: [null, Validators.required],
      txtShipping_Address: [null, Validators.required],
      txtTruckNo: [null, Validators.required],
      txtContainerNo: [null, Validators.required],
      OrderGivenBy_id:[null, Validators.required],
      DORemarks:[null, Validators.required],
      Party_customer_id:[null, Validators.required],
      txtPartyName:[null, Validators.required],
      txtshiffadd1:[null, Validators.required],
      txtshiffadd2:[null, Validators.required],
      txtPinCode:[null, Validators.required],  
      txtMobileNo:[null, Validators.required],  
      txtTotalDOQty:[null, Validators.required],  
    });

    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.todayDate=dateSendingToServer;
    this.frameworkComponents = {
      buttonRenderer: DeliveryorderactionButtonsComponent,
    }
  }
  

  ngOnInit(): void {
    this.BindDropdown();
    
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
    this.BindDeliveryOrderList();

  }
  getRowStyle(params:any) {
    if(params.data.StatusID==13){
      return { 'background-color': 'pink' }
    }    else{
      return;
    }
  }

  
  async BindDeliveryOrderList(){
    this.api.get('/DeliveryOrder/DOList?FinancialYearID='+this.currentUser.FinantialYearId+'&WareHouseID='+this.currentUser.warehouseId+'&UserID='+this.currentUser.userId).subscribe(
      data=>{this.DeliveryOrderList=data;        
      },
      error=>{ console.error(error);}
    );
    
  }
  tabDeliveryOrderchange(e:any){
    this.tab=e;    
    this.BindDeliveryOrderList();
  }
  BindOrderGIvenBy(e:number=0){
    this.api.get('/CustomerContacts/GetCustomerContactsList?CustomerID='+e).subscribe(
      data=>{this.OrderGivenByList=[];
        this.OrderGivenByList=data;},
      error=>{ console.error(error);}
    );
  }
  GetCustomerID(e:any){  
    this.checkCust=false;  
    this.BindOrderGIvenBy(this.form.value.customer_id);
    this.api.get('/DeliveryOrder/DOValidation?CustomerID='+this.form.value.customer_id+'&WaherhouseID='+this.currentUser.warehouseId).subscribe(
      data=>{data;
      if(data.Table.length>0){
          this.checkCust=true;
          alert("Order is stopped for some reason .... !!!")
      }},
      error=>{ console.error(error);}
    );
  }
  OnSearchClick()
  {
    if(this.form.value.customer_id==null)
    {
      alert("Select Customers .....");
      document?.getElementById("customer_id")?.focus();
    }
    else
    {
      this.api.post('/DeliveryOrder/DOSearch?CustomerID='+this.form.value.customer_id+'&WarehouseID='+this.currentUser.warehouseId).subscribe(
        data=>{this.DeliveryOrdersearchList=data;
          //console.log(this.DeliveryOrdersearchList);          
          if(data.length ==0){
            alert("Data not found ..... !!!");
          }
        },
        error=>{ console.error(error);});
    }   
  }
  onDOCellKeyPress(e:any)
  {
      if(e.data.BalanceQuantity>e.data.DOQuantity){
          this.onDOSearchGridRefresh();
      }else
      if(e.data.BalanceQuantity==e.data.DOQuantity){
         alert(e.data.ProductName+" And Lot no "+e.data.LotNo+", Stock will be null or zero ...!!!");
         this.onDOSearchGridRefresh();
      }else 
      if(e.data.BalanceQuantity<e.data.DOQuantity)
      {
        this.DeliveryOrdersearchList.forEach((i:any) => {
          if(i.InwardLocationID==e.data.InwardLocationID)
          {
            i.DOQuantity=0;
          }});
          alert("DO Quantity must be less than or equal to balance quantity ..!!!");
        this.onDOSearchGridRefresh();
      }
  }
  onDOSearchGridRefresh(){    
    let newRowData = this.DeliveryOrdersearchList.filter((row:any) => {
      return row;
    });
    this.DeliveryOrdersearchList = newRowData;
    var TotalDOqty = this.DeliveryOrdersearchList.map(v1=>v1.DOQuantity).reduce((acc, v1) => v1 + acc);
    this.form.controls['txtTotalDOQty'].setValue(TotalDOqty);
  }
  // onKeyfilter(e:string){
  //   this.api.get('/DeliveryOrder/DOList?FinancialYearID='+this.currentUser.FinantialYearId+'&WareHouseID='+this.currentUser.warehouseId+'&UserID='+this.currentUser.userId).subscribe(
  //     data=>{this.DeliveryOrderList=data;
  //       var searchName = e;
  //       const lists=this.DeliveryOrderList;
  //       let res = lists.filter((obj:any) => 
  //       (obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
  //       (obj.DeliveryOrderDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
  //       (obj.DeliveryOrderNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
  //       (obj.DeliverTo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
  //       (obj.Remarks.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
  //       (obj.CreatedBy.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
  //       (obj.Status.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
  //       (obj.Process.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) 
  //       );
  //       this.DeliveryOrderList=res;
  //     },
  //     error=>{ console.error(error);}
  //   );
  // }

  onCustomerPartyContact(CustomerPartycontent:any)
  {
    if(this.form.value.customer_id==null ||this.form.value.customer_id==0){
      alert("Select Customers .....");
      document?.getElementById("customer_id")?.focus();
    }
    else
    {
      this.form.controls['Party_customer_id'].setValue(this.form.value.customer_id);
      this.modalService.open(CustomerPartycontent,this.config);
    }    
  }
  onCloseCustpmerParty(CustomerPartycontent:any){
    this.modalService.dismissAll(CustomerPartycontent);
  }

  onAddCustomerParty(CustomerPartycontent:any){
    if(this.form.value.Party_customer_id==null ||this.form.value.Party_customer_id==0){
      alert("Select Customers .....");      
      document?.getElementById("Party_customer_id")?.focus();
    }else if(this.form.value.txtPartyName==null ||this.form.value.txtPartyName==0){
      alert("Enter Customer Party Name ..... !!!");      
      document?.getElementById("txtPartyName")?.focus();
    }else{
      this.SaveCustomerParty={
          CustomerID:this.form.value.customer_id,
          PartyName:this.form.value.txtPartyName==null?'':this.form.value.txtPartyName,
          ShippingAddress:this.form.value.txtshiffadd1==null?'':this.form.value.txtshiffadd1 ,
          ShippingAddress1:this.form.value.txtshiffadd2 ==null?'':this.form.value.txtshiffadd2 ,
          PinCode:this.form.value.txtPinCode ==null?'':this.form.value.txtPinCode,
          CreatedBy:this.currentUser.userId ,
      };
      console.log(this.SaveCustomerParty);
      this.api.post('/DeliveryOrder/AddParty',this.SaveCustomerParty).subscribe(
        data=>{data;
        alert(data.Table[0]["Message"]);
        this.form.controls['txtPartyName'].reset();
        this.form.controls['txtshiffadd1'].reset(); 
        this.form.controls['txtshiffadd2'].reset();
        this.form.controls['txtPinCode'].reset();
        this.modalService.dismissAll(CustomerPartycontent);},
        error=>{ console.error(error);}
      );
      this.api.get('/CustomerParty').subscribe(
        data=>{this.customePartyList=data;},
        error=>{ console.error(error);}
      );
    }   
  }
  GetMobileNo(e:any){
      const OrderGivenByData=this.OrderGivenByList.filter((x:any)=>x.CustomerContactID== this.form.value.OrderGivenBy_id);
      this.form.controls['txtMobileNo'].setValue(OrderGivenByData[0]["MobileNo"]);
      console.log(OrderGivenByData[0]["MobileNo"]);
  }
  ///---------------------------------save DO
  onSaveDeliveryOrder(){
    // this.clickSave=true;
    var TotalDOqty;
    if(this.form.value.customer_id==null || this.form.value.customer_id==""){
      alert("Please .... Select Customer Name");
      document?.getElementById("customer_id")?.focus();
      return;
    }
    else
    {
      this.api.get('/DeliveryOrder/DOValidation?CustomerID='+this.form.value.customer_id+'&WaherhouseID='+this.currentUser.warehouseId).subscribe(
        data=>{data;
        if(data.Table.length>0){
            this.checkCust=true;
            alert("Order is stopped for some reason .... !!!")
        }else{
          if(this.DeliveryOrdersearchList.length>0 ){
            TotalDOqty = this.DeliveryOrdersearchList.map(v1=>v1.DOQuantity).reduce((acc, v1) => v1 + acc);
          }else{
            TotalDOqty =0;
          }
          if(this.form.value.customerParty_id==null || this.form.value.customerParty_id==""){
            alert("Please .... Select customer Party");
            document?.getElementById("customerParty_id")?.focus();
            return;
          }else if(this.form.value.OrderGivenBy_id==null || this.form.value.OrderGivenBy_id==""){
            alert("Please .... Select Order Given By");
            document?.getElementById("OrderGivenBy_id")?.focus();
            return;
          }else if(TotalDOqty<=0){
            alert("Please .... Add DO quantity In delivery order detail ");
            return;
          }else{
            //console.log("Work..... !!!");
            this.clickSave=true;
            const OrderGivenByData=this.OrderGivenByList.filter((x:any)=>x.CustomerContactID== this.form.value.OrderGivenBy_id);
            let ContactPersonNames;
            if(OrderGivenByData.length>0){
              ContactPersonNames=OrderGivenByData[0]["ContactPersonName"];
            }else{
              ContactPersonNames="";
            }
            // console.log(this.DeliveryOrdersearchList)
            const DODetail=this.DeliveryOrdersearchList.filter((x:any)=>x.DOQuantity>0);
            DODetail.forEach((i:any)=>{
              this.DO_Detail.push({
                "DeliveryOrderID":this.DeliveryOrderID,
                "ProductID":i.ProductID,
                "InwardDID":i.InwardDID,
                "LotNo":i.LotNo,
                "DOQuantity":i.DOQuantity,
                "InwardLocationID":i.InwardLocationID,
                "StorageAreaID":i.StorageAreaID
              });
            });
            this.DO_Detail.slice();
            // console.log(this.DO_Detail);
            this.SaveDeliveryOrder={
              DeliveryOrderID:this.DeliveryOrderID,
              DeliveryOrderDate:this.form.value.deliveryorder_date,
              CustomerID:this.form.value.customer_id,
              WareHouseID:this.currentUser.warehouseId,
              CompanyID:this.currentUser.companyId,
              DeliverTo :this.form.value.customerParty_id,
              CustomerPartyID:this.form.value.DeliveryParty_id==null?0:this.form.value.DeliveryParty_id, 
              ShippingAddress :this.form.value.txtShipping_Address==null?'':this.form.value.txtShipping_Address,
              OrderGivenBy :ContactPersonNames,
              Remarks :this.form.value.DORemarks==null?'':this.form.value.DORemarks,
              CreatedBy:this.currentUser.userId, 
              ByCustomer:0, 
              IsDoDispatch:this.form.value.chk_Do_Disptch==null?false:this.form.value.chk_Do_Disptch, 
              TruckNo :this.form.value.txtTruckNo==null?'':this.form.value.txtTruckNo,
              ContainerNo :this.form.value.txtContainerNo==null?'':this.form.value.txtContainerNo,
              DeliveryOrderDetailModel:this.DO_Detail,
            };
            this.api.post('/DeliveryOrder/SaveDO',this.SaveDeliveryOrder).subscribe(
              data=>{data;
                //console.log(data)
                alert(data.Table[0]["Message"]);},
              error=>{ console.error(error);this.clickSave=false;});
            console.log(this.SaveDeliveryOrder)
          }
        }},
        error=>{ console.error(error);});
    }
    
  }
//---------------------------------------------Reset DO
  onResetDeliveryOrder(){
    this.clickSave=false;
    this.checkCust=false;
    this.form.reset();
    this.BindDropdown();
    this.DeliveryOrderID=0;
    const DODate = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd');
    this.todayDate=DODate ;
    this.form.controls['deliveryorder_date'].setValue(this.todayDate);
    this.DeliveryOrdersearchList=[];
    this.DO_Detail=[];
    this.SaveDeliveryOrder={};
    // let foo = prompt('Type here');    
    // console.log(foo);
  }
  //------------------------------------------ Reset DO
  // onEditDORow(e:any){
  //   this.onResetDeliveryOrder();
  //   this.api.get('/DeliveryOrder/DOValidation?CustomerID='+e.CustomerID+'&WaherhouseID='+e.WareHouseID).subscribe(
  //     data=>{data;
  //     if(data.Table.length>0){
  //         this.checkCust=true;
  //         alert("Order is stopped for some reason .... !!!")
  //     }else{
  //       if (e.StatusID == 11)
  //       {
  //         alert("Sorry,Outward already generated ....!!!");
  //       }
  //       else if (e.StatusID == 12)
  //       {
  //         alert("Sorry,Dispatch already generated ....!!!");
  //       }
  //       else if (e.StatusID== 13)
  //       {
  //         alert("Sorry,You can't edit this transaction ,because it's already Cancelled or deactivate ....!!!");
  //       }
  //       else if (e.StatusID== 15)
  //       {
  //         alert("Sorry,You already Cancelled this Delivery Order ....!!!");
  //       }
  //       else if (e.Process == "Online")
  //       {
  //         alert("Sorry,You can't edit because its generated by customer....!!!");
  //       }
  //       else
  //       {
  //         //alert("Work....!!!");
  //         //console.log(e);
  //         this.api.get('/DeliveryOrder/GetEditDelivryOrder?DeliveryOrderID='+e.DeliveryOrderID).subscribe(
  //           data=>{data; 
  //             this.tab=0;
  //             this.DeliveryOrdersearchList=data.Table1;
  //             this.DeliveryOrderID=e.DeliveryOrderID;
  //             this.onDOSearchGridRefresh();
  //             const DODate = new DatePipe('en-US').transform(e.DeliveryOrderDate, 'yyyy-MM-dd')
  //             this.BindOrderGIvenBy(e.CustomerID);
  //             var TotalDOqty = this.DeliveryOrdersearchList.map(v1=>v1.DOQuantity).reduce((acc, v1) => v1 + acc);
  //             const OrderGivenByData=this.OrderGivenByList.filter((x:any)=>x.ContactPersonName== e.OrderGivenBy);
  //             let OrderGiven;
  //             let MobileNumber;
  //             if(OrderGivenByData.length>0)
  //             {
  //               OrderGiven=OrderGivenByData[0]["CustomerContactID"];
  //               MobileNumber=OrderGivenByData[0]["MobileNo"];
  //               this.form.controls['txtMobileNo'].setValue(OrderGivenByData[0]["MobileNo"]);
  //             }else{
  //               OrderGiven=0;
  //               MobileNumber=''
  //               this.form.controls['txtMobileNo'].setValue('');
  //             }

  //             const DOitem:any={
  //               customer_id:e.CustomerID,
  //               deliveryorder_date:DODate,
  //               chk_Do_Disptch:false,
  //               customerParty_id:e.DeliverTo,
  //               DeliveryParty_id:e.CustomerPartyID,
  //               txtDO_No:e.DeliveryOrderNo,
  //               txtShipping_Address:e.ShippingAddress,
  //               txtTruckNo:e.TruckNo,
  //               txtContainerNo:e.ContainerNo,
  //               OrderGivenBy_id:OrderGiven,
  //               DORemarks:e.Remarks,
  //               Party_customer_id:e.CustomerID,
  //               txtPartyName:'',
  //               txtshiffadd1:'',
  //               txtshiffadd2:'',
  //               txtPinCode:'',
  //               txtMobileNo:MobileNumber,
  //               txtTotalDOQty :TotalDOqty,
  //             }; 
  //             //console.log(DOitem);   
  //             this.form.setValue(DOitem);
  //           },
  //           error=>{ console.error(error);});
  //       }            
  //     }
  //   },error=>{ console.error(error);});
    
  // }
//--------------------------------------------------- Delete DO
  // onDeleteDORow(e:any){
  //   console.log(e.StatusID );
  //   this.api.get('/DeliveryOrder/DOValidation?CustomerID='+e.CustomerID+'&WaherhouseID='+e.WareHouseID).subscribe(
  //     data=>{data;
  //     if(data.Table.length>0)
  //     {
  //         this.checkCust=true;
  //         alert("Order is stopped for some reason .... !!!")
  //     }
  //     else
  //     {
  //       if (e.StatusID == 11)
  //       {
  //         alert("Sorry,Outward already generated ....!!!");
  //       }
  //       else if (e.StatusID== 15)
  //       {
  //         alert("Sorry,You already Cancelled this Delivery Order ....!!!");
  //       }
  //       else if (e.StatusID == 13)
  //       {
  //         alert("Sorry,You already Cancelled this Delivery Order ....!!!");
  //       }
  //       else if (e.StatusID == 12)
  //       {
  //         let bar = confirm('Sorry,this translation have dispatch. Do you want to deleted or deactivate your translation ...');
  //         if(bar==true)
  //         {
  //           let foo = prompt('Remarks ');
  //           this.api.post('/DeliveryOrder/PartiallyCancelled?DeliveryOrderID='+e.DeliveryOrderID+'&CustomerId='+e.CustomerID+'&Remarks='+foo+'&CreatedBy='+this.currentUser.userId).subscribe(
  //           data=>{data;
  //             alert(data);
  //             this.BindDeliveryOrderList();},
  //           error=>{ console.error(error);});
  //         }
  //       }
  //       else
  //       {
  //         let bar = confirm('Do you want to deleted or deactivate your Delivery Order ...??');
  //         if(bar==true)
  //         {
  //           let foo = prompt('Remarks');
  //           this.api.post('/DeliveryOrder/CancelledDO?DeliveryOrderID='+e.DeliveryOrderID+'&CustomerId='+e.CustomerID+'&Remarks=test&CreatedBy='+this.currentUser.userId).subscribe(
  //           data=>{data;
  //             alert(data);
  //             this.BindDeliveryOrderList();},
  //           error=>{ console.error(error);});
  //         }
  //       }
  //     }
  //   },error=>{ console.error(error);}
  //   );
  // }
//--------------------------------------------------- Edit & Delete DO
  OnDeliveryOrderActions(event:any){    
    if(String(event.actions)=='Delete')
    {
     this.api.get('/DeliveryOrder/DOValidation?CustomerID='+event.rowData.CustomerID+'&WaherhouseID='+event.rowData.WareHouseID).subscribe(
      data=>{data;
      if(data.Table.length>0)
      {
          this.checkCust=true;
          this.dialog.alert("Order is stopped for some reason .... !!!")
      }
      else
      {
        if (event.rowData.StatusID == 11)
        {
          this.dialog.alert("Sorry,Outward already generated ....!!!");
        }
        else if (event.rowData.StatusID== 15)
        {
          this.dialog.alert("Sorry,You already Cancelled this Delivery Order ....!!!");
        }
        else if (event.rowData.StatusID == 13)
        {
          this.dialog.alert("Sorry,You already Cancelled this Delivery Order ....!!!");
        }
        else if (event.rowData.StatusID == 12)
        {
          let bar = confirm('Sorry,this translation have dispatch. Do you want to deleted or deactivate your translation ...');
          if(bar==true)
          {
            let foo = prompt('Remarks ');
            this.api.post('/DeliveryOrder/PartiallyCancelled?DeliveryOrderID='+event.rowData.DeliveryOrderID+'&CustomerId='+event.rowData.CustomerID+'&Remarks='+foo+'&CreatedBy='+this.currentUser.userId).subscribe(
            data=>{data;
              this.dialog.alert(data);
              this.BindDeliveryOrderList();},
            error=>{ console.error(error);});
          }
        }
        else
        {
          let bar = confirm('Do you want to deleted or deactivate your Delivery Order ...??');
          if(bar==true)
          {
            let foo = prompt('Remarks');
            this.api.post('/DeliveryOrder/CancelledDO?DeliveryOrderID='+event.rowData.DeliveryOrderID+'&CustomerId='+event.rowData.CustomerID+'&Remarks=test&CreatedBy='+this.currentUser.userId).subscribe(
            data=>{data;
              this.dialog.alert(data);
              this.BindDeliveryOrderList();},
            error=>{ console.error(error);});
          }
        }
      }
    },error=>{ console.error(error);}
    );
    }
    else if(String(event.actions)=='Edit')
    {
    this.onResetDeliveryOrder();
    this.api.get('/DeliveryOrder/DOValidation?CustomerID='+event.rowData.CustomerID+'&WaherhouseID='+event.rowData.WareHouseID).subscribe(
      data=>{data;
      if(data.Table.length>0){
          this.checkCust=true;
          this.dialog.alert("Order is stopped for some reason .... !!!")
      }else{
        if (event.rowData.StatusID == 11)
        {
          this.dialog.alert("Sorry,Outward already generated ....!!!");
        }
        else if (event.rowData.StatusID == 12)
        {
          this.dialog.alert("Sorry,Dispatch already generated ....!!!");
        }
        else if (event.rowData.StatusID== 13)
        {
          this.dialog.alert("Sorry,You can't edit this transaction ,because it's already Cancelled or deactivate ....!!!");
        }
        else if (event.rowData.StatusID== 15)
        {
          this.dialog.alert("Sorry,You already Cancelled this Delivery Order ....!!!");
        }
        else if (event.rowData.Process == "Online")
        {
          this.dialog.alert("Sorry,You can't edit because its generated by customer....!!!");
        }
        else
        {
          //alert("Work....!!!");
          //console.log(e);
          this.api.get('/DeliveryOrder/GetEditDelivryOrder?DeliveryOrderID='+event.rowData.DeliveryOrderID).subscribe(
            data=>{data; 
              this.tab=0;
              this.DeliveryOrdersearchList=data.Table1;
              this.DeliveryOrderID=event.rowData.DeliveryOrderID;
              this.onDOSearchGridRefresh();
              const DODate = new DatePipe('en-US').transform(event.rowData.DeliveryOrderDate, 'yyyy-MM-dd')
              this.BindOrderGIvenBy(event.rowData.CustomerID);
              var TotalDOqty = this.DeliveryOrdersearchList.map(v1=>v1.DOQuantity).reduce((acc, v1) => v1 + acc);
              const OrderGivenByData=this.OrderGivenByList.filter((x:any)=>x.ContactPersonName== event.rowData.OrderGivenBy);
              let OrderGiven;
              let MobileNumber;
              if(OrderGivenByData.length>0)
              {
                OrderGiven=OrderGivenByData[0]["CustomerContactID"];
                MobileNumber=OrderGivenByData[0]["MobileNo"];
                this.form.controls['txtMobileNo'].setValue(OrderGivenByData[0]["MobileNo"]);
              }else{
                OrderGiven=0;
                MobileNumber=''
                this.form.controls['txtMobileNo'].setValue('');
              }
              const DOitem:any={
                customer_id:event.rowData.CustomerID,
                deliveryorder_date:DODate,
                chk_Do_Disptch:false,
                customerParty_id:event.rowData.DeliverTo,
                DeliveryParty_id:event.rowData.CustomerPartyID,
                txtDO_No:event.rowData.DeliveryOrderNo,
                txtShipping_Address:event.rowData.ShippingAddress,
                txtTruckNo:event.rowData.TruckNo,
                txtContainerNo:event.rowData.ContainerNo,
                OrderGivenBy_id:OrderGiven,
                DORemarks:event.rowData.Remarks,
                Party_customer_id:event.rowData.CustomerID,
                txtPartyName:'',
                txtshiffadd1:'',
                txtshiffadd2:'',
                txtPinCode:'',
                txtMobileNo:MobileNumber,
                txtTotalDOQty :TotalDOqty,
              }; 
              //console.log(DOitem);   
              this.form.setValue(DOitem);
            },
            error=>{ console.error(error);});
        }            
      }
    },error=>{ console.error(error);});
    
    }    
  }
  
  //---------end

  DeliveryOrdercolumnDefs: ColDef[] = [
      { headerName:'DeliveryOrderID',field: 'DeliveryOrderID',hide:true, },
      { headerName:'InwardDID',field: 'InwardDID',hide:true,},
      { headerName:'InwardLocationID',field: 'InwardLocationID',hide:true},
      { headerName:'StorageAreaID',field: 'StorageAreaID',hide:true},
    	{ headerName:'ProductID',field: 'ProductID',hide:true},
    	{ headerName:'ProductName',field: 'ProductName',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
    	{ headerName:'LotNo',field: 'LotNo',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},resizable:true},
    	{ headerName:'FirstLotNo',field: 'FirstLotNo',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
    	{ headerName:'StorageAreaName',field: 'StorageAreaName',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
    	{ headerName:'InQuantity',field: 'InQuantity',hide:false,filter: 'agNumberColumnFilter' ,floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
    	{ headerName:'PendingDO',field: 'PendingDO',hide:false,filter: 'agNumberColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
    	{ headerName:'OutQuantity',field: 'OutQuantity',hide:false,filter: 'agNumberColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
    	{ headerName:'BalanceQuantity',field: 'BalanceQuantity',hide:false,filter: 'agNumberColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
    	{ headerName:'DOQuantity',field: 'DOQuantity',hide:false,cellEditorPopup: true,sort:"desc",filter: 'agNumberColumnFilter',floatingFilter: true,
      valueParser: "Number(newValue)" ,editable: true,cellStyle: params => {
        if (params.value >0 ) {
            return {color: 'white', backgroundColor: '#FF0000'};
        }else{
          return {color: 'black', backgroundColor: '#98FB98'};
        }}},
    	{ headerName:'BrandID',field: 'BrandID',hide:true,cellStyle: {fontSize: '12px'},width:200},
    	{ headerName:'BrandName',field: 'BrandName',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
      { headerName:'ItemsInPacket',field: 'ItemsInPacket',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},    
      { headerName:'Remarks',field: 'Remarks',hide:false,filter: 'agTextColumnFilter',floatingFilter: true,cellStyle: {fontSize: '12px'},width:200},
  ];

  // columnsDeliveryOrderList: MtxGridColumn[] = [
  //   {
  //     header: "Action",
  //     field: 'Action',
  //     minWidth: 105,
  //     pinned:'left',    
  //     type: 'button',
  //     buttons: [
  //       {
  //         type: 'icon',
  //         icon: 'edit',
  //         tooltip: 'Edit',
  //         click: record => this.onEditDORow(record),
  //       }
  //       ,{
  //         color: 'warn',
  //         type: 'icon',
  //         icon: 'delete',
  //         tooltip: 'delete',
  //         pop: true,
  //         popTitle:'Do you want to delete Delivery order ....!!', //this.translate.stream('table_kitchen_sink.confirm_delete'),
  //         popCloseText:'No', //this.translate.stream('table_kitchen_sink.close'),
  //         popOkText:'Yes', 
  //         popDescription:'',
  //         popCloseColor:'warn',
  //         popOkColor:'primary',
  //         click: record => this.onDeleteDORow(record),
  //       }
  //     ]
  //   },
  //   {      header:'DeliveryOrderID',      field:'DeliveryOrderID',      hide:true,    },
  //   {      header:'CustomerID',      field:'CustomerID',      hide:true,    },
  //   {      header:'DO No',      field:'DeliveryOrderNo',      minWidth: 80,    },
  //   {      header:'DO Date',      field:'DeliveryOrderDate',      minWidth: 100,      type:'date',      typeParameter:{ format:'dd-MM-yyyy'}    },
  //   {      header:'CustomerName',      field:'CustomerName',      minWidth: 200,    },    
  //   {      header:'DeliverTo',      field:'DeliverTo',      hide:false,      minWidth: 200,    },
  //   {      header:'Remarks',      field:'Remarks',      minWidth: 200,    },    
  //   {      header:'StatusID',      field:'StatusID',      hide:true    },    
  //   {      header:'Status',      field:'Status',      minWidth: 100,      hide:false,    },
  //   {      header:'CreatedBy',      field:'CreatedBy',      minWidth: 70,    },    
  //   {      header:'Process',      field:'Process',      minWidth: 70,    },
  //   {      header:'CustomerPartyID',      field:'CustomerPartyID',      minWidth: 120,hide:true    },
  //   {      header:'ContainerNo',      field:'ContainerNo',      minWidth: 120,hide:true    },
  //   {      header:'TruckNo',      field:'TruckNo',      minWidth: 120,hide:true    },
  //   {      header:'OrderGivenBy',      field:'OrderGivenBy',      minWidth: 120,hide:false    },
  //   {      header:'ShippingAddress',      field:'ShippingAddress',      minWidth: 120,hide:true    },
  //   {      header:'WareHouseID',      field:'WareHouseID',      minWidth: 120,hide:true    },
  // ];
//pinned: 'left',
  columnsDeliveryOrderList: ColDef[] = [
    {  headerName: 'Action',floatingFilter: false,maxWidth:150,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnDeliveryOrderActions.bind(this),
        
      }
    },
    { headerName:'DeliveryOrderID', field:'DeliveryOrderID', hide:true, filter: 'agTextColumnFilter',floatingFilter: true, },
    { headerName:'CustomerID', field:'CustomerID', hide:true,   filter: 'agTextColumnFilter',floatingFilter: true,  },
    { headerName:'DO No',maxWidth:100, field:'DeliveryOrderNo',filter: 'agTextColumnFilter',floatingFilter: true,   },
    { headerName:'DO Date',resizable: true, field:'DeliveryOrderDate',  type:'date',  filter: 'agTextColumnFilter',floatingFilter: true,   },
    { headerName:'CustomerName', field:'CustomerName',  filter: 'agTextColumnFilter',floatingFilter: true,  },
    { headerName:'DeliverTo', field:'DeliverTo', hide:false,  filter: 'agTextColumnFilter',floatingFilter: true,  },
    { headerName:'Remarks', field:'Remarks',  filter: 'agTextColumnFilter',floatingFilter: true,  },
    { headerName:'StatusID', field:'StatusID', hide:true   ,filter: 'agTextColumnFilter',floatingFilter: true,  },    
    { headerName:'Status', field:'Status', hide:false,   filter: 'agTextColumnFilter',floatingFilter: true,  },
    { headerName:'CreatedBy', field:'CreatedBy', filter: 'agTextColumnFilter',floatingFilter: true, },
    { headerName:'Process', field:'Process', resizable: true,   filter: 'agTextColumnFilter',floatingFilter: true, },    
    { headerName:'CustomerPartyID', field:'CustomerPartyID', resizable: true,hide:true,filter: 'agTextColumnFilter',floatingFilter: true,  },
    { headerName:'ContainerNo', field:'ContainerNo', resizable: true,hide:true ,filter: 'agTextColumnFilter',floatingFilter: true,   },
    { headerName:'TruckNo', field:'TruckNo', resizable: true,hide:true , filter: 'agTextColumnFilter',floatingFilter: true,   },
    { headerName:'OrderGivenBy', field:'OrderGivenBy', resizable: true,hide:false , filter: 'agTextColumnFilter',floatingFilter: true,   },
    { headerName:'ShippingAddress', field:'ShippingAddress', resizable: true,hide:true  , filter: 'agTextColumnFilter',floatingFilter: true,  },
    { headerName:'WareHouseID', field:'WareHouseID', resizable: true,hide:true , filter: 'agTextColumnFilter',floatingFilter: true,   },  
  ];
}
export class DeliveryOrderDetail{
  DeliveryOrderID:number=0;	
  InwardDID:number=0;	
  InwardLocationID:number=0;
  StorageAreaID:number=0;
  ProductID:number=0;
  ProductName:string="";
  Remarks:string="";	
  LotNo:string="";
  FirstLotNo:string="";
  StorageAreaName:string="";
  InQuantity:number=0;	
  PendingDO:number=0;	
  OutQuantity:number=0;	
  BalanceQuantity:number=0;	
  DOQuantity:number=0;	
  BrandID:number=0;
  BrandName:string="";
  ItemsInPacket:string="";
}
export class DODetail{
  DeliveryOrderID:number=0;	
  ProductID:number=0;	
  InwardDID:number=0;	
  LotNo:string="";
  DOQuantity:number=0;	
  InwardLocationID:number=0;	
  StorageAreaID:number=0;	
}