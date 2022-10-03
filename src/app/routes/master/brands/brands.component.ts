import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  UserID: any = 0; BrandsList: any;
  HideSaveButton = true;
  SaveData: any = {};
  BrandID: number = 0;

  private currentUser: User;

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
  }
  ngOnInit(): void {
    this.form = this.fb.group({

      BrandID: [0, Validators.required],
      BrandName: ["", Validators.required],
      IsActive: true,
      CreatedBy: [this.UserID]
    });
    this.BindinfDataToList();

  }

  BindinfDataToList() {
    this.api.get('/Brands/Brand_Select').subscribe(
      data => { this.BrandsList = data; console.log("initialdata", this.BrandsList) },
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

      {
        this.SaveData = {
          BrandID: this.form.value.BrandID,
          BrandName: this.form.value.BrandName,
          isActive: this.form.value.IsActive,
          CreatedBy: this.currentUser.userId
        }
        console.log("SaveData", this.SaveData);
        this.api.post('/Brands/Brand_Insert_Update', this.SaveData).subscribe(
          data => {
            this.dialog.alert(data[0], '', () => { window.location.reload(); });
            this.onReset();
            this.BindinfDataToList();
          },
          error => { console.error(error); }
        );
      }
    }

  }
  onReset() {
    this.form.reset();
    this.BrandID = 0;
    this.submitted = false;
    this.HideSaveButton = true;

    this.BindinfDataToList();

  }

  editProduct(record: any) {
    console.log("record ", record);

    this.HideSaveButton = true;
    const item: any = {

      BrandID: record.BrandID,
      BrandName: record.BrandName,
      CreatedBy: record.CreatedBy,
      IsActive: record.IsActive,
    }
    this.form.setValue(item);
    console.log(this.form.value);
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
      header: 'BrandID',
      field: 'BrandID',
      sortable: true,
      hide: true
    },

    {
      header: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 290,

    },

    {
      header: 'CreatedBy',
      field: 'CreatedBy',
      sortable: true,
      minWidth: 280,
    },


    {
      header: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 280,
    }
  ]
}
