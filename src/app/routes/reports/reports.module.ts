import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { LotsearchComponent } from './lotsearch/lotsearch.component';
import { SharedModule } from '@shared';



@NgModule({
  declarations: [ 
    LotsearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,ReportsRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class ReportsModule { }
