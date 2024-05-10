import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { ColDef, GridApi, ICellRendererComp, KeyCreatorParams } from 'ag-grid-community';
import { User } from '@core/authentication/interface';
import { SpecialRatesEditButtonComponent } from './special-rates-edit-button/special-rates-edit-button.component';
import { DatePipe } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DropdownGridSpecialRatesComponent } from './dropdown-grid-special-rates/dropdown-grid-special-rates.component';
import { param } from 'jquery';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-special-rates',
  templateUrl: './special-rates.component.html',
  styleUrls: ['./special-rates.component.scss']
})
export class SpecialRatesComponent implements OnInit {
  form!: FormGroup; submitted = false; private currentUser: User;
  specialrateList: any; tab = 0; frameworkComponents: any;
  HideSaveButton = true; frameworkComponentscb: any
  todayDate: any; productdate: any;
  productList: any; customerList: any; billingCycleList: any;
  SpecialServiceList: Array<any> = []; ServiceDatasave: any = {};
  SpecialRateID: number = 0; TaxID: number = 0
  LTD_Customer: Array<any> = []; BillingCycleID: number = 0;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: SpecialRatesEditButtonComponent,
    }
    this.frameworkComponentscb = {
      comboxRender: DropdownGridSpecialRatesComponent,
    }
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss')
    this.todayDate = dateSendingToServer;
    this.productdate = new Date();//DatePipe('en-US');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      cbCustomerID: ['', Validators.required],
      cbProductID: ['', Validators.required],
      dtWefDate: ['', Validators.required],
    });

    this.BindDropdown()
    this.billingCycleList = [];

  }


  async BindDropdown() {
    this.api.get('/SpecialRates/SpecialRate_List').subscribe(
      data => { this.specialrateList = data; },
      error => { console.error(error); }
    );

    this.api.get('/ProductList').subscribe(
      data => { this.productList = data },
      error => { console.error(error); }
    );

    this.api.get('/Customer').subscribe(
      data => { this.customerList = data },
      error => { console.error(error); }
    );
    this.api.get('/BillingCycles/BillingCycle_Select').subscribe(
      data => { this.billingCycleList = data; },
      error => { console.error(error); }
    );
  }

  get f() { return this.form.controls; }

  tabchange(event: any) {
    this.tab = event;
  }
  OnProductSelect(id: any) {
    const serviceData = {
      SpecialRateID: 0,
      RateID: 0,
      ProductID: this.form.value.cbProductID,
      WarehouseID: 0,
      L_TD_Rate: [
        {
          ServiceID: 0,
          Rate: 0,
          L_Rate: 0,
          BillingCycleID: 0
        }
      ],
      TaxID: 0,
      CreatedBy: 0,
      CustomerID: this.form.value.cbCustomerID,
      wef: "",
    }
    //console.log(serviceData);

    this.api.post('/SpecialRates/SpecialRate_Services', serviceData).subscribe(
      data => {
        //console.log(data);
        if (data.Table.length == 0) {
          this.SpecialServiceList = data.Table1;
        } else {
          this.SpecialServiceList = data.Table;
        }
        // console.log(data.Table);
        // console.log(data.Table1);
      },
      error => { console.error(error); }
    );

  }

  onSubmit(formData: any) {
    // console.log(" this.SpecialServiceList", this.SpecialServiceList);
    //console.log(formData)
    this.submitted = true;
    if (this.form.invalid) {
      //this.dialog.alert("invalid form");
      return;
    }
    else {
      this.HideSaveButton = false;
      this.ServiceDatasave = {
        SpecialRateID: this.SpecialRateID,
        RateID: 2,
        ProductID: this.form.value.cbProductID,
        WarehouseID: this.currentUser.warehouseId,
        L_TD_Rate: this.SpecialServiceList,
        TaxID: this.TaxID,
        CreatedBy: this.currentUser.userId,
        CustomerID: this.form.value.cbCustomerID,
        wef: this.form.value.dtWefDate
      }
      //console.log(this.ServiceDatasave)
      this.api.post('/SpecialRates/SpecialRatelist_Insert', this.ServiceDatasave).subscribe(
        data => {

          this.dialog.alert(data.Table[0].message, '',);

          // this.ResetForm();
          this.BindDropdown();
          this.form.reset()

          this.form.controls['cbCustomerID'].setErrors(null);
          this.form.controls['cbProductID'].setErrors(null);
          const inwardeditedDate = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss');
          this.todayDate = inwardeditedDate;
          this.form.controls['dtWefDate'].setValue(this.todayDate);

          // window.location.reload();
        },
        error => { console.error(error); }
      );
    }

  }



  onEditSpecialRate(record: any) {
    //console.log(record.rowData)

    const item: any = {
      cbCustomerID: record.rowData.CustomerID,
      cbProductID: record.rowData.ProductID,
      dtWefDate: record.rowData.WefDate,
    };

    // this.SpecialServiceList
    this.form.setValue(item);
    const serviceData = {
      SpecialRateID: 0,
      RateID: 0,
      ProductID: record.rowData.ProductID,
      WarehouseID: 0,
      L_TD_Rate: [
        {
          ServiceID: 0,
          Rate: 0,
          L_Rate: 0,
          BillingCycleID: 0
        }
      ],
      TaxID: 0,
      CreatedBy: 0,
      CustomerID: record.rowData.CustomerID,
      wef: "",
    }
    //console.log("item", serviceData);
    this.api.post('/SpecialRates/SpecialRate_Services', serviceData).subscribe(
      data => {
        // console.log(data);
        if (data.Table.length == 0) {
          this.SpecialServiceList = data.Table1;
        } else {
          this.SpecialServiceList = data.Table;
        }
        // console.log(data.Table);
        // console.log(data.Table1);
      },
      error => { console.error(error); }
    );

  }


  SpecialRateColumn: ColDef[] = [

    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.onEditSpecialRate.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'SpecialRateID',
      field: 'SpecialRateID',

      hide: true
    },
    {
      headerName: 'RateDescription ',
      field: 'RateDescription',

      minWidth: 200,
    },
    {
      headerName: 'RateID',
      field: 'RateID',

      hide: true

    },
    {
      headerName: 'CustomerID',
      field: 'CustomerID',
      minWidth: 200,
      hide: true
    },
    {
      headerName: 'CustomerName',
      field: 'CustomerName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 200,
    },
    {
      headerName: 'ProductID',
      field: 'ProductID',
      minWidth: 170,
      hide: true
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 170,
    },

    {
      headerName: 'ServiceName',
      field: 'ServiceName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 170,
    },
    {
      headerName: 'TaxDescription',
      field: 'TaxDescription',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 200,
    },
    {
      headerName: 'BillingCyclesName',
      field: 'BillingCyclesName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 200,
    },
    {
      headerName: 'WefDate',
      field: 'WefDate',
      minWidth: 200,
    },
  ]

  ServicecolumnDefs: ColDef[] = [

    { headerName: 'ServiceID ', field: 'ServiceID ', hide: true, },
    { headerName: 'ServiceName', field: 'ServiceName', minWidth: 100, hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
    { headerName: 'ServiceType', field: 'ServiceType', minWidth: 50, hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
    {
      headerName: 'Rate', field: 'Rate', hide: false, minWidth: 50, cellEditorPopup: true, sort: "desc", filter: 'agNumberColumnFilter', floatingFilter: true,
      valueParser: "Number(newValue)", editable: true, cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: '#FF0000' };
        } else {
          return { color: 'black', backgroundColor: '#98FB98' };
        }
      }
    },
    {
      headerName: 'L_Rate', field: 'L_Rate', hide: false, minWidth: 50, cellEditorPopup: true, sort: "desc", filter: 'agNumberColumnFilter', floatingFilter: true,
      valueParser: "Number(newValue)", editable: true, cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: '#FF0000' };
        } else {
          return { color: 'black', backgroundColor: '#98FB98' };
        }
      }
    },
    // { headerName: 'BillingCycleID', field: 'BillingCycleID'},
    {
      headerName: 'BillingCycleID', field: 'BillingCycleID', minWidth: 50, cellRenderer: 'comboxRender',
      cellRendererParams: {

        //onClick: this.OnCancelledShifting.bind(this),
        label: 'Click 1'
      }

    }
  ];


}


