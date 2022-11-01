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
  private currentUser: User;
  customerList: any; CustomerData: any;
  form!: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
  }

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
  OnCustomerSelect(id: any) {
    const custData = {
      CustomerID: this.form.value.cbCustomerID,
      WarehouseID: this.currentUser.warehouseId,
      LotNo: "",
    };

    this.api.post('/Customer/CustomerView_GetData', custData).subscribe(

      data => { this.CustomerData = data; console.log("customer data", data) },
      error => { console.error(error); }
    );
  }

  customerdatacolumn: ColDef[] = [

    {
      headerName: 'InwardDate',
      field: 'InwardDate',
      sortable: true,
      hide: true
    },
    {
      headerName: 'ReceiptNo',
      field: 'ReceiptNo',
      sortable: true,
      minWidth: 170,
    },
    {
      headerName: 'PersonName',
      field: 'PersonName',
      sortable: true,
      minWidth: 150,

    },
    {
      headerName: 'ParentCompanyID',
      field: 'ParentCompanyID',
      sortable: true,
      hide: true
    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'FirstLotNo',
      field: 'FirstLotNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'InQuantity',
      field: 'InQuantity',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'PendingDO',
      field: 'PendingDO',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'Vehicle No',
      field: 'Vehicle No',
      sortable: true,
      minWidth: 250,
    },
  ]

  PendingStockDataColumn: ColDef[] = [

    {
      headerName: 'InwardDate',
      field: 'InwardDate',
      sortable: true,

    },
    {
      headerName: 'ReceiptNo',
      field: 'ReceiptNo',
      sortable: true,
      minWidth: 170,
    },
    {
      headerName: 'PersonName',
      field: 'PersonName',
      sortable: true,
      minWidth: 150,

    },
    {
      headerName: 'ParentCompanyID',
      field: 'ParentCompanyID',
      sortable: true,

    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'FirstLotNo',
      field: 'FirstLotNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'InQuantity',
      field: 'InQuantity',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'PendingDO',
      field: 'PendingDO',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 250,
    },

  ]

  PendingDOColumn: ColDef[] = [

    {
      headerName: 'DeliveryOrderNo',
      field: 'DeliveryOrderNo',
      sortable: true,

    },
    {
      headerName: 'DeliveryOrderDate',
      field: 'DeliveryOrderDate',
      sortable: true,
      minWidth: 170,
    },
    {
      headerName: 'OrderGivenBy',
      field: 'OrderGivenBy',
      sortable: true,
      minWidth: 150,

    },
    {
      headerName: 'DeliverTo',
      field: 'DeliverTo',
      sortable: true,

    },
    {
      headerName: 'ShippingAddress',
      field: 'ShippingAddress',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'FirstLotNo',
      field: 'FirstLotNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'InQuantity',
      field: 'InQuantity',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'PendingDO',
      field: 'PendingDO',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 250,
    },
  ]
  ProductStockDO: ColDef[] = [

    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,

    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 170,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 150,

    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,

    },

  ]

  StorageStockColumn: ColDef[] = [

    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,

    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 170,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 150,

    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,

    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,

    },
  ]

  DispatchColumn: ColDef[] = [

    {
      headerName: 'DispatchDate',
      field: 'DispatchDate',
      sortable: true,

    },
    {
      headerName: 'Deliver To',
      field: 'Deliver To',
      sortable: true,
      minWidth: 170,
    },
    {
      headerName: 'OrderGivenBy',
      field: 'OrderGivenBy',
      sortable: true,
      minWidth: 150,

    },
    {
      headerName: 'ShippingAddress',
      field: 'ShippingAddress',
      sortable: true,

    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,

    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,

    },
    {
      headerName: 'Count',
      field: 'Count',
      sortable: true,

    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,

    },
    {
      headerName: 'DOQuantity',
      field: 'DOQuantity',
      sortable: true,

    },
    {
      headerName: 'DispatchQuantity',
      field: 'DispatchQuantity',
      sortable: true,

    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,

    },
    {
      headerName: 'StatusName',
      field: 'StatusName',
      sortable: true,

    },
  ]


  OutWardColumn: ColDef[] = [

    {
      headerName: 'OutWardDate',
      field: 'OutWardDate',
      sortable: true,

    },
    {
      headerName: 'OutWardNo',
      field: 'OutWardNo',
      sortable: true,
      minWidth: 170,
    },
    {
      headerName: 'DeliveryOrderDate',
      field: 'DeliveryOrderDate',
      sortable: true,
      minWidth: 150,

    },
    {
      headerName: 'DeliveryOrderNo',
      field: 'DeliveryOrderNo',
      sortable: true,

    },
    {
      headerName: 'OrderGivenBy',
      field: 'OrderGivenBy',
      sortable: true,

    },
    {
      headerName: 'DeliverTo',
      field: 'DeliverTo',
      sortable: true,

    },
    {
      headerName: 'ShippingAddress',
      field: 'ShippingAddress',
      sortable: true,

    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,

    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,

    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,

    },
    {
      headerName: 'TruckNo',
      field: 'TruckNo',
      sortable: true,

    },
    {
      headerName: 'ContainerNo',
      field: 'ContainerNo',
      sortable: true,

    },
  ]
}
