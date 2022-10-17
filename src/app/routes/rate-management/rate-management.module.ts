import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { RateManagementRoutingModule } from './rate-management-routing.module';
import { RateListComponent } from './rate-list/rate-list.component';
import { RateListButtonComponent } from './rate-list/rate-list-button/rate-list-button.component';
import { SpecialRatesComponent } from './special-rates/special-rates.component';
import { SpecialRatesEditButtonComponent } from './special-rates/special-rates-edit-button/special-rates-edit-button.component';



@NgModule({
  declarations: [
    RateListComponent,
    RateListButtonComponent,
    SpecialRatesComponent,
    SpecialRatesEditButtonComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    RateManagementRoutingModule,
    MatDialogModule,
    AgGridModule.withComponents([]),
  ]
})
export class RateManagementModule { }
