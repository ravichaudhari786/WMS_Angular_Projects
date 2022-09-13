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
  tab=0;
  todayDate : any ;
  dockList:any;
  unloadingList:any;
  labourContractorList:any;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  
  private currentUser:User;
  constructor(private api:ApiService,private fb: FormBuilder,private modalService: NgbModal) {
    this.currentUser=this.api.getCurrentUser();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.todayDate=dateSendingToServer;

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
  tabDeliveryOrderchange(event:any){

  }
  OnSearchClick(){

  }
  openPartyWindow(AddPartyContent:any) {
    
    this.modalService.open(AddPartyContent,this.config);
  }

  onCloseAddParty(AddPartyContent:any){
    this.modalService.dismissAll(AddPartyContent);
  }

}
