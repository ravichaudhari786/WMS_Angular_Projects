import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
import { BrandsEditButtonComponent } from './brands-edit-button/brands-edit-button.component';
import { ColDef, GridApi } from 'ag-grid-community';
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
  BrandID:number=0;
  private currentUser: User;
  HideSaveButton = true;
  frameworkComponents: any;

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: BrandsEditButtonComponent,
    }
  }


  ngOnInit(): void {

    this.form = this.fb.group({

      // BrandID: [0, Validators.required],
      BrandName: ["", Validators.required],
      IsActive: true,
      CreatedBy: [this.UserID]

    });

    this.BindDropdown();


  }


  async BindDropdown() {
    this.api.get('/Brands/Brand_Select').subscribe(
      data => { this.BrandsList = data;  },
      error => { console.error(error); }
    );
  }

  get f() { return this.form.controls; }


  onSubmit(formData: any) {
    // console.log(formData)
    this.submitted = true;
    if (this.form.invalid) {

      return;
    }
    else {
      this.HideSaveButton = false;
      this.SaveData = {
        BrandID: this.BrandID,
        BrandName: this.form.value.BrandName,
        isActive: true,
        CreatedBy: this.currentUser.userId
      }
      
      this.api.post('/Brands/Brand_Insert_Update', this.SaveData).subscribe(
        data => {
          this.dialog.alert(data[0], '',);
          // window.location.reload();
          this.BindDropdown();
          this.form.reset()
          this.form.controls['BrandName'].setErrors(null);
          

        },
        error => { console.error(error); }
      );
    }
  }

  tabchange(event: any) {
    this.tab = event;
  }
  // ResetForm() {
  //   this.BrandID=0;
  //   this.form.reset();
  //   this.HideSaveButton = true;
  //   this.submitted = false;
  //   this.BindDropdown();
  // }

  editProduct(record: any) {
    console.log(record)
   this.BrandID=record.rowData.BrandID;
    const item: any = {
      BrandName: record.rowData.BrandName,
      CreatedBy: record.rowData.CreatedBy,
      IsActive: true
    }
    this.form.setValue(item);
    console.log(this.form.value);
    this.tab = 0;
  }

  columns: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.editProduct.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'BrandID',
      field: 'BrandID',
      sortable: true,
      hide: true
    },

    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 290,

    },

    {
      headerName: 'CreatedBy',
      field: 'CreatedBy',
      sortable: true,
      minWidth: 280,
    },


    {
      headerName: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 280,
    }



  ]








}
