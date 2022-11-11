import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { ColDef, GridApi, ICellRendererComp, KeyCreatorParams, GridReadyEvent, } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { User } from '@core/authentication/interface';
import { jsPDF } from "jspdf";
import { DatePipe } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  tab = 0; gridApi!: GridApi;
  private currentUser: User;
  customerList: any; InwardData: any; PendingStockData: any; PendingDOData: any; ProductStockData: any;
  StorageStockData: any; DispatchData: any; OutwardData: any; LotNoData: any;
  form!: FormGroup; submitted = false; fileName = 'ExcelSheet.xlsx';

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog, private http: HttpClient) {
    this.currentUser = this.api.getCurrentUser();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      cbCustomerID: ['', Validators.required],
      Lotno: ['', Validators.required]
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
  get f() { return this.form.controls; }

  OnCustomerSelect(id: any) {

  
    const custData = {
      CustomerID: this.form.value.cbCustomerID,
      WarehouseID: this.currentUser.warehouseId,
      LotNo: "",
    };
    if(this.form.value.cbCustomerID==null || this.form.value.cbCustomerID==""){
      alert("Please .... Select Customer Name");
      document?.getElementById("cbCustomerID")?.focus();
      return;
    }else
    {
     

      this.api.post('/Customer/CustomerView_GetData', custData).subscribe(

        data => {
          console.log(data)
          this.InwardData = data.Table;
          this.PendingStockData = data.Table1;
          this.PendingDOData = data.Table2;
          this.ProductStockData = data.Table3;
          this.StorageStockData = data.Table4;
          this.DispatchData = data.Table7;
          this.OutwardData = data.Table5;
        },
        error => { console.error(error); }
      );
    
  }
}

  OnLotNoSelect(id: any) {
    const lotdata = {
      CustomerID: this.form.value.cbCustomerID,
      WarehouseID: this.currentUser.warehouseId,
      LotNo: this.form.value.Lotno,
    };


    this.api.post('/Customer/CustomerView_GetData', lotdata).subscribe(

      data => {
        this.LotNoData = data.Table6;

      },
      error => { console.error(error); }
    );
  }



  ExportExcel(): void {

    console.log(this.InwardData);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.InwardData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'ExportAllData_Ind.xlsx');

  }
  // onGridReady(params: GridReadyEvent) {
  //   this.gridApi = params.api;


  // }



  ExportPdf(): void {
    console.log(this.InwardData);
    const doc = new jsPDF(this.InwardData);
    // const source = document.getElementById("content");

    doc.save("abcd.pdf");


  }









  inwardDatadatacolumn: ColDef[] = [

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
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'PersonName',
      field: 'PersonName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },

    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'FirstLotNo',
      field: 'FirstLotNo',
      sortable: true,
      minWidth: 50,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'InQuantity',
      field: 'InQuantity',
      sortable: true,
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'PendingDO',
      field: 'PendingDO',
      sortable: true,
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Vehicle No',
      field: 'Vehicle No',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
  ]

  PendingStockDataColumn: ColDef[] = [

    {
      headerName: 'InwardDate',
      field: 'InwardDate',
      sortable: true,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ReceiptNo',
      field: 'ReceiptNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'PersonName',
      field: 'PersonName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },

    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'FirstLotNo',
      field: 'FirstLotNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'InQuantity',
      field: 'InQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'PendingDO',
      field: 'PendingDO',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },

  ]

  PendingDOColumn: ColDef[] = [

    {
      headerName: 'DeliveryOrderNo',
      field: 'DeliveryOrderNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'DeliveryOrderDate',
      field: 'DeliveryOrderDate',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OrderGivenBy',
      field: 'OrderGivenBy',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'DeliverTo',
      field: 'DeliverTo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ShippingAddress',
      field: 'ShippingAddress',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'FirstLotNo',
      field: 'FirstLotNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'InQuantity',
      field: 'InQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'PendingDO',
      field: 'PendingDO',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
  ]
  ProductStockDO: ColDef[] = [

    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },

  ]

  StorageStockColumn: ColDef[] = [

    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
  ]

  DispatchColumn: ColDef[] = [

    {
      headerName: 'DispatchDate',
      field: 'DispatchDate',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Deliver To',
      field: 'Deliver To',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OrderGivenBy',
      field: 'OrderGivenBy',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ShippingAddress',
      field: 'ShippingAddress',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Count',
      field: 'Count',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'DOQuantity',
      field: 'DOQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'DispatchQuantity',
      field: 'DispatchQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'StatusName',
      field: 'StatusName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
  ]


  OutWardColumn: ColDef[] = [

    {
      headerName: 'OutWardDate',
      field: 'OutWardDate',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OutWardNo',
      field: 'OutWardNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'DeliveryOrderDate',
      field: 'DeliveryOrderDate',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,

    },
    {
      headerName: 'DeliveryOrderNo',
      field: 'DeliveryOrderNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OrderGivenBy',
      field: 'OrderGivenBy',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'DeliverTo',
      field: 'DeliverTo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ShippingAddress',
      field: 'ShippingAddress',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'LotNo',
      field: 'LotNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'TruckNo',
      field: 'TruckNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ContainerNo',
      field: 'ContainerNo',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
  ]

  LotColumn: ColDef[] = [

    {
      headerName: 'TransactionDate',
      field: 'TransactionDate',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ProductName',
      field: 'ProductName',
      sortable: true,
      minWidth: 170,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BrandName',
      field: 'BrandName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'ProcessName',
      field: 'ProcessName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Counts',
      field: 'Counts',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'InQuantity',
      field: 'InQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'DOQuantity',
      field: 'DOQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },

  ]
}

