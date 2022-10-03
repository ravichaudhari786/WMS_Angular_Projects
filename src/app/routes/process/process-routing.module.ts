import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InwardComponent } from './inward/inward.component'
import { DeliveryorderComponent } from './deliveryorder/deliveryorder.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { OutwardComponent } from './outward/outward.component';
import { ShiftingComponent } from './shifting/shifting.component';

const routes: Routes = [
  { path: 'inward', component: InwardComponent },
  { path: 'deliveryorder', component: DeliveryorderComponent },
  { path: 'dispatch', component: DispatchComponent },
  { path: 'dispatch', component: DispatchComponent },
  { path: 'outward', component: OutwardComponent },
  { path: 'shifting', component: ShiftingComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessRoutingModule { }
