import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { CustomerUsersComponent } from './customer-users/customer-users.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';

const routes: Routes = [

  { path: 'customerMaster', component: CustomerMasterComponent },
  { path: 'CustomerView', component: CustomerViewComponent },
  { path: 'CustomerUsers', component: CustomerUsersComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
