import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { ApiService } from '@core';
import { SpecialRatesComponent } from '../special-rates.component';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-dropdown-grid-special-rates',
  templateUrl: './dropdown-grid-special-rates.component.html',
  styleUrls: ['./dropdown-grid-special-rates.component.scss']
})
export class DropdownGridSpecialRatesComponent implements ICellRendererAngularComp {
  params: any;
  label: string = '';
  billingCycleList:any;
  cellValue: number=0;
  nrSelect:number=0;
  agInit(params: any): void {
    // this.form = this.fb.group({
    //   cbbillingID:[0]
    // });

    this.params = params;
    this.label = this.params.label || null;
    this.api.get('/BillingCycles/BillingCycle_Select').subscribe(
      data => { this.billingCycleList = data; },
      error => { console.error(error); }
    );

    this.cellValue = this.getValueToDisplay(params);
    this.nrSelect=this.cellValue;
  }
  constructor(private api: ApiService,public SpecialRatesComponent:SpecialRatesComponent ){

  }
  refresh(params?: any): boolean {
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }

   getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
}

GetBillingID(selectData:any){
  
  this.params.data[this.params.colDef.field] = Number(selectData.target.value);
  console.log("this.params",this.params.data);
}
}
