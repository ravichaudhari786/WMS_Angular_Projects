import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { ColDef, GridApi, GridOptions, RowDoubleClickedEvent } from 'ag-grid-community';
import { InwardActionButtonComponent } from '../../process/inward/inward-action-button/inward-action-button.component'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  UserTypeList: any = [];
  RoleList: any = [];
  WarehouseList: any = [];
  CompanyMasterList: any = [];
  frameworkComponents: any;
  UsersList: any = [];
  tab = 0;
  UserIDs: any = 0;
  CompanyWarehouseGridList: any = [];
  FinalCompanyWarehouseList: any = [];
  CompanyWarehouseList: any = [];
  currentUser:any;
  MyMenus:any;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
  }

  ngOnInit(): void {
    this.MyMenus = this.api.getCurrentMenusForButton("Users");
    this.currentUser = this.api.getCurrentUser();
    this.form = this.fb.group({
      txtUserName: ['', Validators.required],
      txtUserDeatail: ['', Validators.required],
      txtUserType: [null, Validators.required],
      txtPassword: ['', Validators.required],
      cbRole: [null, Validators.required],
      cbCompany: [null],
      cbWarehouse: [null],
    });
    this.BindDropdown();
  }
  get f() { return this.form.controls; }
  async BindDropdown() {
    this.api.get('/Users/UserType_List').subscribe(
      data => {
        this.UserTypeList = data;
      },
      error => { console.error(error); }
    );
    this.api.get('/Users/Role_List').subscribe(
      data => {
        this.RoleList = data;
      },
      error => { console.error(error); }
    );
    this.api.get('/Users/Warehouse_List').subscribe(
      data => {
        this.WarehouseList = data;
      },
      error => { console.error(error); }
    );
    this.api.get('/Users/CompanyMaster_List').subscribe(
      data => {
        this.CompanyMasterList = data;
      },
      error => { console.error(error); }
    );
    this.api.get('/Users/Users_Select').subscribe(
      data => {
        this.UsersList = data;
      },
      error => { console.error(error); }
    );
  }

  onSubmit(formData: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else if (this.CompanyWarehouseGridList.length == 0) {
      document?.getElementById("cbCompany")?.focus();
      this.dialog.alert('Please Add Company and Warehouse......!!!')

    } else {
      this.FinalCompanyWarehouseList = []
      this.CompanyWarehouseGridList.forEach((element: any) => {
        this.FinalCompanyWarehouseList.push({
          'CompanyID': element.CompanyID,
          'WarehouseID': element.WareHouseID,
        })
      });
      const SaveUserData = {
        'UserID': this.UserIDs,
        'UserName': this.form.controls['txtUserName'].value,
        'UserDetail': this.form.controls['txtUserDeatail'].value,
        'Password': this.form.controls['txtPassword'].value,
        'RoleID': this.form.controls['cbRole'].value,
        'UserTypeID': this.form.controls['txtUserType'].value,
        'CreatedBy': this.currentUser.userId,
        'Lcls_TD_Users': this.FinalCompanyWarehouseList,
      };
      this.api.post('/Users/Users_Insert',SaveUserData).subscribe(
        data => {
          this.dialog.alert(data.Table[0].message)
        },
        error => { console.error(error); }
      );
    }
  }
  tabCustomerchange(event: any) {
    this.tab = event;
  }
  UserListcolumns: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 150,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnUsersActions.bind(this),
      }
    },
    { field: 'UserID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'UserName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'UserDetail', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Password', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'RoleName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'UserType', filter: "agTextColumnFilter", floatingFilter: true },

  ];

  CompanyWarehouseGrid: ColDef[] = [
    //{ field: 'UserID',hide: true },
    { field: 'CompanyName', width: 450 },
    { field: 'WareHouseName', width: 450 },
    { field: 'CompanyID', hide: true },
    { field: 'WareHouseID', hide: true },
  ];
  OnAdd() {
    if(this.form.controls["cbCompany"].value==null){
      document?.getElementById("cbCompany")?.focus();
      this.dialog.alert("Select Company Name...!!!")      
    }else if(this.form.controls["cbWarehouse"].value==null){
      document?.getElementById("cbWarehouse")?.focus();
      this.dialog.alert("Select Warehouse Name...!!!")      
    }else{
      this.CompanyWarehouseGridList = [];
      const CompM = this.CompanyMasterList.filter((x: any) => x.CompanyID == Number(this.form.controls['cbCompany'].value));
      const WareM = this.WarehouseList.filter((x: any) => x.CompanyID == Number(this.form.controls['cbWarehouse'].value));
      this.CompanyWarehouseList.push({
        'CompanyName': CompM[0].CompanyName,
        'WareHouseName': WareM[0].WareHouseName,
        'CompanyID': CompM[0].CompanyID,
        'WareHouseID': WareM[0].WareHouseID,
      });
      this.form.controls['cbCompany'].reset();
      this.form.controls['cbWarehouse'].reset();
      this.CompanyWarehouseGridList = this.CompanyWarehouseList.slice();
    }    
  }
  OnUsersActions(Actiondata:any){
    console.log("OnUsersActions",Actiondata.actions)
  }
}
