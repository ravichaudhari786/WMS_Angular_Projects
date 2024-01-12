import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef,GridApi } from 'ag-grid-community';
import { LotsearchComponent } from './lotsearch/lotsearch.component';
import { EmailScheduleComponent } from './email-schedule/email-schedule.component';
import { BillEstimateComponent } from './bill-estimate/bill-estimate.component';
const routes: Routes = [
  {path:"lotsearch",component:LotsearchComponent},
  {path:"EmailSchedule",component:EmailScheduleComponent},
  {path:"Bill Estimate",component:BillEstimateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
