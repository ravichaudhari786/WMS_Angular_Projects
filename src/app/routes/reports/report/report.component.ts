import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '@core';
import { ColDef, GridApi } from 'ag-grid-community';
import { User } from '@core/authentication/interface';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { ICellRendererComp, KeyCreatorParams, GridReadyEvent, } from 'ag-grid-community';

import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//import { DxReportViewerModule } from 'devexpress-reporting-angular';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  private currentUser: User;
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  tab = 0;
  codeValue: any;
  displayedColumns: string[] = []
  CommanColumns: ColDef[] = [{
    field: 'field',
    filter: "agTextColumnFilter",
    floatingFilter: true,
    headerName: 'headerName',
    sortable: true,
  }]
  CommanData: any = []
  columnsToDisplay: string[] = []
  hidePDFTab = false;
  displayedData: any = [];
  ReportsName: any = [];
  ReportnameModel: any = "";
  guest: any;
  InvoiceType: any = [];
  InvoiceTypeModel: string = '';

  StorageAreas: any = [];
  StorageAreasModel: string = '';
  SelectedStorageAreas: any = [];

  BrandList: any = [];
  BrandListModel: string = '';
  SelectedBrand: any = [];

  CustomersList: any = [];
  CustomersListModel: string = '';
  SelectedCustomers: any = [];

  LabourContractorList: any = [];
  LabourContractorListModel: string = '';
  SelectedLabourContractor: any = [];

  CustomerGroupList: any = [];
  CustomerGroupListModel: string = '';
  SelectedCustomerGroup: any = [];

  UserNameList: any = [];
  UserNameListModel: string = '';
  SelectedUserName: any = [];

  ProductsList: any = [];
  ProductsListModel: string = '';
  SelectedProducts: any = [];

  dtStartDate: any;
  dtEndDate: any;
  dtAsOnDate: any;
  txtLotNumber: any = "";
  commandata: any = []

  P_AsOnDate: any = false
  P_Brand: any = false
  P_Customer: any = false
  P_CustomerGroup: any = false
  P_FromAndToDate: any = false
  P_InvoiceType: any = false
  P_LabourContractors: any = false
  P_LotNo: any = false
  P_Product: any = false
  P_StorageArea: any = false
  P_UserName: any = false
  PrintReport: any = false
  ReportNames: any = ""
  ReportType: any = "Report";
  SPName: any = "";
  constructor(private api: ApiService) {
    this.currentUser = this.api.getCurrentUser();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.dtStartDate = dateSendingToServer;
    this.dtEndDate = dateSendingToServer;
    this.dtAsOnDate = dateSendingToServer;
  }

  ngOnInit(): void {
    this.commandata = {
      "CustomerID": 0,
      "WarehouseID": this.currentUser.warehouseId,
      "LotNo": ""
    };
    this.BindReportList()
  }
  async BindReportList() {

    //--------------------User Name
    this.api.get('/Report/GetAllUserNames').subscribe(
      data => {
        this.UserNameList = [];
        data.forEach((element: any) => {
          this.UserNameList.push({
            "selected": false,
            "UserID": element.UserID,
            "UserName": element.UserName,
          })
        });
        //console.log("this.UserNameList", data)
      },
      error1 => { console.log(error1); }
    );
    //-------------------------Reports
    this.api.get('/Report/GetReports').subscribe(
      data => {
        this.ReportsName = [];
        this.ReportsName = data;
      },
      error1 => { console.log(error1); }
    );
    //-------------------------Invoie Type
    this.api.get('/Report/GetInvoiceType').subscribe(
      data => {
        this.InvoiceType = [];
        this.InvoiceType = data;
        this.ReportnameModel = "";
      },
      error1 => { console.log(error1); }
    );
    //-------------------------Brand
    this.api.get('/Report/GetAllBrands').subscribe(
      data => {
        this.BrandList = [];
        data.forEach((element: any) => {
          this.BrandList.push({
            "selected": false,
            "BrandID": element.BrandID,
            "BrandName": element.BrandName,
          })
        });
        //console.log("this.BrandList", this.BrandList)
      },
      error1 => { console.log(error1); }
    );
    //--------------------StorageArea
    this.api.get('/Report/GetAllStorageArea').subscribe(
      data => {
        this.StorageAreas = [];
        data.forEach((element: any) => {
          this.StorageAreas.push({
            "selected": false,
            "StorageAreaID": element.StorageAreaID,
            "StorageArea": element.StorageArea,
          })
        });
        //console.log("this.StorageAreas", this.StorageAreas)
      },
      error1 => { console.log(error1); }
    );
    //--------------------CustomerName

    this.api.post('/Report/GetCustomerName', this.commandata).subscribe(
      data => {
        this.CustomersList = [];
        data.forEach((element: any) => {
          this.CustomersList.push({
            "selected": false,
            "CustomerID": element.CustomerID,
            "CustomerName": element.CustomerName,
          })
        });
        //console.log("this.CustomersList", this.CustomersList)
      },
      error1 => { console.log(error1); }
    );
    //--------------------Labour Contractor
    this.api.get('/Report/GetAllLabourContractor').subscribe(
      data => {
        this.LabourContractorList = [];
        data.forEach((element: any) => {
          this.LabourContractorList.push({
            "selected": false,
            "LabourContractorID": element.LabourContractorID,
            "ContractorName": element.ContractorName,
          })
        });
        //console.log("this.LabourContractorList", this.LabourContractorList)
      },
      error1 => { console.log(error1); }
    );
    //--------------------Customer Group
    this.api.post('/Report/AllCustomerGroup', this.commandata).subscribe(
      data => {
        this.CustomerGroupList = [];
        data.forEach((element: any) => {
          this.CustomerGroupList.push({
            "selected": false,
            "GroupName": element.GroupName,
          })
        });
        //console.log("this.GroupNameList", this.CustomerGroupList)
      },
      error1 => { console.log(error1); }
    );
    //--------------------User Name
    this.api.get('/Report/GetAllProducts').subscribe(
      data => {
        this.ProductsList = [];
        data.forEach((element: any) => {
          this.ProductsList.push({
            "selected": false,
            "ProductID": element.ProductID,
            "ProductName": element.ProductName,
          })
        });
        //console.log("this.ProductsList", data)
      },
      error1 => { console.log(error1); }
    );
  }


  /////========================StorageAreaListColumns
  StorageAreaListColumns: ColDef[] = [
    {
      type: 'checkbox',
      field: 'selected',
      filter: 'agTextColumnFilter', floatingFilter: false,
      cellRenderer: (params: any) => this.checkBoxCellBrands(params), width: 25
    },
    { field: 'StorageAreaID', filter: 'agTextColumnFilter', floatingFilter: false, hide: true, },
    { field: 'StorageArea', hide: false, resizable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  ];
  checkBoxCellBrands(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.SelectedStorageAreas = [];
      const selectedCustomers = this.StorageAreas.filter((x: any) => x.selected == true);
      selectedCustomers.forEach((element: any) => {
        this.SelectedStorageAreas.push({
          "StorageAreaID": element.StorageAreaID,
        })
      });
      console.log("SelectedStorageAreas", this.SelectedStorageAreas);
    });
    return input;
  }

  //============Brand 
  BrandListColumns: ColDef[] = [
    {
      type: 'checkbox',
      field: 'selected',
      filter: 'agTextColumnFilter', floatingFilter: false,
      cellRenderer: (params: any) => this.checkBoxCellStorageArea(params), width: 25
    },
    { field: 'BrandID', filter: 'agTextColumnFilter', floatingFilter: false, hide: true, },
    { field: 'BrandName', hide: false, resizable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  ];
  checkBoxCellStorageArea(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.SelectedBrand = [];
      const selectedbrands = this.BrandList.filter((x: any) => x.selected == true);
      selectedbrands.forEach((element: any) => {
        this.SelectedBrand.push({
          "BrandID": element.BrandID,
        })
      });
      console.log("SelectedBrand", this.SelectedBrand);
    });
    return input;
  }

  //============Customers 
  CustomersListColumns: ColDef[] = [
    {
      type: 'checkbox',
      field: 'selected',
      filter: 'agTextColumnFilter', floatingFilter: false,
      cellRenderer: (params: any) => this.checkBoxCellCustomers(params), width: 25
    },
    { field: 'CustomerID', filter: 'agTextColumnFilter', floatingFilter: false, hide: true, },
    { field: 'CustomerName', hide: false, resizable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  ];
  checkBoxCellCustomers(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.SelectedCustomers = [];
      const selectedCust = this.CustomersList.filter((x: any) => x.selected == true);
      selectedCust.forEach((element: any) => {
        this.SelectedCustomers.push({
          "CustomerID": element.CustomerID,
        })
      });
      console.log("SelectedCustomers", this.SelectedCustomers);
    });
    return input;
  }

  //============Labour Contractor 
  LabourContractorListColumns: ColDef[] = [
    {
      type: 'checkbox',
      field: 'selected',
      filter: 'agTextColumnFilter', floatingFilter: false,
      cellRenderer: (params: any) => this.checkBoxCellLabourContractor(params), width: 25
    },
    { field: 'LabourContractorID', filter: 'agTextColumnFilter', floatingFilter: false, hide: true, },
    { headerName: 'Labour Contractor', field: 'ContractorName', hide: false, resizable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  ];
  checkBoxCellLabourContractor(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.SelectedLabourContractor = [];
      const SelectedLabourContr = this.LabourContractorList.filter((x: any) => x.selected == true);
      SelectedLabourContr.forEach((element: any) => {
        this.SelectedLabourContractor.push({
          "LabourContractorID": element.LabourContractorID,
        })
      });
      console.log("SelectedLabourContractor", this.SelectedLabourContractor);
    });
    return input;
  }

  //============Customer Group
  CustomerGroupListColumns: ColDef[] = [
    {
      type: 'checkbox',
      field: 'selected',
      filter: 'agTextColumnFilter', floatingFilter: false,
      cellRenderer: (params: any) => this.checkBoxCellCustomerGroup(params), width: 25
    },
    { headerName: "Customer Group", field: 'GroupName', hide: false, resizable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  ];
  checkBoxCellCustomerGroup(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.SelectedCustomerGroup = [];
      const SelectedCustGroup = this.CustomerGroupList.filter((x: any) => x.selected == true);
      SelectedCustGroup.forEach((element: any) => {
        this.SelectedCustomerGroup.push({
          "GroupName": element.GroupName,
        })
      });
      console.log("SelectedCustomerGroup", this.SelectedCustomerGroup);
    });
    return input;
  }
  //============User
  UserNameListColumns: ColDef[] = [
    {
      type: 'checkbox',
      field: 'selected',
      filter: 'agTextColumnFilter', floatingFilter: false,
      cellRenderer: (params: any) => this.checkBoxCellUser(params), width: 25
    },
    { field: 'UserID', filter: 'agTextColumnFilter', floatingFilter: false, hide: true, },
    { field: 'UserName', hide: false, resizable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  ];
  checkBoxCellUser(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.SelectedUserName = [];
      const SelectedLabourContr = this.UserNameList.filter((x: any) => x.selected == true);
      SelectedLabourContr.forEach((element: any) => {
        this.SelectedUserName.push({
          "UserID": element.UserID,
        })
      });
      console.log("SelectedUserName", this.SelectedUserName);
    });
    return input;
  }

  //============User
  ProductsListColumns: ColDef[] = [
    {
      type: 'checkbox',
      field: 'selected',
      filter: 'agTextColumnFilter', floatingFilter: false,
      cellRenderer: (params: any) => this.checkBoxCellProducts(params), width: 25
    },
    { field: 'ProductID', filter: 'agTextColumnFilter', floatingFilter: false, hide: true, },
    { field: 'ProductName', hide: false, resizable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  ];
  checkBoxCellProducts(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.SelectedProducts = [];
      const SelectedProductsMST = this.ProductsList.filter((x: any) => x.selected == true);
      SelectedProductsMST.forEach((element: any) => {
        this.SelectedProducts.push({
          "ProductID": element.ProductID,
        })
      });
      console.log("SelectedProducts", this.SelectedProducts);
    });
    return input;
  }

  GetReportDetails(event: any) {
    const ReportIDs = this.ReportsName.filter((x: any) => x.DisplayName == String(event))
    this.api.post('/Report/GetReportDetails?RID=' + ReportIDs[0].ReportID).subscribe(
      data => {
        console.log("GetReportDetails", data)
        this.ReportNames = "";
        this.ReportNames = data[0].ReportName;
        this.ReportType = data[0].ReportType;
        this.SPName = data[0].SPName;
        this.SelectedCustomers = [];
        this.SelectedLabourContractor = [];
        this.SelectedProducts = [];
        this.SelectedStorageAreas = [];
        this.SelectedBrand = [];
        this.SelectedCustomerGroup = [];
        this.SelectedUserName = [];

        this.P_AsOnDate = data[0].P_AsOnDate
        this.P_Brand = data[0].P_Brand
        this.P_Customer = data[0].P_Customer
        this.P_CustomerGroup = data[0].P_CustomerGroup
        this.P_FromAndToDate = data[0].P_FromAndToDate
        this.P_InvoiceType = data[0].P_InvoiceType
        this.P_LabourContractors = data[0].P_LabourContractors
        this.P_LotNo = data[0].P_LotNo
        this.P_Product = data[0].P_Product
        this.P_StorageArea = data[0].P_StorageArea
        this.P_UserName = data[0].P_UserName
        this.PrintReport = data[0].PrintReport
      },
      error1 => { console.log(error1); }
    );
  }
  OnPrintReport() {
    if (this.ReportnameModel != "") {
      const ReportPrintData = {
        "ReportType": this.ReportType,
        "ReportName": this.ReportNames,
        "ReportID": this.ReportnameModel,
        "WarehouseID": this.currentUser.warehouseId,
        "FromDate": this.dtStartDate,
        "ToDate": this.dtEndDate,
        "AsonDate": this.dtAsOnDate,
        "LotNo": this.txtLotNumber,
        "TD_CustomerReport": this.SelectedCustomers,
        "TD_LabourContractor": this.SelectedLabourContractor,
        "TD_ProductReport": this.SelectedProducts,
        "TD_StorageAreaReport": this.SelectedStorageAreas,
        "TD_BrandReport": this.SelectedBrand,
        "TD_CustomerGroup": this.SelectedCustomerGroup,
        "InvoiceTypeID": this.InvoiceTypeModel,
        "TD_UserName": this.SelectedUserName,
        "SPName": this.SPName
      }
      console.log("ReportPrintData", ReportPrintData)
      this.api.post('/Report/PrintReport', ReportPrintData).subscribe(
        data => {
          if (this.ReportType == "Grid" || this.ReportType == "Grid_D") {
            this.tab = 1;
            console.log("Grid", data)
            let row = data[0];
            this.CommanColumns = [];
            this.displayedData = [];
            this.displayedColumns = [];
            this.CommanData = [];
            for (let key of Object.keys(row)) {
              this.displayedColumns.push(key);
              this.CommanColumns.push({
                field: String(key),
                filter: "agTextColumnFilter",
                floatingFilter: true,
                headerName: String(key),
                minWidth: 120,
                sortable: true,
              });
            }
            setTimeout(async () => {
            }, 5000);
            this.CommanData = data
            this.displayedData = data

          } else if (this.ReportType == "Report") {
            this.tab = 0;
            console.log("Report", data.length)
            if (data.length == 0) {
              alert("Data not found")
            } else {
              var pdfResult = data[0].Base64Str;
              let pdfWindow = window.open("")
              pdfWindow?.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(pdfResult) + "'></iframe>")
              
              setTimeout(async () => {
                pdfWindow?.print();
                
              }, 1000);
            }
          }
        },
        error1 => {
          console.error("error1", error1.Message);
          //alert(error1.Message)
        }
      );
    } else {
      alert("Select Report name.......");
      document?.getElementById("ReportnameModel")?.focus();
    }
  }
  setHeader(title: any, index: any) {
    return title;
  }

  setData(data: any, title: any) {
    //if(!title) return "Hi"
    return data;
  }
  OnReset() {
    this.BindReportList();
    this.ReportType = 0;
    this.SPName = "";
    this.SelectedCustomers = [];
    this.SelectedLabourContractor = [];
    this.SelectedProducts = [];
    this.SelectedStorageAreas = [];
    this.SelectedBrand = [];
    this.SelectedCustomerGroup = [];
    this.SelectedUserName = [];


    this.P_AsOnDate = false;
    this.P_Brand = false;
    this.P_Customer = false;
    this.P_CustomerGroup = false;
    this.P_FromAndToDate = false;
    this.P_InvoiceType = false;
    this.P_LabourContractors = false;
    this.P_LotNo = false;
    this.P_Product = false;
    this.P_StorageArea = false;
    this.P_UserName = false;
    this.PrintReport = false;

    this.displayedData = []
    this.displayedColumns = []
  }
  tabchange(event: any) {
    this.tab = event;
  }

  btnExportToExcel() {
    if (this.displayedData.length > 0) {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.displayedData);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      const str = this.ReportnameModel.replace(/\s/g, '') + '.xlsx'
      XLSX.writeFile(wb, String(str));
    } else {
      alert("Data not Found.........")
      document?.getElementById("ReportnameModel")?.focus();
      this.tab = 0;
    }
  }
  CreatePDFWithImage() {

    html2canvas(this.screen.nativeElement).then(canvas => {
      try {
        var contentH = $(this.screen.nativeElement).height();
        this.tab = 1
        this.hidePDFTab = false;
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
        count = Math.ceil(count) - 1;
        for (var i = 1; i <= count; i++) {
          var position = - maxh * i
          pdf.addPage();
          pdf.addImage(img, 'JPEG', 0, position, w, h);
        }
        const str = this.ReportnameModel.replace(/\s/g, '') + '.pdf'
        pdf.save(String(str));
      } catch (e: any) {
        alert("Error description: " + e.message);
      }
    });
  }
  btnExportToPdf() {
    if (this.displayedData.length > 0) {
      this.tab = 2
      this.hidePDFTab = true;
      setTimeout(async () => {
        this.CreatePDFWithImage()
      }, 5000);
    } else {
      alert("Data not Found.........")
      this.tab = 0;
      document?.getElementById("ReportnameModel")?.focus();
    }
  }

}
