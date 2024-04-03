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
  currentUser: any;
  MyMenus: any;
  GetUserDetailList: any = [];
  CompanyWarehouseListID: number = 0
  CompanyWareEditID: number = 0
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
  }

  ngOnInit(): void {
    this.MyMenus = this.api.getCurrentMenusForButton("UserCompany");
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
    this.UserSelectList();
  }
  async UserSelectList() {
    this.api.get('/Users/Users_Select').subscribe(
      data => {
        this.UsersList = data;
      },
      error => { console.error(error); }
    );
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
      this.api.post('/Users/Users_Insert', SaveUserData).subscribe(
        data => {
          this.dialog.alert(data.Table[0].message);
          this.OnResetActions();
        },
        error => { console.error(error); }
      );
    }
  }
  tabCustomerchange(event: any) {
    this.tab = event;
    if (event == 1) {
      this.UserSelectList();
    }
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

    { field: 'CompanyWarehouseListID', hide: true },
    { field: 'CompanyName', width: 220 },
    { field: 'WareHouseName', width: 220 },
    { field: 'CompanyID', hide: true },
    { field: 'WareHouseID', hide: true },
  ];
  OnAdd() {
    if (this.form.controls["cbCompany"].value == null) {
      document?.getElementById("cbCompany")?.focus();
      this.dialog.alert("Select Company Name...!!!")
    } else if (this.form.controls["cbWarehouse"].value == null) {
      document?.getElementById("cbWarehouse")?.focus();
      this.dialog.alert("Select Warehouse Name...!!!")
    } else {
      this.CompanyWarehouseGridList = [];
      const CompanyDetailFilter = this.CompanyWarehouseList.filter((x: any) => x.CompanyWarehouseListID != this.CompanyWareEditID)
      this.CompanyWarehouseList = [];
      this.CompanyWarehouseList = CompanyDetailFilter;
      const CompM = this.CompanyMasterList.filter((x: any) => x.CompanyID == Number(this.form.controls['cbCompany'].value));
      const WareM = this.WarehouseList.filter((x: any) => x.WareHouseID == Number(this.form.controls['cbWarehouse'].value));
      this.CompanyWarehouseListID = this.CompanyWarehouseListID + 1;
      this.CompanyWarehouseList.push({
        'CompanyWarehouseListID': this.CompanyWarehouseListID,
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
  OnResetActions() {
    // this.form.reset();
    // this.form.controls['txtUserName'].setErrors(null);
    // this.form.controls['cbWarehouse'].setErrors(null);
    // this.form.controls['txtUserName'].setErrors(null);
    // this.form.controls['txtUserDeatail'].setErrors(null);
    // this.form.controls['txtUserType'].setErrors(null);
    // this.form.controls['txtPassword'].setErrors(null);
    // this.form.controls['cbRole'].setErrors(null);
    // this.form.controls['cbWarehouse'].setErrors(null);
    
    // txtUserName: ['', Validators.required],
    // txtUserDeatail: ['', Validators.required],
    // txtUserType: [null, Validators.required],
    // txtPassword: ['', Validators.required],
    // cbRole: [null, Validators.required],
    // cbCompany: [null],
    // cbWarehouse: [null],

    // this.UserIDs = 0;
    // this.CompanyWarehouseList = [];
    // this.CompanyWarehouseGridList = [];
    // this.UserSelectList();
    // this.tab = 0;
    // this.CompanyWarehouseListID = 0
    // this.CompanyWareEditID = 0;
    window.location.reload();
  }
  OnUsersActions(Actiondata: any) {
    console.log("OnUsersActions", Actiondata.rowData);
    if (String(Actiondata.actions) == 'Delete') {
      
    } else if (String(Actiondata.actions) == 'Edit') {
      this.api.get('/Users/Get_UserDetail?UserID=' + String(Actiondata.rowData.UserID)).subscribe(
        data => {
          this.GetUserDetailList = data;
          this.CompanyWarehouseListID = 1;
          const utype = this.RoleList.filter((x: any) => x.RoleName == Actiondata.rowData.RoleName)

          this.UserIDs = Actiondata.rowData.UserID;
          this.CompanyWarehouseList = [];
          this.CompanyWarehouseGridList = [];
          const UserTypeL = this.UserTypeList.filter((x: any) => x.UserType1 == Actiondata.rowData.UserType);
          this.GetUserDetailList.forEach((element: any) => {
            const CompM = this.CompanyMasterList.filter((x: any) => x.CompanyName == element.CompanyName);
            const WareM = this.WarehouseList.filter((x: any) => x.WareHouseName == element.WareHouseName);
            this.CompanyWarehouseListID =this.CompanyWarehouseListID+ 1;
            this.CompanyWarehouseList.push({
              'CompanyWarehouseListID': this.CompanyWarehouseListID,
              'CompanyName': CompM[0].CompanyName,
              'WareHouseName': WareM[0].WareHouseName,
              'CompanyID': CompM[0].CompanyID,
              'WareHouseID': WareM[0].WareHouseID,
            });
          });
          const Editdata = {
            txtUserName: Actiondata.rowData.UserName,
            txtUserDeatail: Actiondata.rowData.UserDetail,
            txtUserType: UserTypeL[0].UserTypeID,
            txtPassword: Actiondata.rowData.Password,
            cbRole: utype[0].RoleID,
            cbCompany: 0,//this.CompanyWarehouseList[0].CompanyID,
            cbWarehouse: 0,//this.CompanyWarehouseList[0].WareHouseID,
          }
          this.form.setValue(Editdata);
          this.CompanyWarehouseGridList = this.CompanyWarehouseList.slice();
          console.log("CompanyWarehouseGridList", this.CompanyWarehouseGridList);
          this.tab = 0;
        },
        error => { console.error(error); }
      );
    }
  }
  dattyy: any = [
    {
      "$id": "2",
      "route": "Accounts",
      "name": "Accounts",
      "type": "sub",
      "icon": "settings",
      "badge": null,
      "children": [
        {
          "$id": "3",
          "route": "AdditionalServices",
          "name": "AdditionalServices",
          "type": "link"
        },
        {
          "$id": "4",
          "route": "BillProcess",
          "name": "BillProcess",
          "type": "link"
        },
        {
          "$id": "5",
          "route": "Receipt",
          "name": "Receipt",
          "type": "link"
        }
      ],
      "permissions": null,
      "label": null
    },
    {
      "$id": "33",
      "route": "Reports",
      "name": "Reports",
      "type": "sub",
      "icon": "build",
      "badge": null,
      "children": [
        {
          "$id": "34",
          "route": "Bill Estimate",
          "name": "Bill Estimate",
          "type": "link"
        },
        {
          "$id": "35",
          "route": "EmailSchedule",
          "name": "EmailSchedule",
          "type": "link"
        },
        {
          "$id": "36",
          "route": "lotsearch",
          "name": "lotsearch",
          "type": "link"
        },
        {
          "$id": "37",
          "route": "Report",
          "name": "Report",
          "type": "link"
        },

      ],
      "permissions": null,
      "label": null
    },
    {
      "$id": "43",
      "route": "Rate Management",
      "name": "Rate Management",
      "type": "sub",
      "icon": "settings",
      "badge": null,
      "children": [
        {
          "$id": "44",
          "route": "RateList",
          "name": "RateList",
          "type": "link"
        },
        {
          "$id": "45",
          "route": "SpecialRates",
          "name": "SpecialRates",
          "type": "link"
        }
      ],
      "permissions": null,
      "label": null
    },
  ]
  concatedString(a: any, b: any) {
    let c = String(a) + '/' + String(b)
    return c;
  }
  CompanyDoubleclick(Ddata: any) {
    console.log("CompanyDoubleclick", Ddata.data)
    this.CompanyWareEditID = Ddata.data.CompanyWarehouseListID;
    this.form.controls['cbCompany'].setValue(Ddata.data.CompanyID);
    this.form.controls['cbWarehouse'].setValue(Ddata.data.WareHouseID);
  }
}
