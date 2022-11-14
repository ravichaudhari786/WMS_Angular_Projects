import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';

import { LotsearchComponent } from './lotsearch/lotsearch.component';


@NgModule({
  declarations: [
 
    LotsearchComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
