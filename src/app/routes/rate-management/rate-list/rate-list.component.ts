import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { ColDef, GridApi } from 'ag-grid-community';
import { User } from '@core/authentication/interface';
import { RateListButtonComponent } from './rate-list-button/rate-list-button.component';
import { DropdownButtonRatelistComponent } from './dropdown-button-ratelist/dropdown-button-ratelist.component';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.scss']
})
export class RateListComponent implements OnInit {
  form!: FormGroup; submitted = false; DockList: any
  SaveData: any = {};
  frameworkComponents: any;
  private currentUser: User;
  dataSource = new MatTableDataSource<any>();
  tab = 0;
  UserID: any = 0;
  rateList: any; billingCycleList: any;
  HideSaveButton = true; ServiceDatasave: any = {};
  ratedetail: any; productList: any; RateServiceList: Array<any> = [];
  RateListID: number = 0;
  TaxID: number = 0
  LTD_Customer: Array<any> = [];
  RateID: number = 0;
  ProductID: number = 0; frameworkComponentscb: any
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: RateListButtonComponent,
    }
    this.frameworkComponentscb = {
      comboxRender: DropdownButtonRatelistComponent,
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      RateID: [null, Validators.required],
      ProductID: [null, Validators.required],
    });

    this.BindDropdown()
    this.billingCycleList = [];
  }

  async BindDropdown() {
    this.api.get('/Rate/RateList_Select').subscribe(
      data => { this.rateList = data, console.log("rateList", data) },
      error => { console.error(error); }
    );

    this.api.get('/RateMaster/Rate_Select').subscribe(
      data => { this.ratedetail = data; },
      error => { console.error(error); }
    );

    this.api.get('/ProductList').subscribe(
      data => { this.productList = data },
      error => { console.error(error); }
    );


  }

  get f() { return this.form.controls; }


  tabchange(event: any) {
    this.tab = event;
  }
  // onDOCellKeyPress(e:any){

  // }
  OnProductSelect(id: any) {
    const serviceData = {
      "SpecialRateID": 0,
      "RateID": this.form.value.RateID,
      "ProductID": this.form.value.ProductID,
      "WarehouseID": 0,
      "TaxID": 0,
    }
    this.api.post('/Rate/Rate_Services', serviceData).subscribe(
      data => {
        if (data.Table.length == 0) {
          this.RateServiceList = data.Table1;
        } else {
          this.RateServiceList = data.Table;
        }
        console.log(data.Table);
        console.log(data.Table1);
      },
      error => { console.error(error); }
    );

  }

  Customer() {
    const LTD_Customer = {
      "CustomerID": 0



    }

  }

  onSubmit(formData: any) {
    // console.log(this.RateServiceList);
    // console.log(formData)
    this.submitted = true;
    if (this.form.invalid) {
      //alert("invalid form");
      return;
    }
    else {
      this.HideSaveButton = false;
      this.ServiceDatasave = {
        RateListID: this.RateListID,
        RateID: this.form.value.RateID,
        ProductID: this.form.value.ProductID,
        WarehouseID: this.currentUser.warehouseId,
        LTD_Rate: this.RateServiceList,
        TaxID: this.TaxID,
        CreatedBy: this.currentUser.userId,
        LTD_Customer: this.LTD_Customer
      }

      console.log(this.ServiceDatasave);
      this.api.post('/Rate/Ratelist_Insert', this.ServiceDatasave).subscribe(
        data => {

          this.dialog.alert(data.Table[0].message, '',);

          // this.ResetForm();
          this.BindDropdown();
          this.form.reset()
          this.form.controls['RateID'].setErrors(null);
          this.form.controls['ProductID'].setErrors(null);
          // window.location.reload();
        },
        error => { console.error(error); }
      );
    }
  }

  onEditService(record: any) {
    console.log(record.rowData)

    //  this.RateID=record.RateID;
    // const RatedId = this.ratedetail.filter((x: any) => x.RateDescription == record.RateDescription);
    // const item: any = {
    //   RateID: record.RateID,
    //   BillingCyclesName: record.BillingCyclesName,
    //   L_Rate: record.L_Rate,
    //   ProductID: record.ProductID,
    //   ProductName: record.ProductName,
    //   Rate: record.Rate,
    //   RateDescription: record.RateDescription,
    //   RateListID: record.RateListID,
    //   ServiceName: record.ServiceName,
    //   TaxDescription: record.TaxDescription,

    // }
    // 

    // this.tab = 0;

    // const item: any = {
    //   RateID: record.RateID,
    //   BillingCyclesName: record.BillingCyclesName,
    //   L_Rate: record.L_Rate,
    //   ProductID: record.ProductID,
    //   ProductName: record.ProductName,
    //   Rate: record.Rate,
    //   RateDescription: record.RateDescription,
    //   RateListID: record.RateListID,
    //   ServiceName: record.ServiceName,
    //   TaxDescription: record.TaxDescription,

    // }

    const item: any = {
      RateID: Number(1),
      ProductID: record.rowData.ProductID
    }
    this.RateServiceList
    this.form.setValue(item);
    const serviceData = {
      "SpecialRateID": 0,
      "RateID": Number(1),
      "ProductID": record.rowData.ProductID,
      "WarehouseID": 0,
      "TaxID": 0,
    }
    this.api.post('/Rate/Rate_Services', serviceData).subscribe(
      data => {//
        if (data.Table.length == 0) {
          this.RateServiceList = data.Table1;
        } else {
          this.RateServiceList = data.Table;
        }
        console.log(data.Table);
        console.log(data.Table1);
      },
      error => { console.error(error); }
    );
  }


  RateColumn: ColDef[] = [

    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.onEditService.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'RateListID',
      field: 'RateListID',

      hide: true
    },
    {
      headerName: 'RateDescription',
      field: 'RateDescription',

      minWidth: 200,
    },
    {
      headerName: 'ProductID',
      field: 'ProductID',

      hide: true

    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 200,

    },
    {
      headerName: 'ServiceName',
      field: 'ServiceName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 200,
    },
    {
      headerName: 'Rate',
      field: 'Rate',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 170,
    },
    {
      headerName: 'L_Rate',
      field: 'L_Rate',
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
      headerName: 'BillingCyclesName ',
      field: 'BillingCyclesName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 170,
    }
  ]



  ServicecolumnDefs: ColDef[] = [

    { headerName: 'ServiceID ', field: 'ServiceID ', hide: true, },
    { headerName: 'ServiceName', field: 'ServiceName', hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
    { headerName: 'ServiceType', field: 'ServiceType', hide: false, filter: 'agTextColumnFilter', floatingFilter: true },
    {
      headerName: 'Rate', field: 'Rate', hide: false, cellEditorPopup: true, sort: "desc", filter: 'agNumberColumnFilter', floatingFilter: true,
      valueParser: "Number(newValue)", editable: true, cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: '#FF0000' };
        } else {
          return { color: 'black', backgroundColor: '#98FB98' };
        }
      }
    },
    {
      headerName: 'L_Rate', field: 'L_Rate', hide: false, cellEditorPopup: true, sort: "desc", filter: 'agNumberColumnFilter', floatingFilter: true,
      valueParser: "Number(newValue)", editable: true, cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: '#FF0000' };
        } else {
          return { color: 'black', backgroundColor: '#98FB98' };
        }
      }
    },
    {
      headerName: 'BillingCycleID', field: 'BillingCycleID', minWidth: 50, cellRenderer: 'comboxRender',
      cellRendererParams: {

        //onClick: this.OnCancelledShifting.bind(this),
        label: 'Click 1'
      }

    }
  ];



  // RateColumn: MtxGridColumn[] = [
  //   {
  //     header: "Action",
  //     field: 'Action',
  //     minWidth: 90,
  //     width: '90px',
  //     pinned: 'right',

  //     type: 'button',
  //     buttons: [
  //       {
  //         type: 'icon',
  //         icon: 'edit',
  //         tooltip: 'Edit',
  //         click: record => this.editProduct(record),
  //       }
  //     ]
  //   },
  //   {
  //     header: 'RateListID',
  //     field: 'RateListID',
  //     sortable: true,
  //     hide: true
  //   },
  //   {
  //     header: 'RateDescription ',
  //     field: 'RateDescription ',
  //     sortable: true,
  //     minWidth: 200,
  //   },
  //   {
  //     header: 'ProductID ',
  //     field: 'ProductID ',
  //     sortable: true,
  //     hide: true

  //   },
  //   {
  //     header: 'ProductName ',
  //     field: 'ProductName ',
  //     sortable: true,
  //     minWidth: 200,

  //   },
  //   {
  //     header: 'ServiceName ',
  //     field: 'ServiceName ',
  //     sortable: true,
  //     minWidth: 200,
  //   },
  //   {
  //     header: 'Rate ',
  //     field: 'Rate ',
  //     sortable: true,
  //     minWidth: 170,
  //   },
  //   {
  //     header: 'L_Rate ',
  //     field: 'L_Rate ',
  //     sortable: true,
  //     minWidth: 170,
  //   },
  //   {
  //     header: 'TaxDescription ',
  //     field: 'TaxDescription ',
  //     sortable: true,
  //     minWidth: 200,
  //   },
  //   {
  //     header: 'BillingCyclesName  ',
  //     field: 'BillingCyclesName  ',
  //     sortable: true,
  //     minWidth: 170,
  //   }
  // ]

}
