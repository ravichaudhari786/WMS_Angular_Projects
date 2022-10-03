import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { StorageAreaComponent } from './storage-area/storage-area.component';

const routes: Routes = [
  { path:"Storagearea", component: StorageAreaComponent},
  { path:"Company", component: CompanyComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
