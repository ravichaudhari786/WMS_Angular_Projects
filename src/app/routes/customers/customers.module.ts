import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerMasterComponent } from './customer-master/customer-master.component';

import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AgGridModule } from 'ag-grid-angular';
import { CustomerUsersComponent } from './customer-users/customer-users.component';
import { CustomeruserEditButtonComponent } from './customer-users/customeruser-edit-button/customeruser-edit-button.component';


@NgModule({
  declarations: [
    CustomerMasterComponent,
    CustomerViewComponent,
    CustomerUsersComponent,
    CustomeruserEditButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule,
    AgGridModule.withComponents([]),

  ]
})
export class CustomersModule { }
