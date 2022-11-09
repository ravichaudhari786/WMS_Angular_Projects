

import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { count } from 'console';
import { User } from '@core/authentication/interface';
import { ColDef,GridApi } from 'ag-grid-community';
import { DepartmentmastereditbuttonComponent } from './departmentmastereditbutton/departmentmastereditbutton.component';

@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.scss']
})
export class DepartmentMasterComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  HideSaveButton = true;
  frameworkComponents: any;
  tab: any;
  ItemTypelist: any; DepartmentList: any;
  DeptID: number = 0;
  dapartmentdid:number=0;
  UserID: any = 0;
  
  private currentUser: User;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.UserID = api.getUserID();
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: DepartmentmastereditbuttonComponent
      }

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      txtDepartmentName: ['', Validators.required],
      txtDepartmentCode: ['', Validators.required],
      chIsActive: [true, Validators.required],
    });
    this.BindinfDataToList();
  }
  BindinfDataToList() {
    this.api.get('/Department/Department_Select').subscribe(
      data => {
        this.DepartmentList = data;
      },
      error => { console.error(error); }
    );
  }

  get f() { return this.form.controls; }

  onSubmit(formData: any) {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else {
      this.HideSaveButton = true;
    }
    const Department = {
      DepartmentID: this.dapartmentdid,
      DepartmentName: this.form.value.txtDepartmentName,
      DepartmentCode: this.form.value.txtDepartmentCode,
      IsActive: this.form.value.chIsActive,
    }
    console.log("Department", Department);
    this.api.post('/Department/Department_Insert_Update', Department).subscribe(
      data => {
        this.dialog.alert(data[0], '', () => { window.location.reload(); });
        this.onReset();
        this.BindinfDataToList();
      },
      error => { console.error(error); }
    );
  }

  onReset() {
    this.form.reset();
    this.DeptID = 0;
    this.submitted = false;
    this.HideSaveButton = true;
    this.form.controls['chIsActive'].setValue(true);
    this.BindinfDataToList();
  }
  // editDepartment(record: any) {
  //   this.HideSaveButton = true;
  //   console.log(record);
  //   this.DeptID = record.DepartmentID;
  //   const item: any = {
  //     txtDepartmentName: record.DepartmentName,
  //     txtDepartmentCode: record.DepartmentCode,
  //     chIsActive: record.IsActive,
  //   };
  //   console.log("item", item);
  //   this.form.setValue(item);
  // }
  // columns: MtxGridColumn[] = [
  //   {
  //     header: "Action",
  //     field: 'Action',
  //     minWidth: 90,
  //     width: '90px',
  //     pinned: 'right',
  //     type: 'button',
  //     buttons: [
  //       {
  //         type: 'icon',
  //         icon: 'edit',
  //         tooltip: 'Edit',
  //         click: record => this.editDepartment(record),
  //       }
  //     ]
  //   },

  //   {
  //     header: 'DepartmentID',
  //     field: 'DepartmentID',
  //     sortable: true,
  //     minWidth: 250,
  //   },
  //   {
  //     header: 'DepartmentName',
  //     field: 'DepartmentName',
  //     sortable: true,
  //     minWidth: 250,
  //   },
  //   {
  //     header: 'DepartmentCode',
  //     field: 'DepartmentCode',
  //     sortable: true,
  //     minWidth: 250,
  //   },
  //   {
  //     header: 'IsActive',
  //     field: 'IsActive',
  //     sortable: true,
  //     minWidth: 120
  //   }
  // ]
  oneditDepartment(d:any){

    const strdepartmentId=this.DepartmentList.filter((x:any)=>x.DepartmentID==d.rowData.DepartmentID);
  
  
    console.log("on edit data",d);
    
   
   this.form.controls['txtDepartmentName'].reset();
   this.form.controls['txtDepartmentCode'].reset()
  
  //fill the selected grid row data and patch to form fields
      departmentID:d.rowData["DeapartmentID"];
      this.form.patchValue({
        
        
        txtDepartmentName :d.rowData["DepartmentName"],
        txtDepartmentCode :d.rowData["DepartmentCode"],
        
      });
   
  this.dapartmentdid=d.rowData["DepartmentID"];//dapartmentdid used to save Customerid  on grid row selection 
  console.log("Wprk3333",d.rowData);//cellselaction array contain whole selected row of customerlist and place on 0th position of its own array
  this.tab = 0;
  
  
  }
  
  columnDefs: ColDef[] = [

    {  headerName: 'Action', width:100 ,floatingFilter: false,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.oneditDepartment.bind(this),
      label: 'Click 1'
    }
  },
    { headerName:'DepartmentID',field: 'DepartmentID',hide:false, filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'DepartmentName',field: 'DepartmentName' ,  filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName:'DepartmentCode',field: 'DepartmentCode' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'IsActive',field: 'IsActive' ,filter: 'agTextColumnFilter', floatingFilter: true,},
   
 


   ]
}


