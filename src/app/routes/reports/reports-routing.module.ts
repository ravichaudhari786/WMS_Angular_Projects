import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotSearchComponent } from './lot-search/lot-search.component';

const routes: Routes = [
  {path:"LotSearch",component:LotSearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
