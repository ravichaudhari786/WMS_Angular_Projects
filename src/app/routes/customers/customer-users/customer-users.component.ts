import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
import { ColDef, GridApi } from 'ag-grid-community';
import { CustomeruserEditButtonComponent } from './customeruser-edit-button/customeruser-edit-button.component';
@Component({
  selector: 'app-customer-users',
  templateUrl: './customer-users.component.html',
  styleUrls: ['./customer-users.component.scss']
})
export class CustomerUsersComponent implements OnInit {
  UserID: any = 0;  form!: FormGroup; submitted = false;
  private currentUser: User; customerList: any; tab = 0; customergridlist: any;SaveData:any;
  frameworkComponents: any;CustomerLoginID:number=0;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: CustomeruserEditButtonComponent,
    }
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      // BrandID: [0, Validators.required],
      cbCustomerID: ["", Validators.required],
      CustomerName:[""],
      userName: ["", Validators.required],
      password: ["", Validators.required],
      IsActive: true,
      CreatedBy: [this.UserID],
    });
    this.BindDropdown();
  }
  async BindDropdown() {
    this.api.get('/Customer').subscribe(
      data => { this.customerList = data },
      error => { console.error(error); }
    );
    this.api.get('/CustomerUsers/CustomerLogin_List').subscribe(
      data => { this.customergridlist = data },
      error => { console.error(error); }
    );
  }
  get f() { return this.form.controls; }
  tabchange(event: any) {
    this.tab = event;
  }
  onSubmit(formData:any){

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else{
      this.SaveData = {
        CustomerLoginID :this.CustomerLoginID,
        CustomerID : this.form.value.cbCustomerID,
        UserName : this.form.value.userName,
        Password : this.form.value.password,
        isActive: true,
        CreatedBy: this.currentUser.userId
      }
    this.api.post('/CustomerUsers/CustomerLogIn_insert', this.SaveData).subscribe(
      data => {
        this.dialog.alert(data[0], '',);
        // window.location.reload();
        this.BindDropdown();
        // this.form.reset()
        // this.form.controls['BrandName'].setErrors(null);
      },
      error => { console.error(error); }
    );

    }

  }
  
  editCustomerView(record: any) {
    console.log(record);

    this.CustomerLoginID = record.rowData.CustomerLoginID;

   this.CustomerLoginID=record.rowData.CustomerLoginID;

    const item: any = {
      cbCustomerID: record.rowData.CustomerID,
      userName: record.rowData.UserName,
      password: record.rowData.Password,
      CustomerName: record.rowData.CustomerName,
      CreatedBy: record.rowData.CreatedBy,
      IsActive: true
    }
    this.form.setValue(item);
    this.tab = 0;
  }
  columns: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.editCustomerView.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'CustomerLoginID',
      field: 'CustomerLoginID',
      sortable: true,
      minWidth: 80,
    },
    {
      headerName: 'CustomerID',
      field: 'CustomerID',
      sortable: true,
      hide: true
    },
    {
      headerName: 'CustomerName',
      field: 'CustomerName',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'UserName',
      field: 'UserName',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'Password',
      field: 'Password',
      sortable: true,
      minWidth: 80,

      hide:true


      


    },
    {
      headerName: 'Is_Active',
      field: 'Is_Active',
      sortable: true,
      minWidth: 80,
    },
    {
      headerName: 'CreatedBy',
      field: 'CreatedBy',
      sortable: true,
      minWidth: 80,
    },
    {
      headerName: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 150,
    }
  ]
}