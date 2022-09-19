import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@core/authentication/interface';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn,MtxGridRowClassFormatter  } from '@ng-matero/extensions';
@Component({
  selector: 'app-outward',
  templateUrl: './outward.component.html',
  styleUrls: ['./outward.component.scss']
})
export class OutwardComponent implements OnInit {
  customerList:any;
  customePartyList:any;
  remarkList:any;
  form!: FormGroup;
  formParty!: FormGroup;
  tab=0;
  todayDate : any ;
  dockList:any;
  unloadingList:any;
  labourContractorList:any;
  PendingDOList:any;
  OutwardList:any;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  SaveCustomerParty: any = {};  
  GetPendingDO: any = {};  

  private currentUser:User;
  constructor(private api:ApiService,private fb: FormBuilder,private fbParty: FormBuilder,private modalService: NgbModal) {
    this.currentUser=this.api.getCurrentUser();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.todayDate=dateSendingToServer;
    this.currentUser=this.api.getCurrentUser();
    this.form = this.fb.group({
      customer_id: [null, Validators.required],
      Outward_Date: [null, Validators.required],
      txtTruck_No: [null, Validators.required],
      txtContainer_No: [null, Validators.required],
      cbCustomer_Party: [null, Validators.required],
      cbRemarks: [null, Validators.required],
      txtDriver_Name: [null, Validators.required],
      txtDriver_MobileNo: [null, Validators.required],
      cbDock_Name: [null, Validators.required],
      cbLodingBy_Name: [null, Validators.required],
      cbLabourContractor: [null, Validators.required],
    });
    this.formParty =this.fbParty.group({
      txtPartyName: ['', Validators.required],
      txtShippingAddress1: ['', Validators.required],
      txtShippingAddress2: ['', Validators.required],
      txtPinCode: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.BindDropdown();
    this.BindCustomerParty();
    this.BindOutwardList();
  }
  async BindDropdown(){
    this.api.get('/Customer').subscribe(
     data=>{this.customerList=data},
     error=>{ console.error(error);}
   );
   
   this.api.get('/Remarks').subscribe(
     data=>{this.remarkList=data.filter((p:any)=>p.ProcessID==3);},
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
  this.api.get('/LabourContracter').subscribe(
    data=>{this.labourContractorList=data},
    error=>{ console.error(error);}
  );
 }

 BindCustomerParty(){
  this.api.get('/CustomerParty').subscribe(
    data=>{this.customePartyList=data;},
    error=>{ console.error(error);}
  );
 }
 BindOutwardList(){
  const OutwardListData={
      outwardID: 0,
      warehouseID: 1,
      outWardDate: "",
      billStartDate: "",
      deliveryOrderID: 0,
      customerPartyID: 0,
      truckNo: "",
      containerNo: "",
      transporterName: "",
      remarks: "",
      createdBy: 0,
      customerID: 0,
      driverName: "",
      driverNo: "",
      docID: 0,
      loadingBy: 0,
      transferID: 0,
      dispatchID: 0,
  };
  this.api.post('/Outward/GetOutwardList',OutwardListData).subscribe(
    data=>{this.OutwardList=data;
    console.log(data);},
    error=>{ console.error(error);}
  );
 }
  tabDeliveryOrderchange(event:any){

  }
  OnSearchPendingDO(){
    if(this.form.value.customer_id==null || this.form.value.customer_id=="")
    {
      alert("Please .... Select Customer Name");
      document?.getElementById("customer_id")?.focus();
    }else{
      this.GetPendingDO={
        CustomerID :this.form.value.customer_id,
        WarehouseId :this.currentUser.warehouseId,
        CompanyID :this.currentUser.companyId
      }
      this.api.post('/Outward/GetDeliveryOrderByID',this.GetPendingDO).subscribe(
        data=>{this.PendingDOList=data;
        console.log(data);},
        error=>{ console.error(error);}
      );
    }

    
  }
  openPartyWindow(AddPartyContent:any) {
    //console.log(this.form.value.customer_id);
    if(this.form.value.customer_id==null || this.form.value.customer_id=="")
    {
      alert("Please .... Select Customer Name");
      document?.getElementById("customer_id")?.focus();
    }else{
      this.modalService.open(AddPartyContent);
    }  
  }

  onCloseAddParty(AddPartyContent:any){    
    this.modalService.dismissAll(AddPartyContent);
  }
  onAddParty(){
    if(this.formParty.value.txtPartyName==null || this.formParty.value.txtPartyName==""){
      alert("Please .... Enter Party Name");
      document?.getElementById("txtPartyName")?.focus();
      }
      else
      {
      this.SaveCustomerParty={
        CustomerPartyID :0,
        CustomerID :this.form.value.customer_id ,
        PartyName : this.formParty.value.txtPartyName ,
        ShippingAddress :this.formParty.value.txtShippingAddress1 ,
        ShippingAddress1 :this.formParty.value.txtShippingAddress2 ,
        PinCode :this.formParty.value.txtPinCode ,
        CreatedBy :this.currentUser.userId
      };
        this.api.post('/CustomerParty/CustomerPartysave',this.SaveCustomerParty).subscribe(
          data=>{data;
          alert(data);
          this.formParty.reset();
          this.BindCustomerParty();
        },
        error=>{ console.error(error);}
      );
    }
  }
  onKeyfilter(e:string){
    // this.api.get('/InwardList?companyId='+this.currentUser.companyId+'&warehouseId='
    // +this.currentUser.warehouseId+'&finantialYearId='+this.currentUser.FinantialYearId).subscribe(
    // data=>{this.InwardList=data;
    //   var searchName = e;
    //   const lists=this.InwardList;
    //   let res = lists.filter((obj:any) => 
    //   (obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //   (obj.BillingStartDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //   (obj.InwardDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //   (obj.PersonName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //   (obj.ReceiptNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
    //   (obj.StatusName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) 
    //   );
    //   this.InwardList=res;
    // },
    // error=>{ console.error(error);} );
  }
//----------------------------Grid Column
PendingDOListColum: MtxGridColumn[] = [
  {
    header:"DispatchID",
    field:"DispatchID",
    hide:true,
  },
  {
    header:"DeliveryOrderID",
    field:"DeliveryOrderID",
    hide:true,
  },
  {
    header:"DeliveryOrderNo",
    field:"DeliveryOrderNo",
  },
  {
    header:"DispatchNo",
    field:"DispatchNo",
  },
  {
    header:"CreatedDate",
    field:"CreatedDate",
    hide:true,
  },
{
    header:"OrderGivenBy",
    field:"OrderGivenBy",
  },
  {
    header:"DeliverTo",
    field:"DeliverTo",
  },
{
    header:"ShippingAddress",
    field:"ShippingAddress",
  },
  {
    header:"Remarks",
    field:"Remarks",
    hide:false,
  },
  {
    header:"TruckNo",
    field:"TruckNo",
    hide:false,
  },
  {
    header:"ContainerNo",
    field:"ContainerNo",
  },
]

OutWardListColumn: MtxGridColumn[] = [
  {
    header:"OutWardID",
    field:"OutWardID",
    hide:true,
  },
  {
    header:"OutWardNo",
    field:"OutWardNo",
    hide:false,
    minWidth: 100,
  },
  {
    header:"WarehouseID",
    field:"WarehouseID",
    hide:true,
  },
  {
    header:"CustomerName",
    field:"CustomerName",
    minWidth: 150,
  },
  {
    header:"WareHouseName",
    field:"WareHouseName",
    hide:true,
  },
{
    header:"OutWardDate",
    field:"OutWardDate",
    minWidth: 100,
    type:'date',
    typeParameter:{ format:'dd-MM-yyyy'}
  },
  {
    header:"DeliveryOrderNo",
    field:"DeliveryOrderNo",
    minWidth: 100,
  },
{
    header:"DispatchNo",
    field:"DispatchNo",
    minWidth: 100,
  },
  {
    header:"DeliverTo",
    field:"DeliverTo",
    minWidth: 120,
    hide:false,
  },
  {
    header:"TruckNo",
    field:"TruckNo",
    hide:false,
    minWidth: 150,
  },
  {
    header:"ContainerNo",
    field:"ContainerNo",
    minWidth: 120,
  },
  {
    header:"TransporterName",
    field:"TransporterName",
    hide:false,
    minWidth: 80,
  },
  {
    header:"Remarks",
    field:"Remarks",
    minWidth: 100,
  },
  {
    header:"IsCancelled",
    field:"IsCancelled",
    hide:true,
  },
  {
    header:"DriverName",
    field:"DriverName",
    minWidth: 80,
  },
  {
    header:"DocID",
    field:"DocID",
    hide:true,
  },
  {
    header:"LoadingBy",
    field:"LoadingBy",
    hide:true,
    minWidth: 80,
  },
  {
    header:"StatusID",
    field:"StatusID",
    hide:true,
  },{
    header:"StatusName",
    field:"StatusName",
    minWidth: 80,
  },
]

}

