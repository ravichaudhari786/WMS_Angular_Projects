import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { SetupRoutingModule } from './setup-routing.module';
import { StorageAreaComponent } from './storage-area/storage-area.component';
import { CompanyComponent } from './company/company.component';
import { ServiceMasterComponent } from './service-master/service-master.component';


@NgModule({
  declarations: [
    StorageAreaComponent,
    CompanyComponent,
    ServiceMasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SetupRoutingModule
  ]
})
export class SetupModule { }
