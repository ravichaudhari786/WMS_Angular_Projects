import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from '@core';
import { ColDef, GridApi } from 'ag-grid-community';
import { User } from '@core/authentication/interface';
@Component({
  selector: 'app-bill-estimate',
  templateUrl: './bill-estimate.component.html',
  styleUrls: ['./bill-estimate.component.scss']
})
export class BillEstimateComponent implements OnInit {
  private currentUser: User;
  tab = 0
  myAnchorID:any=0;
  todayDate: any;
  SelectedCustomerList: any = [];
  CustomerList: any = [];
  dtStartDate: any;
  dtEndDate: any;
  chk_StorageDetail: any = false;
  chk_StorageSummary: any = false;
  chk_Labour: any = false;
  CustGrid:any;
  constructor(private api: ApiService) {
    this.currentUser = this.api.getCurrentUser();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.dtStartDate = dateSendingToServer;
    this.dtEndDate = dateSendingToServer;
  }

  ngOnInit(): void {
    this.BindCustomerGrid();
  }
  async BindCustomerGrid() {
    this.api.get('/BillEstimate/GetCustomers').subscribe(
      data => {

        this.CustomerList = [];
        data.forEach((element: any) => {
          this.CustomerList.push({
            "selected": false,
            "CustomerID": element.CustomerID,
            "CustomerName": element.CustomerName,
          })
        });
        console.log("this.CustomerList", this.CustomerList)
      },
      error1 => {
        console.error(error1);
      });
  }
  checkBoxCellEditRenderer(params: any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'false';
    input.checked = params.value;
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      this.SelectedCustomerList = [];
      this.myAnchorID=0;
      const selectedCustomers = this.CustomerList.filter((x: any) => x.selected == true);
      selectedCustomers.forEach((element: any) => {
        this.SelectedCustomerList.push({
          "CustomerID": element.CustomerID,
        })
      });
      //=

      const Customers1 = this.CustomerList.sort(function (a: any, b: any) { return b.selected - a.selected });
      this.CustomerList = [];
      this.CustomerList = Customers1;
      console.log(this.CustomerList);
    });
    return input;
  }
  CustomerListColumns: ColDef[] = [
    {
      type: 'checkbox',
      field: 'selected', filter: 'agTextColumnFilter', floatingFilter: false,
      cellRenderer: (params: any) => this.checkBoxCellEditRenderer(params), width: 25
    },
    { field: 'CustomerID', filter: 'agTextColumnFilter', floatingFilter: false, hide: true, },
    { field: 'CustomerName', hide: false, resizable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  ];

  OnPrintBill() {
    this.myAnchorID=0;
    if(this.chk_StorageDetail==false && this.chk_StorageSummary==false && this.chk_Labour==false){
      alert("Please Select Bill Type.........");
      document?.getElementById("chk_StorageDetail")?.focus();
    }else if(this.SelectedCustomerList.length==0){
      alert("Please Select Customer Name.........");
      this.myAnchorID=1;
    }else{
      this.myAnchorID=0;
      const BillRequest = {
        "BillStartDate": this.dtStartDate,
        "BillEndDate": this.dtEndDate,
        "WarehouseID": this.currentUser.warehouseId,
        "CustomerModel": this.SelectedCustomerList
      }
      console.log(BillRequest)
      if (this.chk_StorageDetail == true) {
        this.api.post('/BillEstimate/Rep_Invoice_Estimate_storage', BillRequest).subscribe(
          data => {
            console.log("Estimate_storage",data);
          },
          error1 => {
            console.error(error1);
          }
        );
      } else 
      if (this.chk_StorageSummary == true) {
        this.api.post('/BillEstimate/Rep_Invoice_Estimate_storage_summary', BillRequest).subscribe(
          data => {
            console.log("storage_summary",data);
          },
          error1 => {
            console.error(error1);
          }
        );
      } else 
      if (this.chk_Labour== true) {
        this.api.post('/BillEstimate/Rep_Invoice_Estimate_Labour', BillRequest).subscribe(
          data => {
            console.log("Labour",data);
          },
          error1 => {
            console.error(error1);
          }
        );
      }
    }    
  }
  onChangesStorageDetail(datas:any){
    this.chk_StorageDetail=datas;
    this.chk_StorageSummary= false;
    this.chk_Labour=false;
  }
  onChangesStorageSummary(datas:any){
    this.chk_StorageDetail=false;
    this.chk_StorageSummary=datas;
    this.chk_Labour=false;
  }
  onChangesLabour(datas:any){
    this.chk_StorageDetail=false;
    this.chk_StorageSummary=false;
    this.chk_Labour=datas;
  }
}

