

import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { count } from 'console';
import { User } from '@core/authentication/interface';

@Component({
  selector: 'app-Designation-master',
  templateUrl: './Designation-master.component.html',
  styleUrls: ['./Designation-master.component.scss']
})
export class DesignationMasterComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  ItemTypelist: any; DesignationList: any;
  HideSaveButton = true;
  DesigID: number = 0;
  UserID: any = 0;
  private currentUser: User;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.UserID = api.getUserID();
    this.currentUser = this.api.getCurrentUser();
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      txtDesignationName: ['', Validators.required],
      txtDesignationCode: ['', Validators.required],
      chIsActive: [true, Validators.required],
    });
    this.BindinfDataToList();
  }
  BindinfDataToList() {
    this.api.get('/Designation/Designation_Select').subscribe(
      data => {
        this.DesignationList = data;
      }, error => { console.error(error); }
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
      const Designation = {
        DesignationID: this.DesigID,
        DesignationName: this.form.value.txtDesignationName,
        DesignationCode: this.form.value.txtDesignationCode,
        IsActive: this.form.value.chIsActive,
      }
      this.api.post('/Designation/Designation_Insert_Update', Designation).subscribe(
        data => {
          this.dialog.alert(data[0], '', () => { window.location.reload(); });
          this.onReset();
          this.BindinfDataToList();
        },
        error => { console.error(error); }
      );

    }
  }
  onReset() {
    this.form.reset();
    this.DesigID = 0;
    this.submitted = false;
    this.HideSaveButton = true;
    this.form.controls['chIsActive'].setValue(true);
    this.BindinfDataToList();
  }
  editDesignation(record: any) {

    this.HideSaveButton = true;
    console.log(record);
    this.DesigID = record.DesignationID;
    const item: any = {
      txtDesignationName: record.DesignationName,
      txtDesignationCode: record.DesignationCode,
      chIsActive: record.IsActive,
    };
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
          click: record => this.editDesignation(record),
        }
      ]
    },

    {
      header: 'DesignationID',
      field: 'DesignationID',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'DesignationName',
      field: 'DesignationName',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'DesignationCode',
      field: 'DesignationCode',
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


