

import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { count } from 'console';
import { User } from '@core/authentication/interface';

@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.scss']
})
export class DepartmentMasterComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  HideSaveButton = true;

  ItemTypelist: any; DepartmentList: any;
  DeptID: number = 0;
  UserID: any = 0;
  private currentUser: User;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.UserID = api.getUserID();
    this.currentUser = this.api.getCurrentUser();

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
      DepartmentID: this.DeptID,
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
  editDepartment(record: any) {
    this.HideSaveButton = true;
    console.log(record);
    this.DeptID = record.DepartmentID;
    const item: any = {
      txtDepartmentName: record.DepartmentName,
      txtDepartmentCode: record.DepartmentCode,
      chIsActive: record.IsActive,
    };
    console.log("item", item);
    this.form.setValue(item);
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
          click: record => this.editDepartment(record),
        }
      ]
    },

    {
      header: 'DepartmentID',
      field: 'DepartmentID',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'DepartmentName',
      field: 'DepartmentName',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'DepartmentCode',
      field: 'DepartmentCode',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'IsActive',
      field: 'IsActive',
      sortable: true,
      minWidth: 120
    }
  ]
}


