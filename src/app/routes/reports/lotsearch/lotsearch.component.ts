import { Component, OnInit } from '@angular/core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColDef, GridApi, ICellRendererComp, KeyCreatorParams, GridReadyEvent, } from 'ag-grid-community';
import { jsPDF } from "jspdf";

import * as XLSX from 'xlsx';



import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ApiService } from '@core/authentication/api.service';


@Component({
  selector: 'app-lotsearch',
  templateUrl: './lotsearch.component.html',
  styleUrls: ['./lotsearch.component.scss']
})
export class LotsearchComponent implements OnInit {
  

  currentUser: any;

  LotList: any;
  
  LotData:any;
  form!: FormGroup;
  CurrentLotNo:any;
  CustomerName:any;
  CustomerAddress:any;
  InwardDate:any;
  ReceiptNo:any;
  ProductName:any;
  BrandName:any;
  ItemsInPacket:any;
  ContactPerson:any;
  DockName:any;
  Unloadingby:any;
  warehouseId:number=0;
  lotNo:any;
  lotData: any;
  doc1:any;
  autoTable:any;

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.currentUser = this.api.getCurrentUser();
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      cbCustomerID: ['', Validators.required],
      lotNo: ['', Validators.required]
    });
    
    
  }
  
  
  OnEnterLotNumber(id: any) {
    //this.CurrentLotNo=this.CurrentLotNo+1;
    const lotdata = {
    
      wareHouseID:this.currentUser.warehouseId, 
      lotNo: this.form.value.lotNo,
    };
    console.log("lot text",this.form.value.lotNo);
    console.log("lot data",lotdata);


    this.api.post('/LotSearch/LotSearch_List', lotdata).subscribe(
      data => {
        console.log(data)
        //this.LotList = data.Table;
        this.LotList = data.Table1;
        this.CustomerName= data.Table[0].CustomerName;
        this.CustomerAddress=data.Table[0].CustomerAddress;
        this.InwardDate=data.Table[0].InwardDate;
        this.ReceiptNo=data.Table[0].ReceiptNo;
        this.ProductName=data.Table[0].ProductName;
        this.BrandName=data.Table[0].BrandName;
        this.ItemsInPacket=data.Table[0].ItemsInPacket;
        this.ContactPerson=data.Table[0].ContactPerson;
        this.DockName=data.Table[0].DockName;
        this.Unloadingby=data.Table[0].ReceiptNo;
       

      },
      error => { console.error(error); }
    );

    console.log("LotList", this.LotList);
    console.log("lot data",lotdata);

  }
  OnReset(){
    this.CustomerName='';
    this.CustomerAddress='';
    this.InwardDate='';
    this.ReceiptNo='';
    this.ProductName='';
    this.BrandName='';
    this.ItemsInPacket='';
    this.ContactPerson='';
    this.DockName='';
    this.Unloadingby='';

    this.form.reset()
    // window.location.reload()
  
  }
  
  ExportExcel(): void {

    console.log( this.LotList );
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet( this.LotList );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'ExportAllData_Ind.xlsx');

  }
  PrintReport(lotprint:any){
    debugger;
    window.open('', '', 'height=500, width=500');
    var divContents=document.getElementById("lotprint")?.innerHTML;
   document.body.innerHTML="<html><head><title></title></head>"+divContents+"</body></html>";
   window.print();
  //  var a=window.open();
 
  //           var a = window.open('', '', 'height=500, width=500');
  //           a?.document.write(document.body.innerHTML="<html><head><title></title></head>"+divContents+"</body></html>");
  //           a?.document.close();
  //           a?.print();
           

    // console.log(this.LotList);
   
    // const doc = new jsPDF(this.LotList);

    // let info[]
    // this.LotList.foreach((element,index,array) =>{
    //   info.push([element.ProcessName,element.StorageArea,element.InQuantity,element.DoQuantity,element.OutQuantity,element.BalanceQuantity,element.ProcessDateTime,element.DeliverTo,element.CustomerParty])
      
    // });
    // this.LotList.foreach(function(this.LotList,i){
    //   doc.text(50,10+(i*10)),
    //   "ProcessName : "+this.LotList.ProcessName+
    //   "StorageArea : "+this.LotList.StorageArea+
    //   "InQuantity : "+this.LotList.InQuantity+
    //   "DoQuantity : "+this.LotList.DoQuantity+
    //   "OutQuantity : "+this.LotList.OutQuantity+
    //   "BalanceQuantity : "+this.LotList.BalanceQuantity+
    //   "ProcessDateTime : "+this.LotList.ProcessDateTime+
    //   "DeliverTo : "+this.LotList.DeliverTo+
    //   "CustomerParty : "+this.LotList.CustomerParty+;
    
    // });
    // window.print();
    // const source = document.getElementById("content");
      // doc.autoTable({
      //   head:[['ProcessName','StorageArea','InQuantity','DoQuantity','OutQuantity','BalanceQuantity','ProcessDateTime','DeliverTo','CustomerParty']],
      //   body:info
      // })
    // doc.save("abcd.pdf");


  }

  LotDatadatacolumn: ColDef[] = [

    {
      headerName: 'ProcessName',
      field: 'ProcessName',
      
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: false,
    
    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',
      
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: false,
    },
   {
      headerName: 'InQuantity',
      field: 'InQuantity',
      
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: false,
    },
    {
      headerName: 'DoQuantity',
      field: 'DOQuantity',
      
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: false,
    },
    {
      headerName: 'OutQuantity',
      field: 'OutQuantity',
      
      minWidth: 50,
      filter: 'agTextColumnFilter', floatingFilter: false,
    },
    {
      headerName: 'BalanceQuantity',
      field: 'BalanceQuantity',
      
      filter: 'agTextColumnFilter', floatingFilter: false,
      minWidth: 150,
    },
    {
      headerName: 'Process DateTime',
      field: 'ProcessDateTime',
      
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: false,
    },
    {
      headerName: 'DeliverTo',
      field: 'DeliverTo',
      
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: false,
    },
    {
      headerName: 'Customer Party',
      field: 'CustomerParty',
      
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: false,
    },
   
  ]

}

export class CustomerDetailList {

  CustomerName: string = "";
  CustomerAddress: string = "";
  WareHouseName: string = "";
  InwardDate: string = "";
   ContactPerson: string = "";
  DockNmae: string = "";
  Unloadingby: string = "";
 ProductName: string = "";
 BrandName: string = "";
  ItemsInPacket: number= 0;
  ReceiptNo: number=0;

}





  
 


