import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { User } from '@core/authentication/interface';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn, MtxGridRowClassFormatter } from '@ng-matero/extensions';
import { DatePipe } from '@angular/common';
import { ColDef, GridApi } from 'ag-grid-community';
import { EmailScheduleActionBtnComponent } from './email-schedule-action-btn/email-schedule-action-btn.component';
@Component({
  selector: 'app-email-schedule',
  templateUrl: './email-schedule.component.html',
  styleUrls: ['./email-schedule.component.scss']
})
export class EmailScheduleComponent implements OnInit {
  private currentUser: User;
  form!: FormGroup;
  ReportNameList: any = [];
  ReportID: number = 0;
  CustomerID: number = 0;
  CustomerNameList: any = [];
  SelectedCustomerList: any = []
  WeekDayData: any = [];
  MonthData: any = [];
  EmailReportID: number = 0;
  EmailReportDID: number = 0;
  txtEmailSubject: string = "";
  txtEmailText: string = "";
  chk_Daily = false;
  chk_Onces = false;
  chk_weekly = false;
  chk_Monthly = false;
  weekday: string = "";
  Month_day: string = "";
  selectedTime: any = "";
  txtEmailReportName: string = "";
  
  tab = 1;
  EmailScheduleList: any = [];
  frameworkComponents: any;
  constructor(private api: ApiService, private fb: FormBuilder, private modalService: NgbModal, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: EmailScheduleActionBtnComponent,
    }
  }

  ngOnInit(): void {
    this.BindReportList();
    this.BindCustomerList();
    this.BindWeekMonth();
    this.BindEmailScheduleList();
  }
  async BindWeekMonth() {
    this.WeekDayData = [
      { weekday: 'Monday' },
      { weekday: 'Tuesday' },
      { weekday: 'Wednesday' },
      { weekday: 'Thursday' },
      { weekday: 'Friday' },
      { weekday: 'Saturday' },
      { weekday: 'Sunday' }
    ];
    for (let i = 1; i < 32; i++) {
      this.MonthData.push({ Monthday: i });
    }
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'hh:mm:ss')
    this.selectedTime = dateSendingToServer;
  }
  async BindReportList() {
    this.api.post('/EmailSchedule/Email_ReportList?Rid=' + this.ReportID).subscribe(
      data => {
        this.ReportNameList = [];
        this.ReportNameList = data;
      },
      error1 => {
        console.error(error1);
      }
    );
  }
  async BindCustomerList() {
    this.api.post('/EmailSchedule/Email_CustomerContractList?cid=' + this.CustomerID).subscribe(
      data => {
        this.CustomerNameList = [];
        this.CustomerNameList = data;
      },
      error1 => {
        console.error(error1);
      }
    );
  }
  async BindEmailScheduleList() {
    this.api.get('/EmailSchedule/EmailSchedule_List').subscribe(
      data => {
        console.log("MyList", data)
        this.EmailScheduleList = [];
        this.EmailScheduleList = data;
      },
      error1 => {
        console.error(error1);
      }
    );
  }
  OnSaveEmailSchedule() {
    const filterReportID = this.ReportNameList.filter((x: any) => x.Selected == true);

    if (filterReportID.length == 0) {
      alert("Please Select Report name........")
    } else
      if (this.txtEmailSubject == "") {
        alert("Please Enter Email Subject........")
        document?.getElementById("txtEmailSubject")?.focus();
      } else
        if (this.txtEmailText == "") {
          alert("Please Enter Email Text........")
          document?.getElementById("txtEmailText")?.focus();
        } else
          if (this.chk_Daily == false && this.chk_Onces == false && this.chk_weekly == false && this.chk_Monthly == false) {
            alert("Please Select Period........")
            document?.getElementById("chk_Daily")?.focus();
          } else
            if (this.chk_weekly == true && this.weekday == "") {
              alert("Please Select Week Day........")
              document?.getElementById("weekday")?.focus();
            } else
              if (this.chk_Monthly == true && this.Month_day == "") {
                alert("Please Select Month Day........")
                document?.getElementById("Month_day")?.focus();
              } else if (this.selectedTime == "") {
                alert("Please Select Reporting Time........")
                document?.getElementById("selectedTime")?.focus();
              } else {
                const SaveEmailsSched = {
                  "ReportID": filterReportID[0].ReportID,
                  "CustomerModel": this.SelectedCustomerList,
                  "Today": this.chk_Onces,
                  "Daily": this.chk_Daily,
                  "Weekly": this.chk_weekly,
                  "weekly_Day": this.weekday,
                  "Monthly": this.chk_Monthly,
                  "Monthaly_day": this.Month_day,
                  "EmailTime": this.selectedTime,
                  "EmailReportID": this.EmailReportID,
                  "EmailSubject": this.txtEmailSubject,
                  "EmailText": this.txtEmailText,
                  "WareHouseID": this.currentUser.warehouseId,
                  "EmailReportName": this.txtEmailReportName,
                  "CreatedBy": this.currentUser.userId,
                  "EmailReportDID": this.EmailReportDID
                };
                this.api.post('/EmailSchedule/Email_Report_insert', SaveEmailsSched).subscribe(
                  data => {
                    alert(data[0].message)
                    this.OnResetEmailSchedule();
                  },
                  error1 => {
                    console.error(error1);
                  }
                );
              }
  }
  OnResetEmailSchedule() {
    this.ReportID = 0;
    this.CustomerID = 0;  
    this.BindReportList();
    this.BindCustomerList();
    this.BindWeekMonth();
    this.chk_Onces = false;
    this.chk_Daily = false;
    this.chk_weekly = false;
    this.chk_Monthly = false;
    this.weekday = "";
    this.Month_day = "";
    this.EmailReportID = 0;
    this.EmailReportDID = 0;
    this.txtEmailSubject = "";
    this.txtEmailText = "";
    this.txtEmailReportName = "";

  }
  onSelectCustomers(changeData: any) {
    this.SelectedCustomerList = []
    const selectedCustomers = this.CustomerNameList.filter((x: any) => x.Select == true);
    selectedCustomers.forEach((element: any) => {
      this.SelectedCustomerList.push({
        "CustomerID": element.CustomerID
      })
    });
  }

  onSelectReports(SelectedReport: any) {
    this.ReportNameList.forEach((element1: any) => {
      if (element1.ReportID == SelectedReport.ReportID) {
        element1.Selected = true;
      } else {
        element1.Selected = false;
      }
    });
  }
  onSelectPeriod(PeriodName: any, controlname: any) {
    if (PeriodName == 'Daily') {
      this.chk_Daily = controlname;
      this.chk_Onces = false;
      this.chk_weekly = false;
      this.chk_Monthly = false;
    } else
      if (PeriodName == 'Today') {
        this.chk_Onces = controlname;
        this.chk_Daily = false;
        this.chk_weekly = false;
        this.chk_Monthly = false;
      } else
        if (PeriodName == 'Week') {
          this.chk_weekly = controlname;
          this.chk_Daily = false;
          this.chk_Onces = false;
          this.chk_Monthly = false;
        } else
          if (PeriodName == 'Month') {
            this.chk_Monthly = controlname;
            this.chk_Daily = false;
            this.chk_Onces = false;
            this.chk_weekly = false;
          } else {
            this.chk_Daily = false;
            this.chk_Onces = false;
            this.chk_weekly = false;
            this.chk_Monthly = false;
          }
  }
  OnEmailShecdEdit(event: any) {
    if (String(event.actions) == 'Delete') {
      if(window.confirm('Are sure you want to delete this item ?')){
        const deteleData={
        "reportID": 0,
        "today": true,
        "daily": true,
        "weekly": true,
        "weekly_Day": "string",
        "monthly": true,
        "monthaly_day": 0,
        "emailTime": "string",
        "emailReportID": event.rowData.EmailReportID,
        "emailSubject": "string",
        "emailText": "string",
        "wareHouseID": 0,
        "emailReportName": "string",
        "createdBy": 0,
        "emailReportDID":event.rowData.EmailReportDID
      }
      this.api.post('/EmailSchedule/EmailReport_Delete', deteleData).subscribe(
        data => {
          alert(data)
          this.tab=1;          
          this.BindEmailScheduleList();
        },
        error1 => {
          console.error(error1);
        });
       }
      
    } else if (String(event.actions) == 'Edit') {
      this.tab=0;
      console.log("Edit", event)
      this.ReportID = event.rowData.ReportID;
      this.CustomerID = event.rowData.CustomerID;      
      this.chk_Daily = event.rowData.Daily;
      this.chk_Onces = event.rowData.today;
      this.chk_weekly = event.rowData.Weekly;
      this.chk_Monthly = event.rowData.Monthly;
      this.BindReportList();
      this.BindCustomerList();
      this.EmailReportID= event.rowData.EmailReportID;
      this.EmailReportDID= event.rowData.EmailReportDID;
      this.txtEmailSubject= event.rowData.EmailSubject;
      this.txtEmailText= event.rowData.EmailText;

      this.weekday= event.rowData.Weekly_day;
      this.Month_day= event.rowData.Monthly_day;
      this.selectedTime= event.rowData.EmailTime;
      this.txtEmailReportName= event.rowData.EmailReportName;
    
    }
  }
  columnsEmailShedList: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 150,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnEmailShecdEdit.bind(this),

      }
    },
    { headerName: 'CustomerID', field: 'CustomerID', hide: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'CustomerName', field: 'CustomerName', filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'EmailReportID', field: 'EmailReportID', hide: true, minWidth: 80, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'EmailReportDID', field: 'EmailReportDID', hide: true, minWidth: 200, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'EmailReportName', field: 'EmailReportName', filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'ReportName', field: 'ReportName', filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'EmailSubject', field: 'EmailSubject', minWidth: 100, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'EmailText', field: 'EmailText', minWidth: 100, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'EmailTime', field: 'EmailTime', minWidth: 120, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'CreatedDate', field: 'CreatedDate', minWidth: 120, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'Daily', field: 'Daily', hide: true, minWidth: 200, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'Monthly', field: 'Monthly', hide: true, minWidth: 120, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'today', field: 'today', hide: true, minWidth: 120, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'Monthly_day', field: 'Monthly_day', hide: true, minWidth: 120, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'Weekly_day', field: 'Weekly_day', hide: true, minWidth: 120, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'ReportID', field: 'ReportID', hide: true, minWidth: 120, filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName: 'Weekly', field: 'Weekly', hide: true, minWidth: 120, filter: 'agTextColumnFilter', floatingFilter: true, },
  ];
}
