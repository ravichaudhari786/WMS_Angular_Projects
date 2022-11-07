import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
<<<<<<< HEAD
import { AgGridModule } from 'ag-grid-angular';
import { CustomermastereditButtonComponent } from './customer-master/customermasteredit-button/customermasteredit-button.component';
@NgModule({
  declarations: [
    CustomerMasterComponent,
    CustomermastereditButtonComponent
  ],
  imports: [
    CommonModule,SharedModule,
    CustomersRoutingModule,AgGridModule
=======
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    CustomerMasterComponent,
    CustomerViewComponent
  ],
  imports: [
    CommonModule,SharedModule,
    CustomersRoutingModule,
    AgGridModule.withComponents([]),
>>>>>>> 58c1aeaef0d149c00a8bd087d43cc201efb0f070
  ]
})
export class CustomersModule { }
