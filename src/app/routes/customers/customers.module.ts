import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';


@NgModule({
  declarations: [
    CustomerMasterComponent,
    CustomerViewComponent
  ],
  imports: [
    CommonModule,SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
