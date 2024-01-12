import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { BillprocessComponent } from './billprocess/billprocess.component';
const routes: Routes = [
  { path: 'AdditionalServices', component: AdditionalServicesComponent },
  { path: 'BillProcess', component: BillprocessComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
