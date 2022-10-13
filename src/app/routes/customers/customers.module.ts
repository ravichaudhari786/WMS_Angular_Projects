import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerMasterComponent } from './customer-master/customer-master.component';


@NgModule({
  declarations: [
    CustomerMasterComponent
  ],
  imports: [
    CommonModule,SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
