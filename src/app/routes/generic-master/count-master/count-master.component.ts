
import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { count } from 'console';
import { User } from '@core/authentication/interface';
import { ColDef,GridApi } from 'ag-grid-community';
import { CountmastereditbuttonComponent } from './countmastereditbutton/countmastereditbutton.component';

@Component({
  selector: 'app-count-master',
  templateUrl: './count-master.component.html',
  styleUrls: ['./count-master.component.scss']
})
export class CountMasterComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  ItemTypelist: any; countList: any;
  frameworkComponents: any;
  HideSaveButton = true;
  CountsID: number = 0;
  countdid:number=0;
  UserID: any = 0;
  tab: any;
  private currentUser: User;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.UserID = api.getUserID();
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
    buttonRenderer: CountmastereditbuttonComponent
    }
  
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      txtCountName: ['', Validators.required],
      chIsActive: [true, Validators.required],
    });
    this.BindinfDataToList();
  }
  BindinfDataToList() {
    this.api.get('/CountMaster/CountMaster_Select').subscribe(
      data => {
        this.countList = data;
      },
      error => { console.error(error); }
    );
    this.HideSaveButton = true;
  }

  get f() { return this.form.controls; }

  onSubmit(formData: any) {
    console.log(formData.value);
    console.log(this.form);
    this.submitted = true;
    if (this.form.invalid) {
      
      return;
    }
    else {
      //this.form.setValidators(Validators.required);
      const count = {
        CountID: this.countdid,
        Counts: this.form.value.txtCountName,
        IsActive: this.form.value.chIsActive,
        CreatedBy: this.currentUser.userId
      }
      this.api.post('/CountMaster/CountMaster_Insert_Update', count).subscribe(
        data => {

         

          this.dialog.alert(data[0], '', );
          
          // //this.form.controls['txtCountName'].setErrors(null);
          // this.form.controls['txtCountName'].clearValidators();
          // this.form.controls['txtCountName'].setValue('');
          this.BindinfDataToList();
          //
          // this.form.controls['chIsActive'].setErrors(null);
          
        
         

         
          this.form.reset()
          this.form.invalid;
         // this.ngOnInit();
          console.log("form",this.form.value)
         
        },
        error => { console.error(error); }
      );
      
    }
   
  }

  onReset() {
    this.form.reset();
    this.CountsID = 0;
    this.submitted = false;
    this.HideSaveButton = true;

    this.form.controls['chIsActive'].setValue(true);
    this.BindinfDataToList();
  }

  editCount(record: any) {
    this.HideSaveButton = true;
    this.CountsID = record.CountID;
    const item: any = {
      txtCountName: record.Counts,
      chIsActive: record.IsActive,
    }
    console.log("item", item);
    this.form.setValue(item);

  }

  
  oneditCount(d:any){

  const strcountId=this.countList.filter((x:any)=>x.CountID==d.rowData.CountID);


  console.log("on edit data",d);
  
 
 this.form.controls['txtCountName'].reset();

//fill the selected grid row data and patch to form fields
    countID:d.rowData["CountID"];
    this.form.patchValue({
      
      
      txtCountName :d.rowData["Counts"],
      
    });
 
this.countdid=d.rowData["CountID"];//countdid used to save Customerid  on grid row selection 
console.log("Wprk3333",d.rowData);//cellselaction array contain whole selected row of customerlist and place on 0th position of its own array
this.tab = 0;


}



  columnDefs: ColDef[] = [

    {  headerName: 'Action', width:100 ,floatingFilter: false,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.oneditCount.bind(this),
      label: 'Click 1'
    }
  },
    { headerName:'CountID',field: 'CountID',hide:false, filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'Counts',field: 'Counts' ,  filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName:'IsActive',field: 'IsActive' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'CreatedBy',field: 'CreatedBy' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'CreatedDate',field: 'CreatedDate' ,filter: 'agTextColumnFilter', floatingFilter: true,},
 


   ]
}

