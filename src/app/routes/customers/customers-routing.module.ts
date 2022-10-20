import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';

const routes: Routes = [
  { path: 'customerMaster', component: CustomerMasterComponent },
  { path: 'CustomerView', component: CustomerViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
