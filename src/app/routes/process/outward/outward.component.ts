import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@core/authentication/interface';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
        data=>{data;
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



}

