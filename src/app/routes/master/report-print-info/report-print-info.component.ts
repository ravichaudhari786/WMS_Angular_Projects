import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { MtxDialog } from '@ng-matero/extensions';
import { ColDef } from 'ag-grid-community';
import { InwardActionButtonComponent } from 'app/routes/process/inward/inward-action-button/inward-action-button.component';

@Component({
  selector: 'app-report-print-info',
  templateUrl: './report-print-info.component.html',
  styleUrls: ['./report-print-info.component.scss']
})
export class ReportPrintInfoComponent implements OnInit {
  OriantationData = [
    { "OriantationID": 1, "OriantationName": "Potrait" },
    { "OriantationID": 2, "OriantationName": "LandScape" }
  ];
  form!: FormGroup;
  tab = 0;
  submitted = false;
  ReportsList: any = [];
  PageSizesList: any = [];
  ReportPrintInfoList: any = [];
  frameworkComponents: any;
  currentUser: any;
  MyMenus: any;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
  }

  ngOnInit(): void {
    this.MyMenus = this.api.getCurrentMenusForButton("ReportPrintInfo");
    this.currentUser = this.api.getCurrentUser();
    this.BindDropdown();
    this.form = this.fb.group({
      cbReportID: [null, Validators.required],
      txtPrinterName: ["", Validators.required],
      cbPageSizeID: [null, Validators.required],
      cbOriantationID: [null, Validators.required],
      txtTopMargin: [0, Validators.required],
      txtLeftMargin: [0, Validators.required],
      txtBottomMargin: [0, Validators.required],
      txtRightMargin: [0, Validators.required],
    });
  }
  onSubmit(fromdata: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      const SaveData = {
        "ReportID": this.form.controls['cbReportID'].value,
        "PrinterName": this.form.controls['txtPrinterName'].value,
        "PageSize": this.form.controls['cbPageSizeID'].value,
        "Oriantation": this.form.controls['cbOriantationID'].value,
        "TopMargin": this.form.controls['txtTopMargin'].value,
        "LeftMargin": this.form.controls['txtLeftMargin'].value,
        "BottomMargin": this.form.controls['txtBottomMargin'].value,
        "RightMargin": this.form.controls['txtRightMargin'].value,
      }
      console.log("onSubmit", SaveData)
      this.api.post('/ReportPrintInfo/ReportPrint_InfoUpdate', SaveData).subscribe(
        data => {
          this.dialog.alert(data[0].message);
          this.OnResetActions();
        },
        error => { console.error(error); }
      );
    }

  }
  async BindDropdown() {
    this.api.get('/Report/GetReports').subscribe(
      data => {
        this.ReportsList = [];
        this.ReportsList = data;
      },
      error => { console.error(error); }
    );
    this.api.get('/ReportPrintInfo/PageSizes').subscribe(
      data => {
        this.PageSizesList = [];
        this.PageSizesList = data;
      },
      error => { console.error(error); }
    );

    this.api.get('/ReportPrintInfo/ReportPrintInfo_Select').subscribe(
      data => {
        this.ReportPrintInfoList = [];
        this.ReportPrintInfoList = data;
      },
      error => { console.error(error); }
    );
  }
  OnResetActions() {

    this.form.reset();
    this.submitted = false;
    this.BindDropdown();
  }
  get f() { return this.form.controls; }
  ReportPrintInfocolumns: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 90,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnReportPrintInfoActions.bind(this),
      }
    },
    { field: 'ReportID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ReportName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'PrinterName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'PageSize', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Oriantation', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'TopMargin', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'LeftMargin', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'BottomMargin', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'RightMargin', filter: "agTextColumnFilter", floatingFilter: true },
  ];
  OnReportPrintInfoActions(ActionData: any) {

    if (ActionData.actions == 'Edit') {
      const EditData = {
        "cbReportID": ActionData.rowData.ReportID,
        "txtPrinterName": ActionData.rowData.PrinterName,
        "cbPageSizeID": ActionData.rowData.PageSize,
        "cbOriantationID": ActionData.rowData.Oriantation,
        "txtTopMargin": ActionData.rowData.TopMargin,
        "txtLeftMargin": ActionData.rowData.LeftMargin,
        "txtBottomMargin": ActionData.rowData.BottomMargin,
        "txtRightMargin": ActionData.rowData.RightMargin,
      }
      console.log("OnReportPrintInfoActions", EditData);
      this.form.setValue(EditData);
    }
  }
}
