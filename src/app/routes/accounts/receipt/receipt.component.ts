import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core';
import { User } from '@core/authentication/interface';
import { DatePipe } from '@angular/common';
import { ColDef, GridApi, GridOptions, RowDoubleClickedEvent } from 'ag-grid-community';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn, MtxGridRowClassFormatter } from '@ng-matero/extensions';
import { InwardActionButtonComponent } from '../../process/inward/inward-action-button/inward-action-button.component';
import { LocalStorageService } from '@shared';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  @ViewChild('ReceiptRemarkText') ReceiptRemarkText: NgbModal;
  tab = 1;
  // form: FormGroup;
  currentUser: any;
  Receipt_date: any;
  customerList: any = [];
  customer_id: any = 0;
  ReceiptType_ID: any = 0;
  PaymentModes_ID: any = 0;
  PaymentModesList: any = [];
  ReceiptTypeList: any = [];
  Receipt_InvoiceList: any = [];
  RectInvoiceList: any = [];
  CollectionAmount: any = 0;
  CollectionReferenceNo: any = "";
  CollectionBankName: any = "";
  CollectionBranch: any = "";
  CollectionReferenceDate: any;
  CollectionTDSAmt: any = 0;
  CollectionRemarks: any = "";
  todayDate: any;
  ReceiptDID: any = 0;
  ReceiptID: any = 0;
  CustomerName: any = [];
  PaymentModeName: any = [];
  CollectionDetailList: any = [];
  CollectionDetailSaveList: any = [];
  DetailList: any = [];
  gridOptions: GridOptions;
  gridOptionsInvoiceList: GridOptions;
  gridOptionsList: GridOptions;
  flag = false;
  FinalAmt: number = 0;
  FinalTDS: number = 0;

  ReceiptList: any = [];
  frameworkComponents: any;
  MyMenus: any = [];
  txtDeleteRemarks: any;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  constructor(private api: ApiService, private el: ElementRef, private store: LocalStorageService,
    private modalService: NgbModal, public dialog: MtxDialog) {



    //private fb: FormBuilder,
    // this.form = this.fb.group({
    //   customer_id: ['', Validators.required],
    //   ReceiptType_ID: [null, Validators.required],
    //   Receipt_date: [null, Validators.required],
    // });

    // this.gridOptions = {
    //   onGridReady: (event) => event.columnApi.autoSizeAllColumns(),
    //   onRowDoubleClicked: this.onCollectionDetailRowDblclicked.bind(this)
    // }

    // this.gridOptionsInvoiceList = {
    //   onGridReady: (event) => event.columnApi.autoSizeAllColumns()
    // }

    // this.gridOptionsList = {
    //   onRowDataChanged(event) { event.api.sizeColumnsToFit()}
    // }
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
  }

  ngOnInit(): void {
    this.MyMenus = this.api.getCurrentMenusForButton("Receipt");
    this.currentUser = this.api.getCurrentUser();
    this.BindDropdown();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss')
    this.CollectionReferenceDate = dateSendingToServer;
    this.Receipt_date = dateSendingToServer;
    this.OnReceiptLists();
  }

  ReceiptListcolumns: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 150,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnReceiptActions.bind(this),
      }
    },
    { field: 'ReceiptID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ReceiptNo', filter: "agTextColumnFilter", floatingFilter: true, resizable: true },
    { field: 'CustomerName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'BankName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Branch', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CustomerID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Paid Amount', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'TDSAmount', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'DiscountAmt', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Total', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'WareHouseName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ReceiptDate', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ReceiptTypeID', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Status', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Cancelled', hide: true, filter: "agTextColumnFilter", floatingFilter: true }
  ];
  async BindDropdown() {
    this.api.get('/Customer').subscribe(
      data => {
        this.customerList = [];
        this.customerList = data;
        this.customer_id = 0;
      },
      error => { console.error(error); }
    );

    this.api.get('/Receipt/ReceiptTypeMasters').subscribe(
      data => {
        this.ReceiptTypeList = [];
        this.ReceiptTypeList = data;
        this.ReceiptType_ID = ""
      },
      error => { console.error(error); }
    );

    this.api.get('/Receipt/PaymentModes').subscribe(
      data => {
        this.PaymentModesList = [];
        this.PaymentModesList = data;
        this.PaymentModes_ID = ""
      },
      error => { console.error(error); }
    );
  }
  tabchange(event: any) {
    this.tab = event;
  }
  GetCustomerID(event: any) {
    console.log("GetCustomerID=>", this.customer_id)
    if (this.customer_id > 0) {
      this.CustomerName = [];
      const CustName = this.customerList.filter((x: any) => x.CustomerID == this.customer_id);
      this.CustomerName = CustName;
    }
  }
  GetPaymentMode(event: any) {
    console.log("GetCustomerID=>", this.customer_id)
    if (this.PaymentModes_ID > 0) {
      this.PaymentModeName = [];
      const PayName = this.PaymentModesList.filter((x: any) => x.PaymentModeID == this.PaymentModes_ID);
      this.PaymentModeName = PayName;
    }
  }
  GetReceiptType(ReceiptTypeData: any) {
    console.log("GetReceiptType", this.ReceiptType_ID)
    if (this.customer_id > 0) {
      const Dats = {
        "ReceiptID": 0,
        "WarehouseID": this.currentUser.warehouseId,
        "ReceiptDate": 0,
        "Amount": 0,
        "TDSAmount": 0,
        "ReceiptTypeID": Number(this.ReceiptType_ID),
        "CreatedBy": 0,
        "remarks": 0,
        "customerID": this.customer_id,
        "LTD_ReceiptDetail": [],
        "LTD_ReceiptInvoiceDetail": [],
      }
      console.log("Dats", Dats)
      this.api.post('/Receipt/Receipt_SelectInvoice', Dats).subscribe(
        data => {
          this.Receipt_InvoiceList = data;
          console.log("Receipt_SelectInvoice=>", data)
        },
        error => { console.error(error); }
      );
    } else {
      alert("Plase Select Customer...!!!!");
      document?.getElementById("customer_id")?.focus();
    }

  }
  OnADD() {
    this.DetailList = [];
    if (this.flag == false) {
      this.ReceiptDID = this.ReceiptDID + 1
    } else {
      const DEData = this.CollectionDetailList.filter((x: any) => x.ReceiptDID != this.ReceiptDID);
      this.CollectionDetailList = DEData;
    }
    const CollectionDetailData = {
      "ReceiptDID": this.ReceiptDID,
      "ReceiptID": this.ReceiptID,
      "CustomerName": this.CustomerName[0].CustomerName,
      "ReceipDate": this.Receipt_date,
      "PaymentModeID": this.PaymentModeName[0].PaymentModeID,
      "PaymentMode": this.PaymentModeName[0].PaymentMode,
      "Amount": this.CollectionAmount,
      "TDSAmount": this.CollectionTDSAmt,
      "ReferenceNo": this.CollectionReferenceNo,
      "BankName": this.CollectionBankName,
      "Branch": this.CollectionBranch,
      "ReferenceDate": this.CollectionReferenceDate,
      "Remarks": this.CollectionRemarks,
    };
    this.DetailList = this.CollectionDetailList;
    this.DetailList.push(CollectionDetailData);
    this.CollectionDetailList = [];
    this.CollectionDetailList = this.DetailList.slice();
    console.log("OnADD", this.CollectionDetailList);
    this.ResetCollectionDetail();
  }
  ResetCollectionDetail() {
    this.PaymentModes_ID = 0;
    this.CollectionAmount = 0;
    this.CollectionReferenceNo = "";

    this.CollectionBankName = "";
    this.CollectionBranch = "";
    this.CollectionTDSAmt = 0;
    this.CollectionRemarks = "";
    const dateSendingToServer1 = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss')
    this.CollectionReferenceDate = dateSendingToServer1;
  }
  onReceiptInvoiceCellKeyPress(Datas: any) {
    this.CollectionAmount = 0;
    this.CollectionTDSAmt = 0;
    if (this.Receipt_InvoiceList.length > 0) {
      this.Receipt_InvoiceList.forEach((element: any) => {
        this.CollectionAmount = this.CollectionAmount + Number(element.AmountPaid);
        this.CollectionTDSAmt = this.CollectionTDSAmt + Number(element.TDSAmount);
      });
    }
  }
  ReceiptInvoiceListColumns: ColDef[] = [
    { field: 'InvoiceID', hide: true, resizable: false },
    { field: 'InvoiceNo', resizable: true },
    { field: 'InvoiceDate', type: 'Date' },
    { field: 'InvoiceAmount' },
    {
      field: 'AmountPaid', cellEditorPopup: true,
      editable: true, valueParser: "Number(newValue)", sort: "desc",
      filter: 'agNumberColumnFilter', floatingFilter: false,
      cellEditorPopupPosition: 'defualt',
      cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: 'red' };
        } return { color: 'white', backgroundColor: 'green' };
      }
    },
    { field: 'PaindingAmount' },
    {
      field: 'TDSAmount', cellEditorPopup: true,
      editable: true, valueParser: "Number(newValue)", sort: "desc",
      filter: 'agNumberColumnFilter', floatingFilter: false,
      cellEditorPopupPosition: 'defualt',
      cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: 'red' };
        }
        return { color: 'white', backgroundColor: 'green' };
      }
    },
    {
      field: 'DiscountAmount', cellEditorPopup: true,
      editable: true, valueParser: "Number(newValue)", sort: "desc",
      filter: 'agNumberColumnFilter', floatingFilter: false,
      cellEditorPopupPosition: 'defualt',
      cellStyle: params => {
        if (params.value > 0) {
          return { color: 'white', backgroundColor: 'red' };
        } return { color: 'white', backgroundColor: 'green' };
      }
    },
    { field: 'InvoiceType' },
    { field: 'TDSDeductedByCustomer' },
  ];


  CollectionDetailColumns: ColDef[] = [
    { headerName: "ReceiptDID", field: "ReceiptDID", hide: true },
    { headerName: "ReceiptID", field: "ReceiptID", hide: true },
    { headerName: "CustomerName", field: "CustomerName", hide: false },
    { headerName: "ReceipDate", field: "ReceipDate", hide: false },
    { headerName: "PaymentModeID", field: "PaymentModeID", hide: true },
    { headerName: "PaymentMode", field: "PaymentMode", hide: false },
    { headerName: "Amount", field: "Amount", hide: false },
    { headerName: "TDSAmount", field: "TDSAmount", hide: false },
    { headerName: "ReferenceNo", field: "ReferenceNo", hide: false },
    { headerName: "BankName", field: "BankName", hide: false },
    { headerName: "Branch", field: "Branch", hide: false },
    { headerName: "ReferenceDate", field: "ReferenceDate", hide: false },
    { headerName: "Remarks", field: "Remarks", hide: false },
  ];
  onCollectionDetailRowDblclicked(event: any) {
    this.flag = true;
    console.log("testevent", event.data);
    this.PaymentModes_ID = event.data.PaymentModeID;
    this.CollectionAmount = event.data.Amount;
    this.CollectionReferenceNo = event.data.ReferenceNo;

    this.CollectionBankName = event.data.BankName;
    this.CollectionBranch = event.data.Branch;
    this.CollectionTDSAmt = event.data.TDSAmount;
    this.CollectionRemarks = event.data.Remarks;
    this.CollectionReferenceDate = event.data.ReferenceDate;
    this.ReceiptDID = event.data.ReceiptDID;
    this.ReceiptID = event.data.ReceiptID;
  }

  OnSaveReceipt() {
    this.CollectionDetailSaveList = [];
    this.RectInvoiceList = [];
    if (this.customer_id == 0) {
      alert("Please Select Customers............");
      document?.getElementById("customer_id")?.focus();
    } else if (this.ReceiptType_ID == 0) {
      alert("Please Select Receipt Type............");
      document?.getElementById("ReceiptType_ID")?.focus();
    } else if (this.Receipt_date == null || this.Receipt_date == "") {
      alert("Please Select Receipt Type............");
      document?.getElementById("Receipt_date")?.focus();
    } else if (this.Receipt_InvoiceList.length == 0) {
      alert("Please Enter Invoice Charges............");
      document?.getElementById("ReceiptType_ID")?.focus();
    } else if (this.CollectionDetailList.length == 0) {
      alert("Please Enter Collection Details............");
      document?.getElementById("PaymentModes_ID")?.focus();
    } else {
      if (this.Receipt_InvoiceList.length > 0) {
        this.Receipt_InvoiceList.forEach((element: any) => {
          this.FinalAmt = this.FinalAmt + Number(element.AmountPaid);
          this.FinalTDS = this.FinalTDS + Number(element.TDSAmount);
          if (element.AmountPaid > 0) {
            const Invoicelist = {
              "ReceiptID": this.ReceiptID,
              "InvoiceID": element.InvoiceID,
              "ReceiptAmount": element.AmountPaid,
              "TDSAmount": element.TDSAmount,
              "DiscountAmount": element.DiscountAmount,
            }
            this.RectInvoiceList.push(Invoicelist);
          }
        });
      }
      if (this.CollectionDetailList.length > 0) {
        this.CollectionDetailList.forEach((element: any) => {
          const LTD_ReceiptDetail = {
            "ReceiptDID": element.ReceiptDID,
            "ReceiptID": element.ReceiptID,
            "PaymentModeID": element.PaymentModeID,
            "Amount": element.Amount,
            "TDSAmount": element.TDSAmount,
            "ReferenceNo": element.ReferenceNo,
            "BankName": element.BankName,
            "Branch": element.Branch,
            "ReferenceDate": element.ReferenceDate,
            "Remarks": element.Remarks,
          }
          this.CollectionDetailSaveList.push(LTD_ReceiptDetail)
        });
      }
      const SaveReceipt = {
        "ReceiptID": this.ReceiptID,
        "WarehouseID": this.currentUser.warehouseId,
        "ReceiptDate": this.Receipt_date,
        "Amount": this.FinalAmt,
        "TDSAmount": this.FinalTDS,
        "ReceiptTypeID": this.ReceiptType_ID,
        "CreatedBy": this.currentUser.userId,
        "remarks": "",
        "customerID": this.customer_id,
        "LTD_ReceiptDetail": this.CollectionDetailSaveList,
        "LTD_ReceiptInvoiceDetail": this.RectInvoiceList,
      };
      this.api.post('/Receipt/Receipt_Insert', SaveReceipt).subscribe(
        data => {
          console.log("Save", data)
          this.dialog.alert(data.Table[0].Column1);
          this.OnResetReceipt();
          this.OnReceiptLists();
        },
        error => {
          console.error(error);
        });
      console.log("SaveReceipt", SaveReceipt)
    }
  }

  OnResetReceipt() {
    this.customer_id = 0;
    this.ResetCollectionDetail();
    this.BindDropdown();
    this.CollectionDetailSaveList = [];
    this.RectInvoiceList = [];
    this.CollectionDetailList = [];
    this.Receipt_InvoiceList = [];
    this.ReceiptDID = 0;
    this.ReceiptID = 0;
    const dateSendingToServer2 = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss')
    this.CollectionReferenceDate = dateSendingToServer2;

    this.ReceiptType_ID = 0;
  }
  OnReceiptLists() {
    this.api.get('/Receipt/GetPaymentReceiptList?WarehouseID=' + this.currentUser.warehouseId).subscribe(
      data => {
        this.ReceiptList = [];
        this.ReceiptList = data;
        console.log("GetPaymentReceiptList", data)
      },
      error => {
        console.error(error);
      });
  }

  OnReceiptActions(ActionData: any) {
    //console.log("OnReceiptActions", ActionData.rowData)
    if (ActionData.actions == "Edit") {
      if (ActionData.rowData.Cancelled == true) {
        this.dialog.alert("Sorry,This Receipt is already cancelled ....!!!");
      } else {
        const EditReceipt = {
          "ReceiptID": ActionData.rowData.ReceiptID,
          "WarehouseID": this.currentUser.warehouseId,
          "ReceiptDate": this.Receipt_date,
          "Amount": this.FinalAmt,
          "TDSAmount": this.FinalTDS,
          "ReceiptTypeID":ActionData.rowData.ReceiptTypeID,
          "CreatedBy": this.currentUser.userId,
          "remarks": this.txtDeleteRemarks,
          "customerID": this.customer_id,
          "LTD_ReceiptDetail": this.CollectionDetailSaveList,
          "LTD_ReceiptInvoiceDetail": this.RectInvoiceList,
        };
        this.api.post('/Receipt/Receipt_Detail_Edit', EditReceipt).subscribe(
          data => {
            console.log("editdata", data.Table)
            console.log("editdata1", data.Table1)
            
            this.ReceiptID=data.Table[0].ReceiptID;
            this.ReceiptType_ID=data.Table[0].ReceiptTypeID;
            this.Receipt_date=data.Table[0].ReceiptDate;
            this.PaymentModes_ID=data.Table[0].PaymentModeID;
            this.CollectionAmount=data.Table[0].Amount;
            this.CollectionReferenceNo=data.Table[0].ReferenceNo;
            this.CollectionBankName=data.Table[0].BankName;
            this.CollectionBranch=data.Table[0].Branch;
            this.CollectionReferenceDate=data.Table[0].ReferenceDate;
            this.CollectionTDSAmt=data.Table[0].TDSAmount;
            this.CollectionRemarks=data.Table[0].Remarks;
            this.ReceiptDID=data.Table[0].ReceiptDID;
            this.Receipt_InvoiceList =[]
            this.Receipt_InvoiceList = data.Table1;
            this.tab = 0;
            this.flag=true;
            this.customer_id=data.Table1[0].CustomerID;
            this.GetCustomerID(this.customer_id);
            this.GetPaymentMode(data.Table[0].PaymentModeID);
          },
          error => {
            console.error(error);
          });
      }
    } else if (ActionData.actions == "Delete") {
      if (window.confirm('Are sure you want to delete this Receipt...?')) {
        if (ActionData.rowData.Cancelled == true) {
          this.dialog.alert("Sorry,This Receipt is already cancelled ....!!!");
        } else {
          this.txtDeleteRemarks = "";
          this.ReceiptID = ActionData.rowData.ReceiptID;
          this.ReceiptType_ID = ActionData.rowData.ReceiptTypeID;
          this.modalService.open(this.ReceiptRemarkText, this.config);
        }
      }
    }
  }
  onCloseReceiptRemarkText(ReceiptRemarkText: any) {
    this.modalService.dismissAll(ReceiptRemarkText);
    const DeleteReceipt = {
      "ReceiptID": this.ReceiptID,
      "WarehouseID": this.currentUser.warehouseId,
      "ReceiptDate": this.Receipt_date,
      "Amount": this.FinalAmt,
      "TDSAmount": this.FinalTDS,
      "ReceiptTypeID": this.ReceiptType_ID,
      "CreatedBy": this.currentUser.userId,
      "remarks": this.txtDeleteRemarks,
      "customerID": this.customer_id,
      "LTD_ReceiptDetail": this.CollectionDetailSaveList,
      "LTD_ReceiptInvoiceDetail": this.RectInvoiceList,
    };
    this.api.post('/Receipt/Receipt_Cancelled', DeleteReceipt).subscribe(
      data => {
        console.log("Delete", data)
        this.dialog.alert(data[0]);
        this.OnReceiptLists();
      },
      error => {
        console.error(error);
      });
  }

}



