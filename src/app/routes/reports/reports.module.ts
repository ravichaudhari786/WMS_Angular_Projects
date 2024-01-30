import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { LotsearchComponent } from './lotsearch/lotsearch.component';
import { SharedModule } from '@shared';
import { EmailScheduleComponent } from './email-schedule/email-schedule.component';
import { EmailScheduleActionBtnComponent } from './email-schedule/email-schedule-action-btn/email-schedule-action-btn.component';
import { BillEstimateComponent } from './bill-estimate/bill-estimate.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [ 
    LotsearchComponent, 
    EmailScheduleComponent, EmailScheduleActionBtnComponent, BillEstimateComponent, ReportComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,ReportsRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class ReportsModule { }
