import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { BillProcessComponent } from './bill-process/bill-process.component';
const routes: Routes = [
  { path: 'AdditionalServices', component: AdditionalServicesComponent },
  { path: 'BillProcess', component: BillProcessComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
