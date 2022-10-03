import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { InwardComponent } from './inward/inward.component';
import { ProcessRoutingModule } from './process-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { DeliveryorderComponent } from './deliveryorder/deliveryorder.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { OutwardComponent } from './outward/outward.component';
import { ShiftingComponent } from './shifting/shifting.component';

// import {
//   DxDataGridModule,
//   DxBulletModule,
//   DxTemplateModule,
// } from 'devextreme-angular';
@NgModule({
  declarations: [
    InwardComponent,
    DeliveryorderComponent,
    DispatchComponent,
    OutwardComponent,
    ShiftingComponent
  ],
  imports: [
    SharedModule,
    // DxDataGridModule,
    // DxTemplateModule,
    // DxBulletModule,
    MatDialogModule,
    ProcessRoutingModule,AgGridModule.withComponents([]),
  ]
})
export class ProcessModule { }
