
import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { count } from 'console';
import { User } from '@core/authentication/interface';

@Component({
  selector: 'app-count-master',
  templateUrl: './count-master.component.html',
  styleUrls: ['./count-master.component.scss']
})
export class CountMasterComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  ItemTypelist: any; countList: any;
  HideSaveButton = true;
  CountsID: number = 0;
  UserID: any = 0;
  private currentUser: User;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.UserID = api.getUserID();
    this.currentUser = this.api.getCurrentUser();
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
        CountID: this.CountsID,
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
  CountListcolumns: MtxGridColumn[] = [
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
          click: record => this.editCount(record),
        }
      ]
    },

    {
      header: 'CountID',
      field: 'CountID',
      sortable: true,
      minWidth: 250,

    },
    {
      header: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'IsActive',
      field: 'IsActive',
      sortable: true,
      minWidth: 120
    },
    {
      header: 'CreatedBy',
      field: 'CreatedBy',
      sortable: true,
      minWidth: 170
    },
    {
      header: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 170,
    }

  ]
}

