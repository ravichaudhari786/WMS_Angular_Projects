import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { MtxDialog } from '@ng-matero/extensions';
import { ColDef } from 'ag-grid-community';
import { InwardActionButtonComponent } from 'app/routes/process/inward/inward-action-button/inward-action-button.component';

@Component({
  selector: 'app-usercomapny',
  templateUrl: './usercomapny.component.html',
  styleUrls: ['./usercomapny.component.scss']
})
export class UsercomapnyComponent implements OnInit {
  form!: FormGroup;
  tab = 0;
  submitted = false;
  currentUser: any;
  UsersList: any = [];
  WarehouseList: any = [];
  CompanyMasterList: any = [];
  CompanyWarehouseGridList: any = [];
  FinalCompanyWarehouseGridList: any = [];
  CompanyWarehouseList: any = [];
  UserCompanyData: any = [];
  frameworkComponents: any;
  MyMenus: any;
  UserCompanyIDs: any = 0;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
  }

  ngOnInit(): void {
    this.currentUser = this.api.getCurrentUser();
    this.MyMenus = this.api.getCurrentMenusForButton("Users");
    this.form = this.fb.group({
      UserName: [0, Validators.required],
      CompanyName: [0, Validators.required],
    });
    this.BindDropdown();
  }
  get f() { return this.form.controls; }
  async BindWarehouseGrid(UserID: any, CompanyID: any) {
    const bodys = {
      "UserID": UserID,
      "CompanyID": CompanyID,
    };
    this.api.post('/UserCompany/UserCompanyWareHouseList_select', bodys).subscribe(
      data => {
        this.WarehouseList =[];
        this.WarehouseList = data;
      },
      error => { console.error(error); }
    );
  }
  async BindDropdown() {
    this.api.get('/Users/Users_Select').subscribe(
      data => {
        this.UsersList =[];
        this.UsersList = data;
      },
      error => { console.error(error); }
    );

    this.api.get('/Users/CompanyMaster_List').subscribe(
      data => {
        this.CompanyMasterList=[];
        this.CompanyMasterList = data;
      },
      error => { console.error(error); }
    );
    this.api.get('/UserCompany/UserCompanyList_select').subscribe(
      data => {
        this.UserCompanyData=[]
        this.UserCompanyData = data;
      },
      error => { console.error(error); }
    );
    this.BindWarehouseGrid(0, 0);
  }
  onSubmit(formData: any) {
    this.submitted = true;
    this.FinalCompanyWarehouseGridList = [];
    this.CompanyWarehouseGridList.forEach((element: any) => {
      const COMList = {
        "UserID": element.UserID,
        "CompanyID": element.CompanyID,
        "WarehouseID": element.WarehouseID,
      }
      this.FinalCompanyWarehouseGridList.push(COMList)
    });
    const FinalInsertData = {
      "UserCompanyID":this.UserCompanyIDs,
      "LTD_UserCompany": this.FinalCompanyWarehouseGridList,
      "CreatedBy":this.currentUser.userId
    }
    console.log("onSubmit", FinalInsertData)
    this.api.post('/UserCompany/UserCompany_Insert', FinalInsertData).subscribe(
      data => {
        this.dialog.alert(data.Table[0].message);
        this.OnResetActions();
      },
      error => { console.error(error); }
    );
  }
  OnResetActions(){
    this.CompanyWarehouseList = [];
    this.FinalCompanyWarehouseGridList=[];
    this.CompanyWarehouseGridList=[];
    this.UserCompanyIDs=0;    
    this.submitted=false;
    this.tab =0;
    this.BindDropdown();
    const formconst={
      UserName: 0,
      CompanyName: 0,
    }
    this.form.setValue(formconst)
  }
  // OnAdd() {
  //   if (this.form.controls["cbCompany"].value == null) {
  //     document?.getElementById("cbCompany")?.focus();
  //     this.dialog.alert("Select Company Name...!!!")
  //   } else if (this.form.controls["cbWarehouse"].value == null) {
  //     document?.getElementById("cbWarehouse")?.focus();
  //     this.dialog.alert("Select Warehouse Name...!!!")
  //   } else {
  //     this.CompanyWarehouseGridList = [];
  //     const CompanyDetailFilter = this.CompanyWarehouseList.filter((x: any) => x.CompanyWarehouseListID != 1)
  //     this.CompanyWarehouseList = [];
  //     this.CompanyWarehouseList = CompanyDetailFilter;
  //     const CompM = this.CompanyMasterList.filter((x: any) => x.CompanyID == Number(this.form.controls['cbCompany'].value));
  //     const WareM = this.WarehouseList.filter((x: any) => x.WareHouseID == Number(this.form.controls['cbWarehouse'].value));
  //     this.CompanyWarehouseList.push({
  //       'CompanyName': CompM[0].CompanyName,
  //       'WareHouseName': WareM[0].WareHouseName,
  //       'CompanyID': CompM[0].CompanyID,
  //       'WareHouseID': WareM[0].WareHouseID,
  //     });
  //     this.form.controls['cbCompany'].reset();
  //     this.form.controls['cbWarehouse'].reset();
  //     this.CompanyWarehouseGridList = this.CompanyWarehouseList.slice();
  //   }
  // }
  CompanyWarehouseGrid: ColDef[] = [
    { field: 'UserID', hide: true },
    { field: 'UserName', width: 220 },
    { field: 'CompanyID', hide: true },
    { field: 'ComapanyName', hide: false },
    { field: 'WarehouseID', hide: true },
    { field: 'WarehouseName', hide: false },
  ];
  UserCompanyGrid: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 200,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {onClick: this.OnUserCompanyActions.bind(this)}
    },
    { field: 'UserCompanyID', hide: true },
    { field: 'UserID', hide: true },
    { field: 'UserName', hide: false },
    { field: 'CompanyID', hide: true },
    { field: 'CompanyName', hide: false },
    { field: 'WareHouseID', hide: true },
    { field: 'WareHouseName', hide: false },
    { field: 'CreatedDate', hide: false },
  ];
  WarehouseListColumns: ColDef[] = [
    { field: 'IsSelected', headerName: 'Add', width: 100, type: 'checkbox', cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params), },
    { field: 'WareHouseID', width: 100, hide: true },
    { field: 'WareHouseName', width: 220 },
  ];
  checkBoxCellEditRenderer(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.CompanyWarehouseGridList = [];
      if (this.form.invalid) {
        const whconst = this.WarehouseList;
        this.WarehouseList = [];
        this.dialog.alert("Please Select User Name and Company name....!!!")
        whconst.forEach((element: any) => {
          element.IsSelected = false;

        });
        setTimeout(async () => {
          this.WarehouseList = whconst;
          console.log("this.form.controls", this.form.controls)
          if (this.form.controls.UserName.status == "INVALID") {
            document?.getElementById("UserName")?.focus();
          } else if (this.form.controls.CompanyName.status == "INVALID") {
            document?.getElementById("CompanyName")?.focus();
          }
        }, 1000);
      } else {        
        this.WarehouseList.forEach((element: any) => {
          if (element.IsSelected == true) {

            const UserM = this.UsersList.filter((x: any) => x.UserID == Number(this.form.controls['UserName'].value));
            const CompM = this.CompanyMasterList.filter((x: any) => x.CompanyID == Number(this.form.controls['CompanyName'].value));
            const CompList = {
              'UserID': UserM[0].UserID,
              'UserName': UserM[0].UserName,
              'CompanyID': CompM[0].CompanyID,
              'ComapanyName': CompM[0].CompanyName,
              'WarehouseID': element.WareHouseID,
              'WarehouseName': element.WareHouseName,
            }
            this.CompanyWarehouseGridList.push(CompList)
            console.log("CompanyWarehouseGridList", this.CompanyWarehouseGridList)
          }
        });
      }
    });

    return input;
  }
  OnUserCompanyActions(ActionData: any) {
    //console.log("ActionData", ActionData.actions)
    //console.log("ActionData", ActionData.rowData)

    if (String(ActionData.actions) == 'Edit') {
      this.CompanyWarehouseGridList = [];
      this.UserCompanyIDs = ActionData.rowData.UserCompanyID;
      const editdata = {
        "UserName": ActionData.rowData.UserID,
        "CompanyName": ActionData.rowData.CompanyID
      }
      this.form.setValue(editdata);
      this.BindWarehouseGrid(ActionData.rowData.UserID, ActionData.rowData.CompanyID);
      const CompList = {
        'UserID': ActionData.rowData.UserID,
        'UserName': ActionData.rowData.UserName,
        'CompanyID': ActionData.rowData.CompanyID,
        'ComapanyName': ActionData.rowData.CompanyName,
        'WarehouseID': ActionData.rowData.WareHouseID,
        'WarehouseName': ActionData.rowData.WareHouseName,
      }

      this.tab = 0
      this.CompanyWarehouseGridList.push(CompList);
    }
  }
  tabchange(event: any) {
    this.tab = event;
  }
}
