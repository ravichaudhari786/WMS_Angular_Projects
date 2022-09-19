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

  form!: FormGroup; submitted = false;
  UserID: any = 0; BrandsList: any;
  SaveData: any = {};
  tab = 0;
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

    this.BindDropdown();


  }


  async BindDropdown() {
    this.api.get('/Brands/Brand_Select').subscribe(
      data => { this.BrandsList = data },
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
      this.SaveData = {
        BrandID: this.form.value.BrandID,
        BrandName: this.form.value.BrandName,
        isActive: true,
        CreatedBy: this.currentUser.userId
      }
      // console.log(this.SaveData);
      this.api.post('/Brands/Brand_Insert_Update', this.SaveData).subscribe(
        data => {
          this.dialog.alert(data[0], '', () => { window.location.reload(); });
          // window.location.reload();
        },
        error => { console.error(error); }
      );
    }
  }

  tabchange(event: any) {
    this.tab = event;
  }

  editProduct(record: any) {
    const item: any = {

      BrandID: record.BrandID,
      BrandName: record.BrandName,
      CreatedBy: record.CreatedBy,
      IsActive: true
    }
    this.form.setValue(item);
    console.log(this.form.value);
    this.tab = 0;

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
