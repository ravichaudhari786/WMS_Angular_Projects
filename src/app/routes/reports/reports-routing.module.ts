import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef,GridApi } from 'ag-grid-community';
import { LotsearchComponent } from './lotsearch/lotsearch.component';

const routes: Routes = [
  {path:"lotsearch",component:LotsearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
