import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { ColDef, GridApi, ICellRendererComp, KeyCreatorParams } from 'ag-grid-community';
import { User } from '@core/authentication/interface';
import { DatePipe } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  tab = 0;
  customerList:any;
  form!: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cbCustomerID: ['', Validators.required],
     
    });
    this.BindDropdown()
  }
  tabchange(event: any) {
    this.tab = event;
  }

  async BindDropdown() {
    this.api.get('/Customer').subscribe(
      data => { this.customerList = data },
      error => { console.error(error); }
    );
  }
}
