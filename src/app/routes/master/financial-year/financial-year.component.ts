import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { MtxDialog } from '@ng-matero/extensions';
import { ColDef } from 'ag-grid-community';
import { InwardActionButtonComponent } from 'app/routes/process/inward/inward-action-button/inward-action-button.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-financial-year',
  templateUrl: './financial-year.component.html',
  styleUrls: ['./financial-year.component.scss']
})
export class FinancialYearComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  currentUser: any;
  MyMenus: any;
  FinancialYearGridData:any=[];
  frameworkComponents: any;
  FinancialYearIDs:any=0;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
  }

  ngOnInit(): void {
    
    this.MyMenus = this.api.getCurrentMenusForButton("FinancialYear");
    this.currentUser = this.api.getCurrentUser();
    this.BindDropdown();
    this.currentUser = this.api.getCurrentUser();
    this.form = this.fb.group({
      txtFinancialYear: ["", Validators.required],
      dteFromDate: [null, Validators.required],
      dteToDate: [null, Validators.required],
      IsActive: [null, Validators.required],
    });
    
  }
  get f() { return this.form.controls; }
  onSubmit(Fromdata: any) {
    this.submitted=true;
    if (this.form.invalid) {
      return;
    } else {
      const SaveFinancialData = {
        "FinancialYearID":this.FinancialYearIDs,
        "FY_Name":Fromdata.controls["txtFinancialYear"].value,
        "StartDate":Fromdata.controls["dteFromDate"].value,
        "EndDate":Fromdata.controls["dteToDate"].value,
        "IsActive":Fromdata.controls["IsActive"].value,
        "WareHouseID":this.currentUser.warehouseId,
      }
      console.log("SavebankData=>", SaveFinancialData)
      this.api.post('/FinancialYear/FinancialYears_Insert', SaveFinancialData).subscribe(
        data => {
          this.dialog.alert(data[0]);
          this.OnResetActions();
        },
        error => { console.error(error); }
      );
    }
  }
  async BindDropdown() {
    this.api.get('/FinancialYear/Finacialyear_Select').subscribe(
      data => {
        this.FinancialYearGridData = [];
        this.FinancialYearGridData = data
      },
      error => { console.error(error); }
    );
  }
  FinancialYearGridcoloumn: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 80,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnFinancialYearActions.bind(this),
      }
    },
    { field: 'FinancialYearID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'FY_Name', hide: false, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'StartDate', hide: false, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'EndDate', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'IsActive', filter: "agTextColumnFilter", floatingFilter: true },
  ];

  OnFinancialYearActions(actionData: any) {
    
    if(actionData.actions=="Edit"){
      console.log("OnFinancialYearActions", actionData.rowData)
      this.FinancialYearIDs=actionData.rowData.FinancialYearID
      const Editdata={
        txtFinancialYear: actionData.rowData.FY_Name,
      dteFromDate:new DatePipe('en-US').transform(actionData.rowData.StartDate, 'yyyy-MM-dd'),
      dteToDate:new DatePipe('en-US').transform(actionData.rowData.EndDate, 'yyyy-MM-dd'),
      IsActive: actionData.rowData.IsActive,
      }
      this.form.setValue(Editdata);      
    }
  }

  OnResetActions(){
    this.FinancialYearIDs=0;
    this.form.reset();
    this.submitted=false;
    this.BindDropdown();
  }
}
