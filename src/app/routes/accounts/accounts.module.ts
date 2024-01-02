import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '@shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { AdditionalServiceEditComponent } from './additional-services/additional-service-edit/additional-service-edit.component';
import { BillProcessComponent } from './bill-process/bill-process.component';


@NgModule({
  declarations: [
    AdditionalServicesComponent,
    AdditionalServiceEditComponent,
    BillProcessComponent
  ],
  imports: [
    CommonModule,SharedModule,
    AccountsRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class AccountsModule { }
