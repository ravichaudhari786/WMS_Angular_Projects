import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { MtxDialog } from '@ng-matero/extensions';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-role-ui',
  templateUrl: './role-ui.component.html',
  styleUrls: ['./role-ui.component.scss']
})
export class RoleUiComponent implements OnInit {
  tab = 0;
  form!: FormGroup;
  RoleList: any = [];
  submitted = false;
  currentUser: any;
  RoleUISelect: any = [];
  FinalRoleUISelect: any = [];
  ReportUISelect: any = [];
  FinalReportUISelect: any = [];
  LTD_RolesUI: any = {
    "RoleUIID": 0,
    "RoleID": 0,
    "UIMasterID": 0,
    "New_flg": true,
    "List_flg": true,
    "Edit_flg": true,
    "Delete_flg": true,
    "Print_flg": true,
    "Export_flg": true,
  }
  LTD_RoleReport: any = {
    "ReportID": 0,
    "isAssigned": true,
  }

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) { }

  ngOnInit(): void {
    this.currentUser = this.api.getCurrentUser();
    this.BindDropdown();
    this.form = this.fb.group({
      RoleNames: ["", Validators.required],
    });
    
  }
  get f() { return this.form.controls; }
  tabchange(event: any) {
    this.tab = event;
  }
  async BindDropdown() {
    this.api.get('/RoleUI/RolesList').subscribe(
      data => {
        this.RoleList = [];
        this.RoleList = data;
      },
      error => { console.error(error); }
    );
  }

  onSubmit(formData: any) {
    this.submitted = true;
    if(this.form.invalid){
      this.dialog.alert("Please Select User type.....!!");
      document?.getElementById("RoleNames")?.focus();
      return;
    }else if(this.RoleUISelect.length<0){
      this.dialog.alert("Please add role UI detail.....!!");
      document?.getElementById("RoleUIDetail")?.focus();
      return;
    }else
    if(this.RoleUISelect.length>0){
      if(this.RoleUISelect.length>0){
        this.FinalRoleUISelect=[];
        this.FinalReportUISelect=[];
        console.log("ReportUISelect",this.ReportUISelect)
        this.RoleUISelect.forEach((element:any) => {
          const FinalRoledetail={
            "RoleUIID":element.RoleUIID,
            "RoleID":Number(formData.controls["RoleNames"].value),
            "UIMasterID":element.UIMasterID,
            "New_flg":element.New,
            "List_flg":element.List,
            "Edit_flg":element.Edit,
            "Delete_flg":element.Delete,
            "Print_flg":element.Print,
            "Export_flg":element.Export,
            
          }
          this.FinalRoleUISelect.push(FinalRoledetail)
        });
        this.ReportUISelect.forEach((element:any) => {
          const FinalReportUI={
            "isAssigned":element.isAssigned,
            "ReportID":element.ReportID          
          }
          this.FinalReportUISelect.push(FinalReportUI)
        });
        const FinalSave={
          "LTD_RolesUI":this.FinalRoleUISelect,
          "RoleID":Number(formData.controls["RoleNames"].value),
          "LTD_RoleReport":this.FinalReportUISelect,
          "CreatedBy":this.currentUser.userId
        }
        
        this.api.post('/RoleUI/RoleUI_Insert_Update', FinalSave).subscribe(
          data => {
            console.log("Finalsaves",data)
            this.dialog.alert(data.Table[0].message);
            this.OnResetActions();
          },
          error => { console.error(error); }
        );
      }
    }
  }
  OnResetActions(){
    this.form.controls["RoleNames"].setValue(0);
    this.RoleUISelect= [];
    this.FinalRoleUISelect= [];
    this.ReportUISelect= [];
    this.FinalReportUISelect= [];
  }
  GetRoleDetails(events: any) {
    const GetRoleData = {
      "RoleID": Number(events.target.value),
      "WarehouseID": this.currentUser.userId,
    }

    this.api.post('/RoleUI/RoleUI_Select', GetRoleData).subscribe(
      data => {
        this.RoleUISelect = [];
        this.RoleUISelect = data.Table;
        this.ReportUISelect = [];
        this.ReportUISelect = data.Table1;
        console.log("selecteddata",data)
      },
      error => { console.error(error); }
    );
  }
  //										
  RoleUISelectGridColumn: ColDef[] = [
    { field: 'RoleID', hide: true, filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'UIMasterID', hide: true, filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'GroupName', hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'DisplayName', hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'New', hide: false, width: 120, type: 'checkbox', cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params)},
    { field: 'List', hide: false, width: 120, type: 'checkbox', cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params)},
    { field: 'Edit', hide: false, width: 120, type: 'checkbox', cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params)},
    { field: 'Delete', hide: false, width: 120, type: 'checkbox', cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params)},
    { field: 'Print', hide: false, width: 120, type: 'checkbox', cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params)},
    { field: 'Export', hide: false, width: 120, type: 'checkbox', cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params) },
    { field: 'RoleUIID', hide: true },
  ];
  ReportUIGridColumn: ColDef[] = [
    { field: 'isAssigned', hide: false, width: 120, type: 'checkbox', cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params)},
    { field: 'ReportID', hide: true, filter: 'agTextColumnFilter', floatingFilter: true },
    { field: 'ReportName', hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
  ];
  checkBoxCellEditRenderer(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      // const rolesdata=this.RoleUISelect.filter((x:any)=>x.New==true)
      // console.log("RoleUISelect",rolesdata)     
      
    });

    return input;
  }
}
