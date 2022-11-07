import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';


@NgModule({
  declarations: [
    AdditionalServicesComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
