import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@core';
import { MatTableDataSource } from '@angular/material/table';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn, MtxGridRowClassFormatter } from '@ng-matero/extensions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { count } from 'console';
import { User } from '@core/authentication/interface';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ColDef,GridApi } from 'ag-grid-community';
import { AgGridAngular} from "ag-grid-angular";
import { CustomermastereditButtonComponent} from './customermasteredit-button/customermasteredit-button.component';
import * as $ from 'jquery'
import { environment } from '@env/environment';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.scss']
})
export class CustomerMasterComponent implements OnInit {
tabCustomerschange($event: number) {
throw new Error('Method not implemented.');
}
  form!: FormGroup; submitted = false; Reseted = false;
  frameworkComponents: any;
  customerList: any;
  NameIniList: any;
  CustomerTypelist: any;
  CustomersSave: any;
  HideAddButton = true;
  Statelist: any;
  Citylist: any;
  Ratelist: any;
  HideSaveButton = true;
  CustomerID: number = 0;
  UserID: any = 0;
  Departmentlist: any;
  Designationlist: any;
  tab: any;
  contactdid:number=0;
  customerdid:number=0;
  documentdid:number=0;
  DockDid:number=0;
  CONTDid:number=0;
 
  CustomerDocumentlist = [];
  // CustomerDetailList1:any;
  newDynamicCustomerDetails: any = {};
  GetCustomerListJson:any={};
  customercontactList:any;
  customerdocumentList:any;
  CustomerSaveDetails: any;
  CustomerDetailList: Array<CustomerDetails> = [];
  DetailList: Array<CustomerDetails> = [];
  CustomerDocumentlist1:Array<customerDocuments> = [];
  CustomerDocumentlistFinal:Array<customerDocumentsFinals> = [];
  DocumentList: Array<customerDocuments> = [];
  DesigID: any;
  OnAddProductClick: boolean = false;
  CID: number = 0;
  txtContactName: any;
  emails: any;
  DepartmentID: any;
  DesignationID: any;
  txtMobileNo: any;
  txtContactNo: any;
  SendSms: any;
  endEmail: any;
  private currentUser:User;
  imagePreview :any;
  ImageDT:any;
  imageData:any;
  str1:string='';
  element:string='';
  rowDataDock:any;
  // private currentUser: User;
 constructor(
  private fb: FormBuilder,
  private api:ApiService,
  public dialog: MtxDialog,
   private modalService: NgbModal) { 
    this.currentUser=this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: CustomermastereditButtonComponent,
    }
  }

  ngOnInit(): void {
    this.CustomerTypelist = [];
    ///initialisation of form fields also for validation
    this.form = this.fb.group({

      customer_id: [0, Validators.required],
      NameIniID: [null, Validators.required],
      txtCustomerName: ['', Validators.required],
      txtCustomerCode: ['', Validators.required],
      CustomerTypeID: [null, Validators.required],
      txtGroupName: ['', Validators.required],
      WarehouseID: [null, Validators.required],
      email: ['', Validators.required],
      txtAddress1: ['', Validators.required],
      txtAddress2: ['', Validators.required],
      StateID: [null, Validators.required],
      CityID: [null, Validators.required],
      txtPINCODE: ['', Validators.required],
      txtFSSAI: ['', Validators.required],
      txtGSTNO: ['', Validators.required],
      txtPanNo: ['', Validators.required],
      txtGSTStateCode: ['', Validators.required],
      txtStorageDiscount: ['', Validators.required],
      txtLabourDiscount: ['', Validators.required],
      txtRefferedBy: ['', Validators.required],
      IsActive: ['', Validators.required],
      CreatedBy: ['', Validators.required],
      CreatedDate: ['', Validators.required],
      ModifyBy: ['', Validators.required],
      ModifyDate: ['', Validators.required],
      RateID: ['', Validators.required],
      txtContactName: ['', Validators.required],
      emails: ['', Validators.required],
      DepartmentID: ['', Validators.required],
      DesignationID: ['', Validators.required],
      txtMobileNo: ['', Validators.required],
      txtContactNo: ['', Validators.required],
      txtDocumentName: ['', Validators.required],
      txtDocumentPath:['',Validators.required],
      CustomerDocID:['', Validators.required],
      //CustomerID:['', Validators.required],
      //DocumentID:['', Validators.required],
      txtDocumentpath:['', Validators.required],
      UploadFile:[''],

      SendSms: [true],
      SendEmail: [true],
    });
    this.BindDropdown();
    this.BindCustomersList();
    this.GetCustomerList();
//json for document
    this.rowDataDock = [
      { DocID: 1, DockName: 'PanCard'},
      { DocID: 2, DockName: 'GSTINCertificate'},
      { DocID: 3, DockName: 'AadharCard'},
      { DocID: 4, DockName: 'FASSICertificate'},
  ];
  }

  get f() { return this.form.controls; }
  async BindDropdown(){

    this.api.get('/CustomerTypes/Get_CustomerTypes').subscribe(
      data=>{this.CustomerTypelist=data; },
      error=>{ console.error(error);}
    );
   
    this.api.get('/City/States_Select').subscribe(
      data=>{this.Statelist=data;},
      error=>{ console.error(error);}
    );
    
    this.api.get('/City/Cities_Select').subscribe(
      data=>{this.Citylist=data;},
      error=>{ console.error(error);}
    );
    this.api.get('/RateMaster/Rate_Select').subscribe(
      data=>{this.Ratelist=data;},
      error=>{ console.error(error);}
    );
    this.api.get('/Department/Department_Select').subscribe(
      data=>{this.Departmentlist=data;},
      error=>{ console.error(error);}
    );
    this.api.get('/Designation/Designation_Select').subscribe(
      data=>{this.Designationlist=data;},
      error=>{ console.error(error);}
    );
  

  }

  tabCustomerchange(event:any){

    this.tab=event;
    this.GetCustomerList();
  }
  GetCustomerList(){
    this.GetCustomerListJson={
      CompanyId:this.currentUser.companyId, 
      WarehouseId:this.currentUser.warehouseId, 
      FinantialYearId:this.currentUser.FinantialYearId,
    }
    
    

  }
  //whole form submit
  OnSubmit(data:any) {
    if(this.form.value.NameIniID==null || this.form.value.NameIniID==""){
      alert("Please .... Select initial");
      document?.getElementById("NameIniID")?.focus();
      return;
    }else if (this.form.value.txtCustomerName==null || this.form.value.txtCustomerName==""){
      alert("Please .... provide CustomerName ....");
      document?.getElementById("txtCustomerName")?.focus();
      return;
    }else if (this.form.value.txtCustomerCode==null || this.form.value.txtCustomerCode==""){
      alert("Please .... provide CustomerCode ....");
      document?.getElementById("txtCustomerCode")?.focus();
      return;
    }else if (this.form.value.CustomerTypeID==null || this.form.value.CustomerTypeID==""){
      alert("Please .... select CustomerType ....");
      document?.getElementById("CustomerTypeID")?.focus();
      return;
    }else if (this.form.value.txtGroupName==null || this.form.value.txtGroupName==""){
      alert("Please .... provide GroupName ....");
      document?.getElementById("txtGroupName")?.focus();
      return;
    }else if (this.form.value.email==null || this.form.value.email==""){
      alert("Please .... provide email ....");
      document?.getElementById("email")?.focus();
      return;
    }else if (this.form.value.txtPanNo==null || this.form.value.txtPanNo==""){
      alert("Please .... provide PanNo ....");
      document?.getElementById("txtPanNo")?.focus();
      return;
    }else if (this.form.value.txtGSTNO==null || this.form.value.txtGSTNO==""){
      alert("Please .... provide GSTNO ....");
      document?.getElementById("txtGSTNO")?.focus();
      return;
    }else if (this.form.value.txtFSSAI==null || this.form.value.txtFSSAI==""){
      alert("Please .... provide FSSAI ....");
      document?.getElementById("txtFSSAI")?.focus();
      return;
    }else if (this.form.value.StateID==null || this.form.value.StateID==""){
      alert("Please .... select State ....");
      document?.getElementById("StateID")?.focus();
      return;
    }else if (this.form.value.CityID==null || this.form.value.CityID==""){
      alert("Please .... select City ....");
      document?.getElementById("CityID")?.focus();
      return;
    }else if (this.form.value.txtGSTStateCode==null || this.form.value.txtGSTStateCode==""){
      alert("Please .... provide GSTStateCode ....");
      document?.getElementById("txtGSTStateCode")?.focus();
      return;
    }else if (this.form.value.txtAddress1==null || this.form.value.txtAddress1==""){
      alert("Please .... provide Address1 ....");
      document?.getElementById("txtAddress1")?.focus();
      return;
    }else if (this.form.value.txtAddress2==null || this.form.value.txtAddress2==""){
      alert("Please .... provide Address2 ....");
      document?.getElementById("txtAddress1")?.focus();
      return;
    }else if (this.form.value.txtPINCODE==null || this.form.value.txtPINCODE==""){
      alert("Please .... provide PINCODE ....");
      document?.getElementById("txtPINCODE")?.focus();
      return;
    }else if (this.form.value.txtStorageDiscount==null || this.form.value.txtStorageDiscount==""){
      alert("Please .... provide StorageDiscount ....");
      document?.getElementById("txtStorageDiscount")?.focus();
      return;
    }else if (this.form.value.txtLabourDiscount==null || this.form.value.txtLabourDiscount==""){
      alert("Please .... provide LabourDiscount ....");
      document?.getElementById("txtLabourDiscount")?.focus();
      return;
    }else if (this.form.value.txtRefferedBy==null || this.form.value.txtRefferedBy==""){
      alert("Please .... provide RefferedBy ....");
      document?.getElementById("txtRefferedBy")?.focus();
      return;
    }else if (this.form.value.RateID==null || this.form.value.RateID==""){
      alert("Please .... select Rate ....");
      document?.getElementById("RateID")?.focus();
      return;
    }else{

      // this.CustomerSaveDetails=[];
      
      this.CustomerDocumentlist1.forEach(i=>{
        if(this.CustomerDocumentlist1.length>0){
          this.CustomerDocumentlistFinal.push(
            {
             "CustomerDocID":i.CustomerDocID,
             "CustomerID":this.customerdid,//i.CustomerID,
             "DocumentID":i.DocumentID,
             "FilePath":i.FilePath,
            });
          }   
        });
        this.CustomerDocumentlistFinal.slice();
////create list class to assign all form values to database table columns
    this.CustomerSaveDetails={
    CustomerID:this.customerdid,//this.CustomerID,
    Initials:this.form.value.NameIniID,
    CustomerName: this.form.value.txtCustomerName,
    CustomerCode:this.form.value.txtCustomerCode,
    CustomerTypeID:this.form.value.CustomerTypeID,
    Address1 :this.form.value.txtAddress1,
    Address2 :this.form.value.txtAddress2,
    GroupName :this.form.value.txtGroupName,
    CityId :this.form.value.CityID,
    Email :this.form.value.email,
    Gstno: this.form.value.txtGSTNO, 
    Panno : this.form.value.txtPanNo, 
    customerContacts: this.CustomerDetailList, ///assing list to customerContacts  array
    TD_CustomerDocuments: this.CustomerDocumentlistFinal, ///assing list to TD_CustomerDocuments array
    State:this.form.value.StateID,
    FICINo: this.form.value.txtFSSAI, 
    StorageDiscount: this.form.value.txtStorageDiscount, 
    LabourDiscount: this.form.value.txtLabourDiscount, 
    ReferredBy: this.form.value.txtRefferedBy, 
    PinCode: this.form.value.txtPINCODE, 
    GSTStateCode: this.form.value.txtGSTStateCode, 
    RateID:this.form.value.RateID,
    WarehouseID:this.currentUser.warehouseId,
    createdby:this.currentUser.userId,
    };
        
  /////////save insert 
   
    this.api.post('/Customer/Customers_Insert',this.CustomerSaveDetails).subscribe(
      data=>{data;
        alert(data.Table[0].message);      
    },    
      error=>{ console.error(error);}
    );
    this.BindCustomersList();
    }    
    this.form.reset()
    this.BindCustomersList();
    }
    //for binding data to list after save
BindCustomersList(){
  
  this.api.get('/Customer/Customer_Select').subscribe(    
    data=>{this.customerList=data; },
    error=>{ console.error(error);} );
}

//on file browse click take file fakepath and assign to txtDocumentpath form field


onFilechange(event: any) {
  debugger;
if(event.target.files.length>0){
  let data = new FormData();

  for (let j = 0; j < event.target.files.length; j++) {
   
    let fileItem = event.target.files[j];
    console.log(fileItem.name);
    data.append('file', fileItem);
  }

  // this.api.post('/FileUplaod/Upload',data).subscribe(
  //   data=>{
  //   },
  //   error=>{ console.error(error);}
  // );
  

$.ajax({
  //url: 'http://localhost:50191/GenricFileUpload.ashx',
  url:environment.FileUploadUrl,
  //crossDomain: true,
  type: 'POST',
  //xhrFields: { withCredentials: false },
  data: data,
  cache: false,
  contentType: false,
  processData: false,
  headers: {
    
    'Access-Control-Allow-Origin': '*'
        },
  success: function (file) {
    debugger;
     
}

});

}

}
///grid row selection 
onRowDblclicked(a:any,e:any)
{

  //   //-----------------------------------------------------Reset form filled
 this.form.controls['txtContactName'].reset();
 this.form.controls['DepartmentID'].reset();
 this.form.controls['DesignationID'].reset();
 this.form.controls['txtMobileNo'].reset();
 this.form.controls['txtContactNo'].reset();
 this.form.controls['emails'].reset();
 this.form.controls['SendSms'].setValue('');
 this.form.controls['SendEmail'].setValue('');

    //fill the selected grid row data and patch to form fields
    this.form.patchValue({
      CustomerContactID:a.cellSelection[0].rowData["CustomerContactID"],
      txtContactName:a.cellSelection[0].rowData["ContactPersonName"],
      DepartmentName:a.cellSelection[0].rowData["DepartmentName"],
      DepartmentID:a.cellSelection[0].rowData["DepartmentID"],
      DesignationName:a.cellSelection[0].rowData["DesignationName"],
      DesignationID:a.cellSelection[0].rowData["DesignationID"],
      txtMobileNo:a.cellSelection[0].rowData["MobileNo"],
      txtContactNo:a.cellSelection[0].rowData["ContactNo"],
      emails:a.cellSelection[0].rowData["EmailID"],
      SendSms:a.cellSelection[0].rowData["SendSMS"],  
      SendEmail:a.cellSelection[0].rowData["SendEmail"],      
  });
 
this.CONTDid=a.cellSelection[0].rowData["CustomerContactID"];//CONTDid used to save Contactid  on grid row selection 
console.log("Wprk3333",a.cellSelection[0].rowData);//cellselaction array contain whole selected row of contactlist and place on 0th position of its own array
}


  OnAddClick(){
    this.DetailList=[];
   //validation of customer contact form
  if(this.form.value.txtContactName==null || this.form.value.txtContactName==""){
    alert("Please .... Enter ContactName");
    document?.getElementById("txtContactName")?.focus();
    return;
  }else if(this.form.value.emails==null){
      alert("Please... Enter Email");
      document?.getElementById("emails")?.focus();
      return;
  }else if (this.form.value.DepartmentID==null){
    alert("Please .... select Department");
    document?.getElementById("DepartmentID")?.focus();
    return;
  }else if (this.form.value.DesignationID==null){
    alert("Please .... select Designation");
    document?.getElementById("DesignationID")?.focus();
    return;
  }else if(this.form.value.txtMobileNo==null){
    alert("Please... Enter MobileNo");
    document?.getElementById("txtMobileNo")?.focus();
    return;
  }else if(this.form.value.txtContactNo==null){
    alert("Please... Enter ContactNo");
    document?.getElementById("txtContactNo")?.focus();
    return;
  }else{
    // indexCustomerDetail is used to store other than selected row  by filtering selected row from CustomerDetailList
    let indexCustomerDetail=this.CustomerDetailList.filter((x:any)=>x.CustomerContactID!=this.CONTDid);

      this.CustomerDetailList=indexCustomerDetail;
    
    //increament the contactid
    this.contactdid =this.contactdid+1;
    this.customercontactList=[];
    // 
    
    const coDepartmentName=this.Departmentlist.filter((x:any)=>x.DepartmentID==this.form.value.DepartmentID);
    const coDesignationName=this.Designationlist.filter((x:any)=>x.DesignationID==this.form.value.DesignationID);
//Add the form data to customercontactList columns 
    this.customercontactList={
      CustomerContactID:this.contactdid,
      ContactPersonName: this.form.value.txtContactName,
      DepartmentName:coDepartmentName[0].DepartmentName,
      DepartmentID: this.form.value.DepartmentID,
      DesignationName:coDesignationName[0].DesignationName,
      DesignationID: this.form.value.DesignationID,
      MobileNo: this.form.value.txtMobileNo,
      ContactNo: this.form.value.txtContactNo,
      EmailID:this.form.value.emails,
      SendSMS:this.form.value.SendSms,
      SendEmail:this.form.value.SendEmail,
    };

    //push the new filled data to grid 
    //assign filltered rows to DetailList
    this.DetailList=this.CustomerDetailList;
    //push new data to DetailList
    this.DetailList.push(this.customercontactList);
    //reassign DetailList to  CustomerDetailList
    this.CustomerDetailList=this.DetailList.slice();
   
//after push reset the customer contact form fields
    this.form.controls['txtContactName'].reset();
   this.form.controls['emails'].reset();
   this.form.controls['DepartmentID'].reset();
   this.form.controls['DesignationID'].reset();
   this.form.controls['txtMobileNo'].reset();
   this.form.controls['txtContactNo'].reset();
    }

}


OnAddFileClick(){
  this.DocumentList=[];
  //validation of customer Document form
    if(this.form.value.txtDocumentName==null || this.form.value.txtDocumentName==""){
    alert("Please .... select DocumentName");
    document?.getElementById("txtDocumentName")?.focus();
    return;
}else if(this.form.value.txtDocumentpath==null){
  alert("Please... Choose file");
  document?.getElementById("txtDocumentpath")?.focus();
  return;

}else{
  // indexCustomerDocument is used to store other than selected row  by filtering selected row from CustomerDocumentlist1
  let indexCustomerDocument=this.CustomerDocumentlist1.filter((x:any)=>x.CustomerDocID!=this.DockDid);
  const DockNames=this.rowDataDock.filter((x:any)=>x.DocID==this.form.value.txtDocumentName);

  this.CustomerDocumentlist1=indexCustomerDocument;
//increament the documentdid
this.documentdid =this.documentdid+1;
this.customerdocumentList=[];




//Add the form data to customerdocumentList columns 
this.customerdocumentList={
  CustomerDocID:this.documentdid,
  CustomerID:this.CustomerID,
  DocumentID:this.form.value.txtDocumentName,
 DocumentName:DockNames[0].DockName,
 FilePath:this.form.value.txtDocumentpath,

};

  //push the new filled data to grid 
    //assign filltered rows to DocumentList
this.DocumentList=this.CustomerDocumentlist1;
 //push new data to DocumentList
this.DocumentList.push(this.customerdocumentList);
//reassign DocumentList to  CustomerDocumentlist1
this.CustomerDocumentlist1=this.DocumentList.slice();

}
}


OnEditCustomerMaster(d:any){

  const strCityId=this.Citylist.filter((x:any)=>x.City==d.rowData.City);
  const strStateId=this.Statelist.filter((x:any)=>x.State==d.rowData.State);
  const strCustomerTypeID=this.CustomerTypelist.filter((x:any)=>x.CustomerType==d.rowData.CustomerType);
  const strRateId=this.Ratelist.filter((x:any)=>x.RateID==d.rowData.RateID);

  console.log("on edit data",d);
  
  // const EditData={
  //   // remarks:'', 
  //   // shiftingDID:0, 
  //   // shiftingID:d.rowData.ShiftingID, 
  //   // warehouseID:this.currentUser.warehouseId, 
  //   // customerID:this.form.value.cbCustomerID, 
  //   // createdBy:0, 
  //   // shiftingDate:0, 
  //   // loadingBy:0,          
  //   // LotNo:this.form.value.txtLotNo,
  //   // StatusID:d.rowData.StatusID,  
  //   CustomerID:d.rowData.CustomerID,
  //   NameIniID:d.rowData.Initials,
  //   txtCustomerName:d.rowData.CustomerName,
  //   txtCustomerCode:d.rowData.CustomerCode,
  //   CustomerTypeID:d.rowData.CustomerType,
  //   CustomerType:d.rowData.CustomerType,
  //   txtAddress1 :d.rowData.Address1,
  //   txtAddress2 :d.rowData.Address2,
  //   txtGroupName :d.rowData.GroupName,
  //   CityId :d.rowData.City,
  //   City:d.rowData.City,
  //   Email :d.rowData.Email,
  //   Gstno: d.rowData.Gstno, 
  //   Panno :d.rowData.Panno, 
  //   customerContacts: this.CustomerDetailList, ///assing list to customerContacts  array
  //   TD_CustomerDocuments: this.CustomerDocumentlistFinal, ///assing list to TD_CustomerDocuments array
  //   State:d.rowData.State,
  //   FICINo:d.rowData.FICINo, 
  //   StorageDiscount:d.rowData.StorageDiscount, 
  //   LabourDiscount:d.rowData.LabourDiscount, 
  //   ReferredBy: d.rowData.ReferredBy, 
  //   PinCode:d.rowData.PinCode, 
  //   GSTStateCode:d.rowData.GSTStateCode, 
  //   RateID:d.rowData.Rate,
  //   Rate:d.rowData.RateID,
  //   WarehouseID:this.currentUser.warehouseId,
  //   createdby:this.currentUser.userId,

  // };
  
  //   //-----------------------------------------------------Reset form filled
 this.form.controls['NameIniID'].reset();
 this.form.controls['txtCustomerName'].reset();
 this.form.controls['txtCustomerCode'].reset();
 this.form.controls['CustomerTypeID'].reset();
 this.form.controls['txtGroupName'].reset();
 this.form.controls['email'].reset();
 this.form.controls['txtPanNo'].reset();
 this.form.controls['txtGSTNO'].reset();
 this.form.controls['txtFSSAI'].reset();
 this.form.controls['StateID'].reset();
 this.form.controls['CityID'].reset();
 this.form.controls['txtGSTStateCode'].reset();
 this.form.controls['txtAddress1'].reset();
 this.form.controls['txtAddress2'].reset();
 this.form.controls['txtPINCODE'].reset();
 this.form.controls['txtStorageDiscount'].reset();
 this.form.controls['txtLabourDiscount'].reset();
 this.form.controls['txtRefferedBy'].reset();
 this.form.controls['RateID'].reset();



    //fill the selected grid row data and patch to form fields
    CustomerID:d.rowData["CustomerID"];
    this.form.patchValue({
      
      
      NameIniID :d.rowData["Initials"],
      txtCustomerName:d.rowData["CustomerName"],
      txtCustomerCode:d.rowData["CustomerCode"],
      CustomerTypeID:strCustomerTypeID[0].CustomerTypeID,
      txtGroupName:d.rowData["GroupName"],
      email:d.rowData["EmailID"],
      txtPanNo:d.rowData["PANNo"],
      txtGSTNO:d.rowData["GSTINNo"],
      txtFSSAI:d.rowData["FICINo"],
      StateID:strStateId[0].StateID,
      CityID:strCityId[0].CityID,
      txtGSTStateCode:d.rowData["GSTStateCode"],
      txtAddress1:d.rowData["Address1"],
      txtAddress2:d.rowData["Address2"],
      txtPINCODE:d.rowData["PinCode"],
      txtStorageDiscount:d.rowData["StorageDiscount"],
      txtLabourDiscount:d.rowData["LabourDiscount"],
      txtRefferedBy:d.rowData["ReferredBy"],
      RateID  :strRateId[0].RateID,
    });
 
this.customerdid=d.rowData["CustomerID"];//customerdid used to save Customerid  on grid row selection 
console.log("Wprk3333",d.rowData);//cellselaction array contain whole selected row of customerlist and place on 0th position of its own array
this.tab = 0;

const CustomerData={
  CustomerLoginID:"",
  CustomerID :d.rowData["CustomerID"],
 UserName:"",
 Password:"",

  IsActive:false,
 CreatedBy:0
}

this.api.post('/Customer/CustomerContact_Select',CustomerData).subscribe(
  data=>{this.CustomerDetailList=data;
    console.log(this.customercontactList);
  },
  error=>{ console.error(error);}
);
const CustomerDockData={
  CustomerLoginID:"",
  CustomerID :d.rowData["CustomerID"],
 UserName:"",
 Password:"",

  IsActive:false,
 CreatedBy:0
}

this.api.post('/Customer/CustomerDocument_Select',CustomerDockData).subscribe(
  data=>{this.CustomerDocumentlist1=data;
    console.log(this.CustomerDocumentlist1);
  },
  error=>{ console.error(error);}
);
 
  }
  
CustomerListcolumns: MtxGridColumn[] = [
    { header: 'ContactPersonName',field: 'ContactPersonName',minWidth: 250,},
    { header: 'EmailID',field: 'EmailID',minWidth: 170,},
    { header: 'DepartmentName',field: 'DepartmentName',minWidth: 250,},
    { header: 'DesignationName',field: 'DesignationName',minWidth: 120,},
    { header: 'MobileNo',field: 'MobileNo',minWidth: 170,},
    { header: 'ContactNo',field: 'ContactNo',minWidth: 170},
    { header: 'SendEmail',field: 'SendEmail',minWidth: 170,},
    { header: 'SendSMS',field: 'SendSMS',minWidth: 170,},
    { header: 'CustomerContactID',field: 'CustomerContactID',hide:true,minWidth: 170,},
    { header: 'DepartmentID',field: 'DepartmentID',hide:true,minWidth: 170,},
    { header: 'DesignationID',field: 'DesignationID',hide:true,minWidth: 170,},
  ]

columnsCustomersList: MtxGridColumn[] = [


    { header: 'Initials',field: 'Initials',minWidth: 170,  },
    { header: 'CustomerName',field: 'CustomerName',minWidth: 170,},
    { header: 'CustomerCode',field: 'CustomerCode',minWidth: 170,},
    { header: 'CustomerType',field: 'CustomerType',minWidth: 170,},
    { header: 'Address1',field: 'Address1',minWidth: 170,},
    { header: 'Address2',field: 'Address2',minWidth: 170,},
    { header: 'GroupName',field: 'GroupName',minWidth: 170,},
    { header: 'EmailID',field: 'EmailID',minWidth: 170,},
    {header: 'GSTStateCode',field: 'GSTStateCode',minWidth: 170,},
    { header: 'CityID',field: 'CityID',minWidth: 170,},
    { header: 'City',field: 'City',minWidth: 170,},
    { header: 'FICINo',field: 'FICINo',minWidth: 170,},
    { header: 'GSTINNo',field: 'GSTINNo',minWidth: 170,},
    { header: 'LabourDiscount',field: 'LabourDiscount',minWidth: 170,},
    { header: 'PANNo',field: 'PANNo',minWidth: 170,},
    { header: 'PinCode',field: 'PinCode',minWidth: 170,},
    { header: 'ReferredBy',field: 'ReferredBy',minWidth: 170,},
    { header: 'State',field: 'State',minWidth: 170,},
    { header: 'StorageDiscount',field: 'StorageDiscount',minWidth: 170,},
    { header: 'CustomerID',field: 'CustomerID ',minWidth: 170,},
    { header: 'Rate',field: 'RateID ',minWidth: 170,},
    ]

  CustomerDocumentListcolumns: MtxGridColumn[] = [

    { header: 'CustomerDocID',field: 'CustomerDocID',minWidth: 250,hide:true,},
    { header: 'CustomerID',field: 'CustomerID',hide:true,minWidth: 250,},
    { header: 'DocumentID',field: 'DocumentID',hide:true,minWidth: 120,},
    { header: 'DocumentName',field: 'DocumentName',minWidth: 250,},
    { header: 'FilePath',field: 'FilePath',minWidth: 120},
  ]

  columnDefs: ColDef[] = [

    {  headerName: 'Action', width:100 ,floatingFilter: false,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.OnEditCustomerMaster.bind(this),
      label: 'Click 1'
    }
  },
    { headerName:'Initials',field: 'Initials',hide:false, filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'CustomerName',field: 'CustomerName' ,  filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName:'CustomerCode',field: 'CustomerCode' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'CustomerType',field: 'CustomerType' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'Address1',field: 'Address1' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'Address2',field: 'Address2' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'GroupName',field: 'GroupName' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'EmailID',field: 'EmailID',hide:false,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'GSTStateCode',field: 'GSTStateCode' ,  filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName:'CityID',field: 'CityID' ,filter: 'agTextColumnFilter', floatingFilter: true,hide:true},
    { headerName:'City',field: 'City' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'FICINo',field: 'FICINo' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'GSTINNo',field: 'GSTINNo' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'LabourDiscount',field: 'LabourDiscount' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'PANNo',field: 'PANNo' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'PinCode',field: 'PinCode' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'ReferredBy',field: 'ReferredBy' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'State',field: 'State' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'StorageDiscount',field: 'StorageDiscount' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'CustomerID',field: 'CustomerID' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'Rate',field: 'RateID' ,filter: 'agTextColumnFilter', floatingFilter: true,},
  ];

}

export class CustomerList {
  Initials: string = "";
  CustomerID: number = 0;
  CustomerName: string = "";
  CustomerCode: string = "";
  CustomerType: string = "";
  GroupName: string = "";
   GSTINNO: string = "";
  PANNO: string = "";
  FSSAINO: string = "";
 STATE: string = "";
 CITY: string = "";
  GSTSTATECODE: number= 0;
  Address1: string = "";
  Address2: string = "";
  PINCODE:string="";
  StorageDiscount:number=0;
  LabourDiscount:number=0;
  ReferredBy: string="";
  Rate:number=0;
}
export class saveCustomer{
  
  CustomerID : number= 0;
  WarehouseID: number= 0;
  Initials:string = "";
  CustomerName: string = "";
  CustomerCode:string = "";
  CustomerTypeID: number= 0;
  Address1:string = "";
  Address2: string = "";
  GroupName: string = "";
  CityId: number= 0;
  Email:string = "";
  Gstno:string = "";
  Panno: string = "";
  customerContacts:Array<CustomerDetails>=[];
 TD_CustomerDocuments: Array<customerDocuments>[] = [];
createdby: number= 0;
  State:number= 0;
  FICINo: string = "";
  StorageDiscount:string = "";
  LabourDiscount:string = "";
  ReferredBy: string = "";
  PinCode: string = "";
  GSTStateCode: string = "";
  RateID:number= 0;

}
export class CustomerDetails {
  CustomerContactID: number = 0;
  ContactPersonName: string = "";
  DepartmentName: string = "";
  DepartmentID: number = 0;
  DesignationName: string = "";
  DesignationID: number = 0;
  MobileNo: string = "";
  ContactNo: string = "";
  EmailID: string = "";
  SendSMS: boolean = true;
  SendEmail: boolean = true;
}

export class customerDocuments{
  CustomerDocID:number=0;
CustomerID:number=0;
DocumentID:number=0;
DocumentName:string="";
FilePath:string="";
}

export class customerDocumentsFinals{
  CustomerDocID:number=0;
CustomerID:number=0;
DocumentID:number=0;
FilePath:string="";
}
