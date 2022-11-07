import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerMasterComponent } from './customer-master/customer-master.component';

import { AgGridModule } from 'ag-grid-angular';
import { CustomermastereditButtonComponent } from './customer-master/customermasteredit-button/customermasteredit-button.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';


@NgModule({
  declarations: [
    CustomerMasterComponent,
    CustomermastereditButtonComponent,
    CustomerMasterComponent,
    CustomerViewComponent,
  ],
  imports: [
    CommonModule,SharedModule,
    CustomersRoutingModule,AgGridModule,
    CommonModule,SharedModule,
    CustomersRoutingModule,
    AgGridModule.withComponents([]),




  ]
})
export class CustomersModule { }
