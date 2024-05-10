import { Component, OnInit } from '@angular/core';
import { noUndefined } from '@angular/compiler/src/util';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { parseDate } from 'devextreme/localization';
import * as moment from 'moment';

@Component({
  selector: 'app-labour-contractors',
  templateUrl: './labour-contractors.component.html',
  styleUrls: ['./labour-contractors.component.scss']
})


export class LabourContractorsComponent implements OnInit {
  todayDate:any ;
  form!: FormGroup;submitted = false;
  TempCatList:any;ItemTypelist:any;ItemList:any;


  dataSource = new MatTableDataSource<any>();
  tab=0;
  UserID:any=0;

  constructor(private fb: FormBuilder,private api:ApiService,public dialog: MtxDialog,) {
   this.UserID=api.getUserID();


   }

  ngOnInit(): void {

    this.form = this.fb.group({

      ContractorName: ['', Validators.required],
      Address1: ['', Validators.required],

      Address2: [''],
      ContactNo: [null,Validators.required],

      PanCardNo: [null, Validators.required],

      LicenceNo:[null,Validators.required],

      DOJ:['',Validators.required],

      BankName: [''],

      Branch: [''],

      AccountNo: [''],

      IFSCCode: [''],

      EmailID: [''],

      GSTNo: [''],
      LabourContractorID:[0]
    });


    this.BindDropdown();
    //console.log(this.Itemlist);
  }

  async BindDropdown(){
     this.api.get('/LabourContracter/LabourContractors_Select').subscribe(
       data=>{this.ItemTypelist=data},
       error=>{ console.error(error);}
     );

    //  this.api.get('/TemperatureCategory').subscribe(
    //   data=>{this.TempCatList=data},
    //   error=>{ console.error(error);}
    // );

    this.api.get('/LabourContracter/LabourContractors_Select').subscribe(
      data=>{this.ItemList=data},
      error=>{ console.error(error);}
    );

  }


  get f() { return this.form.controls; }

  onSubmit(formData:any){
    this.submitted = true;
    if (this.form.invalid) {
     //this.dialog.alert("invalid form");
     return;
    }
    else
    {
      const item=formData.value;
      this.api.post('/LabourContracter/LabourContractor_Insert_Update',item).subscribe(
        data=>{
          this.dialog.alert(data[0],'',() => {window.location.reload();});
         // window.location.reload();
          },
        error=>{ console.error(error);}
      );
    }
  }


  tabchange(event:any){
    this.tab=event;
  }
 
  editProduct(record:any){
    this.todayDate=new DatePipe('en-US').transform(record.DOJ, 'dd-MM-yyyy') ;

    var temp:any=null;
    if(record.TemperatureCategory){
      temp=this.TempCatList.filter((x:any)=>x.TemperatureCategory===record.TemperatureCategory);
      
    }
    //var ItemCodes = temp?null:temp[0].TemperatureCategoryID;
    const item:any={
      
      LabourContractorID:record.LabourContractorID==null?0:record.LabourContractorID,
      ContractorName : record.ContractorName==null?'':record.ContractorName,
      Address1 :record.Address1,
      Address2 :record.Address2,
      ContactNo :record.ContactNo,
      PanCardNo:record.PanCardNo,
      LicenceNo:record.LicenceNo,
     
     // DOJ:this.todayDate,
     DOJ:new DatePipe('en-US').transform(record.DOJ, 'dd-MM-yyyy') ,
      BankName :record.BankName,
      Branch:record.Branch,
      AccountNo:record.AccountNo,
      IFSCCode:record.IFSCCode,
      EmailID:record.EmailID,
      GSTNo:record.GSTNo
    }
    this.form.setValue(item);
    //this.form.controls.DOJ.setValue(this.todayDate)
  
    this.tab=0;
  }


  
  columns: MtxGridColumn[] = [
    {
      
      header: "Action",
      field: 'Action',
      minWidth: 90,
      width: '90px',
      pinned: 'right',
      
      type: 'button',
      buttons: [
        {
        
          type: 'icon',
          icon: 'edit',
          tooltip: 'Edit',
          click: record => this.editProduct(record),
        }
      ]
    },
    {
      header:'ContractorName',
      field:'ContractorName',
      sortable: true,
      hide:false,
      minWidth: 170,
    
      
    },
    {
      header:'Address1',
      field:'Address1',
      sortable: true,
      minWidth: 170,
    },
    {
      header:'Address2',
      field:'Address2',
      sortable: true,
      minWidth: 250,
      
    },
    {
      header:'ContactNo',
      field:'ContactNo',
      hide:false,
      minWidth: 170,
    },
    {
      header:'PanCardNo',
      field:'PanCardNo',
      sortable: true,
      minWidth: 170,
    },
    {
      header:'LicenceNo',
      field:'LicenceNo',
      hide:false,
      minWidth: 170,
    },
    {
      header:'DOJ',
      field:'DOJ',
      sortable: true,
      minWidth: 200,
    },
    {
      header:'BankName',
      field:'BankName',
      sortable: true,
      minWidth: 120,
    },
    {
      header:'Branch',
      field:'Branch',
      sortable: true,
      minWidth: 120,
    },
    {
      header:'AccountNo',
      field:'AccountNo',
      sortable: true,
      minWidth: 120,
    },
    {
      header:'IFSCCode',
      field:'IFSCCode',
      sortable: true,
      minWidth: 120,
    },
    {
      header:'EmailID',
      field:'EmailID',
      sortable: true,
      minWidth: 120,
    },
    {
      header:'GSTNo',
      field:'GSTNo',
      sortable: true,
      minWidth: 120,
    },
    {
      header:'LabourContractorID',
      field:'LabourContractorID',
      sortable: true,
      minWidth: 120,
    }
  ]


}

