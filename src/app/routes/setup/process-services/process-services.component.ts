import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { noUndefined } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { ColDef,GridApi } from 'ag-grid-community';
import { data } from 'jquery';
import resizable from 'devextreme/ui/resizable';
import { DatetimeAdapter } from '@mat-datetimepicker/core';
import { User } from '@core/authentication/interface';
import { ThrowStatement } from 'typescript';


@Component({
  selector: 'app-process-services',
  templateUrl: './process-services.component.html',
  styleUrls: ['./process-services.component.scss']
})
export class ProcessServicesComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  frameworkComponents: any;ProcessNameList:any;
  ProcessServicesList:any;
  ProcessServiceSave:any;
  ProcessServicesListSort:any;
  ServicesList:any
  UserID: any = 0;
  SelectedList:any
  SelectedListT:any;
  IsOptionalList:any;
  IsOptionalListT:any;
  IsDefaultListT:any;
  IsDefaultList:any;
  
  ProcessID=0; i:number=0;
  ProcessSelectedList:Array<ProcessServiceList>=[];
 
  private currentUser:User;
    constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) { 
      this.currentUser=this.api.getCurrentUser();
    }

  ngOnInit(): void {

    this.form = this.fb.group({

      txtProcessName: ['', Validators.required],
      CreatedBy: [this.UserID]

      
     
    });
    this.ProcessServicesList=[];
    this.ProcessServicesListSort=[];
    this.BindDropdown();
    
  }


  // BindPSList(){
  //  this.ProcessID= this.form.value.txtProcessName;
  //  console.log("ProcessID",this.ProcessID);

  //   this.api.post('/Department/ProcessServices_Select').subscribe(
  //     data => { this.ProcessServicesList = data ;console.log("data",data)},
  //     error => { console.error(error); }
  //   );

  // }

  


  GetProcessID(id:any){
    id=this.form.value.txtProcessName;

    const processdata={
      ProcessIDID:0,
      LTD_ProcessServices:"",
      CreatedBy:0,
      ProcessID:id,
    }
    this.ProcessID=id;
    console.log("id",id);
    this.api.post('/Department/ProcessServices_Select',processdata).subscribe(
      data => { this.ProcessServicesList = data ;console.log("data",data)
      // this.sortList();
    },
      error => { console.error(error); }

    );
    this.ProcessServicesList.slice();
    console.log(this.ProcessServicesList);
 
    

}



// sortList(){
//   this.ProcessServicesList.forEach((i:any)=>{ 
//     // console.log("IsDefault",i.IsDefault)
//     // console.log("IsOptional",i.IsOptional)
//     // console.log("Selected",i.Selected)
//     // if(this.ProcessServicesList.length>0 )
//     if(i.IsDefault==true){
//       this.ProcessServicesListSort.push(
//         {
//           "SrNo": i.SrNo,
//           "ServiceType": i.ServiceType,
//           "ServiceName": i.ServiceName,
//           "Selected": i.Selected,
//           "IsOptional": i.IsOptional,
//           "IsDefault": i.IsDefault,
//           "ServiceID": i.ServiceID,
//           "ProcessName": i.ProcessName,
//           "ProcessID": i.ProcessID,
        
       
//         });
//       }  
//       this.ProcessServicesListSort.slice(); 
//       console.log("ProcessServicesListSort",this.ProcessServicesListSort) 
//   });
// }

  checkBoxCellEditRendererSelected(params:any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      //console.log(val);
       this.ProcessSelectedList=[];
      this.ProcessServicesList.forEach((i:any)=>{ 
        if(i.Selected==true||i.IsOptional==true||i.IsDefault==true){
          this.ProcessSelectedList.push(
            {
              SrNo: i.SrNo,
              ServiceType: i.ServiceType,
              ServiceName: i.ServiceName,
              Selected: i.Selected,
              IsOptional: i.IsOptional,
              IsDefault: i.IsDefault,
              ServiceID: i.ServiceID,
              ProcessName: i.ProcessName,
              ProcessID: this.form.value.txtProcessName,
            
           
            })
          }        
      });
      this.ProcessSelectedList.slice();
      console.log("ProcessSelectedList",this.ProcessSelectedList);
     
  });
  
  
  return input;
  }


  checkBoxCellEditRendererProductIsOptional(params:any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      //console.log(val);
      this.ProcessSelectedList=[];
      this.ProcessServicesList.forEach((i:any)=>{ 
        if(i.Selected==true||i.IsOptional==true||i.IsDefault==true){
          this.ProcessSelectedList.push(
            {
              SrNo: i.SrNo,
              ServiceType: i.ServiceType,
              ServiceName: i.ServiceName,
              Selected: i.Selected,
              IsOptional: i.IsOptional,
              IsDefault: i.IsDefault,
              ServiceID: i.ServiceID,
              ProcessName: i.ProcessName,
              ProcessID: this.form.value.txtProcessName,
            
           
            })
          }        
      });
      this.ProcessSelectedList.slice();
      console.log(this.ProcessSelectedList);
     
  });
  
  return input;
  }



  checkBoxCellEditRendererProductIsDefault(params:any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      //console.log(val);
      this.ProcessSelectedList=[];
      this.ProcessServicesList.forEach((i:any)=>{ 
        if(i.Selected==true||i.IsOptional==true||i.IsDefault==true){
          this.ProcessSelectedList.push(
            {
              SrNo: i.SrNo,
              ServiceType: i.ServiceType,
              ServiceName: i.ServiceName,
              Selected: i.Selected,
              IsOptional: i.IsOptional,
              IsDefault: i.IsDefault,
              ServiceID: i.ServiceID,
              ProcessName: i.ProcessName,
              ProcessID: this.form.value.txtProcessName,
            
           
            })
          }        
      });
      this.ProcessSelectedList.slice();
      console.log(this.ProcessSelectedList);
     
  });
  
  return input;
  }

 
  get f() { return this.form.controls; }
 
  BindDropdown(){
    this.api.get('/Process/GetProcess').subscribe(
      data => { this.ProcessNameList = data ;console.log("data",data)},
      error => { console.error(error); }
    );
    

 }

 onSubmit(data:any){
    
  this.submitted = true;
  if (this.form.invalid) {
    
    return;
  }
  if( this.ProcessServicesList.length==0){
    alert("Please ....select Process name");
return;
  }else{
    this.ProcessID= this.form.value.txtProcessName;
  console.log("ProcessID",this.ProcessID);

  this.ProcessSelectedList=[];
  this.ProcessServicesList.forEach((i:any)=>{ 
    if(i.Selected==true||i.IsOptional==true||i.IsDefault==true){
      this.ProcessSelectedList.push(
        {
          SrNo: i.SrNo,
          ServiceType: i.ServiceType,
          ServiceName: i.ServiceName,
          Selected: i.Selected,
          IsOptional: i.IsOptional,
          IsDefault: i.IsDefault,
          ServiceID: i.ServiceID,
          ProcessName: i.ProcessName,
          ProcessID: this.form.value.txtProcessName,
        
       
        })
      }        
  });
  this.ProcessSelectedList.slice();
  console.log("ProcessSelectedList",this.ProcessSelectedList);





    
    this.ProcessServiceSave=[];
      
    this.ProcessID= this.form.value.txtProcessName;
////create list class to assign all form values to database table columns
  this.ProcessServiceSave={
    ProcessIDID:0,
    LTD_ProcessServices: this.ProcessSelectedList, 
    ProcessID:this.ProcessID,
    CreatedBy:this.currentUser.userId, 

  
 


  };
  //console.log("ProductTaxID",this.ProductTaxDID)
  console.log("final",this.ProcessServiceSave)
      
/////////save insert 
 
  this.api.post('/ProcessServices/ProcessServices_Insert',this.ProcessServiceSave).subscribe(
    data=>{data;
      console.log("data",data.Table[0].message);
      alert(data.Table[0].message);  
      this.BindDropdown();  
   
      
    
        
  },    
    error=>{ console.error(error);}
  );
 
  
   
 
  }
  this.form.controls['txtProcessName'].reset();
 }

  
  PSListcol:ColDef[]=[
    

    { headerName: 'Sr No',field: 'SrNo',minWidth: 270,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Service Type',field: 'ServiceType',minWidth: 270,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Service Name',field: 'ServiceName',minWidth: 270,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
   
    { headerName: 'Selected',field: 'Selected', cellRenderer: (params:any) => this.checkBoxCellEditRendererSelected(params), 
    hide:false,width:10,     minWidth: 270,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Is Optional',field: 'IsOptional', cellRenderer: (params:any) => this.checkBoxCellEditRendererProductIsOptional(params), 
    hide:false,width:10,     minWidth: 270 ,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Is Default',field: 'IsDefault', cellRenderer: (params:any) => this.checkBoxCellEditRendererProductIsDefault(params), 
    hide:false,width:10,     minWidth: 270,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Service ID',field: 'ServiceID',minWidth: 270,hide:true,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Process Name',field: 'ProcessName',minWidth: 270,hide:true,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Process ID',field: 'ProcessID',minWidth: 270,hide:true,filter: 'agTextColumnFilter', floatingFilter: true},
];


};


export class ProcessServicesList{

ProcessIDID : number = 0;
  LTD_ProcessServices :Array<ServicesList>=[];
  CreatedBy :string = "";

  ProcessID :string = "";

}

export class ProcessServicesListSort{

  ProcessIDID : number = 0;
    LTD_ProcessServices :Array<ServicesList>=[];
    CreatedBy :string = "";
  
    ProcessID :string = "";
  
  }



  export class ServicesList{
  ProcessID :string = "";

  ServiceID :string = "";

  Selected :string = "";

  IsOptional :string = "";

  IsDefault :string = "";

   }



  

    export class selected{
      Selected:string = "";

    }
    
    export class IsOptional{
      IsOptional:string = "";

    }
    
    export class IsDefault{
      IsDefault:string = "";

    }
    export class ProcessServiceList{
      SrNo:number=0;
      ServiceType: string = "";

      ServiceName: string = "";

      Selected: boolean=false;

      IsOptional:  boolean=false;

      IsDefault: boolean=false;

      ServiceID: string = "";

      ProcessName: string = "";

      ProcessID: number=0;
    

    }

 


