import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RateListComponent } from './rate-list/rate-list.component';
import { SpecialRatesComponent } from './special-rates/special-rates.component';
const routes: Routes = [
  { path: 'RateList', component: RateListComponent },
  { path: 'SpecialRates', component: SpecialRatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateManagementRoutingModule { }
