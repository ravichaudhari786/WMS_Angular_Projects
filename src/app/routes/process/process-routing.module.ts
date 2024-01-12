import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InwardComponent } from './inward/inward.component'
import { DeliveryorderComponent } from './deliveryorder/deliveryorder.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { OutwardComponent } from './outward/outward.component';
import { ShiftingComponent } from './shifting/shifting.component';
import {TransferComponent} from './transfer/transfer.component'
import { InwardUpdateComponent} from './inward-update/inward-update.component';
import { OutwardUpdateComponent } from './outward-update/outward-update.component';
import { EditEntriesComponent} from './edit-entries/edit-entries.component'
const routes: Routes = [
  { path: 'Inward', component: InwardComponent },
  { path: 'DeliveryOrder', component: DeliveryorderComponent },
  { path: 'EditEntries', component: EditEntriesComponent },
  { path: 'Dispatch', component: DispatchComponent },
  { path: 'Outward', component: OutwardComponent },
  { path: 'Shifting', component: ShiftingComponent },
  { path: 'Transfer', component: TransferComponent },
  { path: 'InwardUpdate', component: InwardUpdateComponent },
  { path: 'OutwardUpdate', component: OutwardUpdateComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessRoutingModule { }
