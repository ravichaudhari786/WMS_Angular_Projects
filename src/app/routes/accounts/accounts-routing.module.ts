import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';

const routes: Routes = [
  { path: 'AdditionalServices', component: AdditionalServicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
