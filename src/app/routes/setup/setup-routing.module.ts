import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ServiceMasterComponent } from './service-master/service-master.component';
import { StorageAreaComponent } from './storage-area/storage-area.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  { path:"Storagearea", component: StorageAreaComponent},
  { path:"Company", component: CompanyComponent},

  { path:"Warehouse", component: WarehouseComponent},

  {path:"servicemaster",component:ServiceMasterComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
