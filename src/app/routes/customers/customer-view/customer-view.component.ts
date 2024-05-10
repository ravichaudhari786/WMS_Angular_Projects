import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { MatPaginator } from '@angular/material/paginator';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Callbacks } from 'jquery';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  LoadingLoader = false;
  displayedColumns: string[] = []
  tab = 0; gridApi!: GridApi;
  currentTab: any;
  private currentUser: User;
  customerList: any;
  InwardData: any = []; PendingStockData: any = []; PendingDOData: any = []; ProductStockData: any = [];
  StorageStockData: any = []; DispatchData: any = []; OutwardData: any = []; LotNoData: any = [];
  form!: FormGroup; submitted = false; fileName = 'ExcelSheet.xlsx';
  tabname: any = "Inward";
  pdfFilesNames: any = "";
  htmlID: any = "Inward_ID";
  allPrintdata: any = [];
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog, private http: HttpClient, private modalService: NgbModal) {
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
    this.tabname = event.tab.textLabel;
    console.log("Tab=>", event.index)
    if (event.tab.textLabel != "") {
      this.currentTab = event.index;
    }
    this.tab = event.index;
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
    if (this.form.value.cbCustomerID == null || this.form.value.cbCustomerID == "") {
      this.dialog.alert("Please .... Select Customer Name");
      document?.getElementById("cbCustomerID")?.focus();
      return;
    } else {

      this.api.post('/Customer/CustomerView_GetData', custData).subscribe(
        data => {
          //debugger;
          console.log(data)
          this.InwardData = data.Table;
          this.PendingStockData = data.Table1;
          this.PendingDOData = data.Table2;
          this.ProductStockData = data.Table3;
          this.StorageStockData = data.Table4;
          this.DispatchData = data.Table7;
          this.OutwardData = data.Table5;

          this.allPrintdata = [];
          this.displayedColumns = [];
          this.allPrintdata = this.InwardData;
          this.htmlID = "Inward_ID"

          let row = this.allPrintdata[0];
          for (let key of Object.keys(row)) {
            this.displayedColumns.push(key);
          }
          console.log("Ag Column",this.inwardDatadatacolumn)
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
    if (this.tabname == "Inward") {
      this.allPrintdata = [];
      this.allPrintdata = this.InwardData;
    } else if (this.tabname == "Pending Stock") {
      this.allPrintdata = [];
      this.allPrintdata = this.PendingStockData;
    } else if (this.tabname == "Pending DO") {
      this.allPrintdata = [];
      this.allPrintdata = this.PendingDOData;
    } else if (this.tabname == "Product Stock") {
      this.allPrintdata = [];
      this.allPrintdata = this.ProductStockData;
    } else if (this.tabname == "Storage Stock") {
      this.allPrintdata = [];
      this.allPrintdata = this.StorageStockData;
    } else if (this.tabname == "Dispatch") {
      this.allPrintdata = [];
      this.allPrintdata = this.DispatchData;
    } else if (this.tabname == "Outward") {
      this.allPrintdata = [];
      this.allPrintdata = this.OutwardData;
    } else if (this.tabname == "LotNoTrack") {
      this.allPrintdata = [];
      this.allPrintdata = this.LotNoData;
    }

    if (this.allPrintdata.length > 0) {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.allPrintdata);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      const FilesNames = this.tabname.replace(/\s/g, '') + '.xlsx'
      XLSX.writeFile(wb, String(FilesNames));
    } else {
      this.dialog.alert("Data not found ..........")
    }

  }
  CreatePDFWithImage() {
    
    html2canvas(this.screen.nativeElement).then(canvas => {
      try {
        var contentH = $(this.screen.nativeElement).height();
        var img = canvas.toDataURL("image/png", 1.0);
        var w = canvas.width;
        var actw = canvas.width;
        var h = canvas.height;
        var acth = canvas.height;
        var pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.width;
        var maxw = pdf.internal.pageSize.width;
        var height = pdf.internal.pageSize.height;
        var maxh = pdf.internal.pageSize.height;
        if (!maxw) maxw = width;
        if (!maxh) maxh = height;

        if (w > maxw) {
          w = maxw;
          h = Math.round(acth / actw * maxw);
        }
        pdf.addImage(img, 'JPEG', 0, 0, w, h);
        var count = Math.ceil(h) / Math.ceil(maxh);
        count = Math.ceil(count)-1;
        for (var i = 1; i <= count; i++) {
          var position = - maxh * i
          //this.dialog.alert(position);
          pdf.addPage();
          pdf.addImage(img, 'JPEG', 0, position, w, h);
        }
        pdf.save(String(this.pdfFilesNames));
        this.tab = this.currentTab;
        this.LoadingLoader = false;
      } catch (e: any) {
        this.dialog.alert("Error description: " + e.message);
      }
    });
  }

  ExportPdf() {
    this.LoadingLoader = true;
    if (this.tabname == "Inward") {
      this.allPrintdata = [];
      this.displayedColumns = [];
      this.allPrintdata = this.InwardData;
      this.htmlID = "Inward_ID";
      this.tab = 8;
      this.pdfFilesNames = this.tabname.replace(/\s/g, '') + '.pdf'
    } else if (this.tabname == "Pending Stock") {
      this.allPrintdata = [];
      this.displayedColumns = [];
      this.allPrintdata = this.PendingStockData;
      this.htmlID = "PendingStock_ID"
      this.tab = 8;
      this.pdfFilesNames = this.tabname.replace(/\s/g, '') + '.pdf'
    } else if (this.tabname == "Pending DO") {
      this.allPrintdata = [];
      this.displayedColumns = [];
      this.allPrintdata = this.PendingDOData;
      this.htmlID = "PendingDO_ID"
      this.tab = 8;
      this.pdfFilesNames = this.tabname.replace(/\s/g, '') + '.pdf'
    } else if (this.tabname == "Product Stock") {
      this.allPrintdata = [];
      this.displayedColumns = [];
      this.allPrintdata = this.ProductStockData;
      this.htmlID = "ProductStock_ID"
      this.tab = 8;
      this.pdfFilesNames = this.tabname.replace(/\s/g, '') + '.pdf'
    } else if (this.tabname == "Storage Stock") {
      this.allPrintdata = [];
      this.displayedColumns = [];
      this.allPrintdata = this.StorageStockData;
      this.htmlID = "StorageStock_ID"
      this.tab = 8;
      this.pdfFilesNames = this.tabname.replace(/\s/g, '') + '.pdf'
    } else if (this.tabname == "Dispatch") {
      this.allPrintdata = [];
      this.displayedColumns = [];
      this.allPrintdata = this.DispatchData;
      this.htmlID = "Dispatch_ID"
      this.tab = 8;
      this.pdfFilesNames = this.tabname.replace(/\s/g, '') + '.pdf'
    } else if (this.tabname == "Outward") {
      this.allPrintdata = [];
      this.displayedColumns = [];
      this.allPrintdata = this.OutwardData;
      this.htmlID = "Outward_ID"
      this.tab = 8;
      this.pdfFilesNames = this.tabname.replace(/\s/g, '') + '.pdf'
    } else if (this.tabname == "LotNoTrack") {
      this.allPrintdata = [];
      this.displayedColumns = [];
      this.allPrintdata = this.LotNoData;
      this.htmlID = "LotNoSearch_ID"
      this.tab = 8;
      this.pdfFilesNames = this.tabname.replace(/\s/g, '') + '.pdf'
    }

    if (this.allPrintdata.length > 0) {
      let row = this.allPrintdata[0];
      for (let key of Object.keys(row)) {
        this.displayedColumns.push(key);
      }
      //this.CreatePDFWithImage()
      //this.modalService.open(Printingcontent);
      //this.modalService.open(Printingcontent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
      //this.MyFunction();

      //   this.modalService.open(Printingcontent)
      setTimeout(async () => {
        this.CreatePDFWithImage()
      }, 5000);
    }
    else {
      this.dialog.alert("Data not found ..........")
      this.LoadingLoader = false;
    }
  }

  setHeader(title: any, index: any) {
    return title;
  }

  setData(data: any, title: any) {
    return data;
  }
  inwardDatadatacolumn: ColDef[] = [{
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

