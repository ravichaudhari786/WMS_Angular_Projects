import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { SetupRoutingModule } from './setup-routing.module';
import { StorageAreaComponent } from './storage-area/storage-area.component';
import { CompanyComponent } from './company/company.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { StorageAreaButtonComponent } from './storage-area/storage-area-button/storage-area-button.component';
import { CompanyEditButtonComponent } from './company/company-edit-button/company-edit-button.component';
import { WarehouseEditButtonComponent } from './warehouse/warehouse-edit-button/warehouse-edit-button.component';


@NgModule({
  declarations: [
    StorageAreaComponent,
    CompanyComponent,
    WarehouseComponent,
    StorageAreaButtonComponent,
    CompanyEditButtonComponent,
    WarehouseEditButtonComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SetupRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class SetupModule { }
