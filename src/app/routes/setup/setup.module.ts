import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { SetupRoutingModule } from './setup-routing.module';
import { StorageAreaComponent } from './storage-area/storage-area.component';
import { CompanyComponent } from './company/company.component';
<<<<<<< HEAD
import { WarehouseComponent } from './warehouse/warehouse.component';
import { StorageAreaButtonComponent } from './storage-area/storage-area-button/storage-area-button.component';
import { CompanyEditButtonComponent } from './company/company-edit-button/company-edit-button.component';
import { WarehouseEditButtonComponent } from './warehouse/warehouse-edit-button/warehouse-edit-button.component';
=======
import { ServiceMasterComponent } from './service-master/service-master.component';
>>>>>>> 93a8eae4f7a83844c86d2015b1366122e5713676


@NgModule({
  declarations: [
    StorageAreaComponent,
    CompanyComponent,
<<<<<<< HEAD
    WarehouseComponent,
    StorageAreaButtonComponent,
    CompanyEditButtonComponent,
    WarehouseEditButtonComponent
=======
    ServiceMasterComponent
>>>>>>> 93a8eae4f7a83844c86d2015b1366122e5713676
  ],
  imports: [
    SharedModule,
    CommonModule,
    SetupRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class SetupModule { }
