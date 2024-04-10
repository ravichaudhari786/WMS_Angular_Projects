import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { MtxDialog } from '@ng-matero/extensions';
import { ColDef } from 'ag-grid-community';
import { InwardActionButtonComponent } from 'app/routes/process/inward/inward-action-button/inward-action-button.component';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  WarehouseList: any = [];
  ContractorList: any = [];
  BankAccountGridData: any = [];
  frameworkComponents: any;
  currentUser: any;
  MyMenus: any;
  BankAccountIDs: any = 0;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
  }

  ngOnInit(): void {
    this.MyMenus = this.api.getCurrentMenusForButton("BankAccountDetail");
    this.currentUser = this.api.getCurrentUser();
    this.BindDropdown();
    this.form = this.fb.group({
      txtBankName: ["", Validators.required],
      txtBranch: ["", Validators.required],
      txtAccountNo: ["", Validators.required],
      txtIFSCCode: ["", Validators.required],
      cbWarehouseID: [null, Validators.required],
      cbContractorName: [null, Validators.required],
    })
  }
  async BindDropdown() {
    this.api.get('/Users/Warehouse_List').subscribe(
      data => {
        this.WarehouseList = [];
        this.WarehouseList = data
      },
      error => { console.error(error); }
    );
    this.api.get('/LabourContracter').subscribe(
      data => {
        this.ContractorList = [];
        this.ContractorList = data
      },
      error => { console.error(error); }
    );
    this.api.get('/BankAccountDetail/BankAccountDetail_Select').subscribe(
      data => {
        console.log("data123", data)
        this.BankAccountGridData = [];
        this.BankAccountGridData = data
      },
      error => { console.error(error); }
    );

  }

  onSubmit(Fromdata: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      //console.log("Fromdata", Fromdata.controls)
      const SavebankData = {
        "BankAccountID": this.BankAccountIDs,
        "WarehouseID": Fromdata.controls["cbWarehouseID"].value,
        "LabourContractorID": Fromdata.controls["cbContractorName"].value,
        "BankName": Fromdata.controls["txtBankName"].value,
        "Branch": Fromdata.controls["txtBranch"].value,
        "AccountNo": Fromdata.controls["txtAccountNo"].value,
        "IFSCCode": Fromdata.controls["txtIFSCCode"].value,
        "CreatedBy": this.currentUser.userId
      }
      console.log("SavebankData=>", SavebankData)
      this.api.post('/BankAccountDetail/BankAccountDetail_insert', SavebankData).subscribe(
        data => {
          console.log(data[0])
          this.dialog.alert(data[0]);
          this.OnResetActions();
        },
        error => { console.error(error); }
      );
    }

  }
  OnResetActions() {
    this.submitted = false;
    this.BindDropdown()
    this.form.reset();
  }
  get f() { return this.form.controls; }

  BankAccountGridcoloumn: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 80,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnBankAccountActions.bind(this),
      }
    },

    { field: 'BankAccountID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'WareHouseID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'LabourContractorID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'BankName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Branch', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'AccountNo', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'IFSCCode', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'WareHouseName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ContractorName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CreatedDate', filter: "agTextColumnFilter", floatingFilter: true },
  ];
  OnBankAccountActions(Actiondata: any) {
    if (Actiondata.actions == "Edit") {
      this.BankAccountIDs = Actiondata.rowData.BankAccountID;
      const Editdata = {
        txtBankName: Actiondata.rowData.BankName,
        txtBranch: Actiondata.rowData.Branch,
        txtAccountNo: Actiondata.rowData.AccountNo,
        txtIFSCCode: Actiondata.rowData.IFSCCode,
        cbWarehouseID: Actiondata.rowData.WareHouseID,
        cbContractorName: Actiondata.rowData.LabourContractorID,
      }
      this.form.setValue(Editdata)

    }
  }
}
