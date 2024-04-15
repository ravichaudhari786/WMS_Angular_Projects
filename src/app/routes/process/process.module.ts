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
import { ShiftingeditButtonComponent } from './shifting/shiftingedit-button/shiftingedit-button.component';
import { TransferComponent } from './transfer/transfer.component';
import { OutwarddeletebuttonComponent } from './outward/outwarddeletebutton/outwarddeletebutton.component';
import { TransferdeletebuttonComponent } from './transfer/transferdeletebutton/transferdeletebutton.component';
import { DispatchdeletebuttonComponent } from './dispatch/dispatchdeletebutton/dispatchdeletebutton.component';
import { DeliveryorderactionButtonsComponent } from './deliveryorder/deliveryorderaction-buttons/deliveryorderaction-buttons.component';
import { InwardActionButtonComponent } from './inward/inward-action-button/inward-action-button.component';
import { InwardUpdateComponent } from './inward-update/inward-update.component';
import { OutwardUpdateComponent } from './outward-update/outward-update.component';
import { EditEntriesComponent } from './edit-entries/edit-entries.component';
import { StopDeliveryComponent } from './stop-delivery/stop-delivery.component';



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
    ShiftingComponent,
    ShiftingeditButtonComponent,
    TransferComponent,
    OutwarddeletebuttonComponent,
    TransferdeletebuttonComponent,
    DispatchdeletebuttonComponent,
    DeliveryorderactionButtonsComponent,
    InwardActionButtonComponent,
    InwardUpdateComponent,
    OutwardUpdateComponent,
    EditEntriesComponent,
    StopDeliveryComponent,
    
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
