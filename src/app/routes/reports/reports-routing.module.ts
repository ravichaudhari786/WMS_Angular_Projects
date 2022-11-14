import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LotsearchComponent } from './lotsearch/lotsearch.component';

const routes: Routes = [
  {path:"lotsearch",component:LotsearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
