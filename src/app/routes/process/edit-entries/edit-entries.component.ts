import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { User } from '@core/authentication/interface';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn,MtxGridRowClassFormatter  } from '@ng-matero/extensions';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-entries',
  templateUrl: './edit-entries.component.html',
  styleUrls: ['./edit-entries.component.scss']
})
export class EditEntriesComponent implements OnInit {
  form!: FormGroup;
  private currentUser:User;
  todayDate : any ;
  customerList:any;
  submitted = false;
  ProcessType:any="";
  EditEntriesID:number=0;
  datalength:number=1;
  GetInwardOutwardData:Array<GetData>=[];
  constructor(private api:ApiService,private fb: FormBuilder,private modalService: NgbModal,public dialog: MtxDialog) { 
    this.currentUser=this.api.getCurrentUser();
    this.form = this.fb.group({
      customer_id: [null],      
      from_date: [null, Validators.required],
      To_date: [null, Validators.required],
      chk_Inward: [null, Validators.required],
      chk_Outward: [null, Validators.required],
      txtLotno: [''],
    });

    this.onReset();    
  }

  ngOnInit(): void {
    this.BindDropdownCustomers();
    
  }
  
  async BindDropdownCustomers(){
    this.api.get('/Customer').subscribe(
      data=>{this.customerList=data},
      error=>{ console.error(error);}
    );
  }
  
  

  GetCustomerID(dat:any){

  }
  btnSerch(formdata:any){
    console.log(formdata.value)
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else{
      const chargesbody={
        "CustomerID":formdata.value.customer_id==null?0:formdata.value.customer_id,
        "FromDate":formdata.value.from_date,
        "ToDate":formdata.value.To_date,
        "Process":formdata.value.chk_Inward==true?"Inward":"Outward",
        "lotno":formdata.value.txtLotno
      }
      this.api.post('/EditEntries/GetInwardOutward_EditCharge',chargesbody).subscribe(
        data => { 
          this.GetInwardOutwardData =[];
          this.GetInwardOutwardData = data;       
          if(this.GetInwardOutwardData.length==0){
            this.datalength=0;
          }else{
            this.datalength=1;
          }
           
          console.log("GetInwardOutwardData",this.GetInwardOutwardData); },
        error1 => { //console.error('abc');//.error(error); 
        }
      );
    }   
  }
dateConvert(testdate:any){
  const ProcessDate = new DatePipe('en-US').transform(testdate, 'dd-MM-yyyy')
  return ProcessDate;
}
onbtnReset(){
  this.onReset();
}
  onReset(){
    this.form.reset();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.todayDate=dateSendingToServer;
    this.form.controls['from_date'].setValue(this.todayDate);
    this.form.controls['To_date'].setValue(this.todayDate);    
    this.form.controls["chk_Inward"].setValue(true);
    this.form.controls["chk_Outward"].setValue(false);
    this.form.controls['txtLotno'].setValue('');
    this.ProcessType='Inward';
  }
  onCheck_Inward(InData:any){
    if (InData.target['checked'] == true) {      
      this.form.controls['chk_Inward'].setValue(true); 
      this.form.controls['chk_Outward'].setValue(false);  
      this.ProcessType='Inward';   
    } 
  }
  onCheck_Outward(OutData:any){
    if (OutData.target['checked'] == true) {
      this.form.controls['chk_Outward'].setValue(true);
      this.form.controls['chk_Inward'].setValue(false);      
      this.ProcessType='Outward';
    }
  }
  onChangesRates(changeData:any){
    
    const EditEntriesSave={
      "EditEntriesID":this.EditEntriesID,
      "createdby":this.currentUser.userId,
      "process":changeData.Process,

      "TD_EditEntries":[{
        "customerID": changeData.CustomerID,
        "ProductID":changeData.ProductID,
        "DID":changeData.DID,
        "Loading":changeData.Loading,
        "Unloading":changeData.Unloading,
        "Thappi":changeData.Thappi,
        "Varai":changeData.Varai,
        "Shifting":changeData.Shifting,
        "Dummping":changeData.Dummping,
        "Weights":changeData.Weights,
      }]
    }
    this.api.post('/EditEntries/EditEntries_insert',EditEntriesSave).subscribe(
      data => { 
        alert(data[0].message);
        console.log("EditEntries_insert",data[0].message); },
      error1 => { //console.error('abc');//.error(error); 
      }
    );
  }
  
}
export class GetData{
Process:string="";
ID:number=0;
DID:number=0;
CustomerID:number=0;
ProductID:number=0;
Date:string="";
CustomerName:string="";
ProductName:string="";
ItemsInPacket:string="";
DeliveryTo:string="";
lotno:string="";
Qty:number=0;
Loading:boolean=false;
Unloading:boolean=false;
Thappi:boolean=false;
Varai:boolean=false;
Shifting:boolean=false;
Dummping:boolean=false;
Weights:boolean=false;
}