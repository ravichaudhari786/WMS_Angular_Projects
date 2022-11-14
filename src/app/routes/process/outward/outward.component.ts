import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@core/authentication/interface';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ColDef,GridApi } from 'ag-grid-community';
import { AgGridAngular} from "ag-grid-angular";
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn,MtxGridRowClassFormatter  } from '@ng-matero/extensions';
import {OutwarddeletebuttonComponent} from './outwarddeletebutton/outwarddeletebutton.component';
@Component({
  selector: 'app-outward',
  templateUrl: './outward.component.html',
  styleUrls: ['./outward.component.scss']
})
export class OutwardComponent implements OnInit {
  outID:number=0
  DOID:number=0;
  DisptID:number=0;
  customerList:any;
  customePartyList:any;
  remarkList:any;
  form!: FormGroup;
  formParty!: FormGroup;
  tab=0;
  DID:number=0;
  todayDate : any ;
  dockList:any;
  Out_Count:number=0;
  unloadingList:any;
  labourContractorList:any;
  PendingDOList:any;
  DeliveryOrderDetailList:any;
  OutwardDetailsData: any = {};
  DeliveryOrderDetailChargeList:any;
  ChargesListData: Array<OutwardCharege>=[];
  OutwardDetailList: Array<OutwardDetail>=[];
  OutwardList: any={};
  OutwardList12: any;
  frameworkComponents: any;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  SaveCustomerParty: any = {};  
  GetPendingDO: any = {};  
  newArr:any=[];
  Saveclick : boolean = false;

  private currentUser:User;
  constructor(private api:ApiService,private fb: FormBuilder,private fbParty: FormBuilder,public dialogs: MtxDialog,private modalService: NgbModal) {
    this.currentUser=this.api.getCurrentUser();
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss')
    this.todayDate=dateSendingToServer;
    this.currentUser=this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: OutwarddeletebuttonComponent,
    };
    this.form = this.fb.group({
      customer_id: [null, Validators.required],
      Outward_Date: [null, Validators.required],
      txtTruck_No: [null, Validators.required],
      txtContainer_No: [null, Validators.required],
      cbCustomer_Party: [null, Validators.required],
      cbRemarks: ['', Validators.required],
      txtDriver_Name: [null, Validators.required],
      txtDriver_MobileNo: [null, Validators.required],
      cbDock_Name: [null, Validators.required],
      cbLodingBy_Name: [null, Validators.required],
      cbLabourContractor: [null, Validators.required],
    });
    this.formParty =this.fbParty.group({
      txtPartyName: ['', Validators.required],
      txtShippingAddress1: ['', Validators.required],
      txtShippingAddress2: ['', Validators.required],
      txtPinCode: ['', Validators.required],
    });
    
   }
//------Innitialize
  ngOnInit(): void {
    this.BindDropdown();
    this.BindCustomerParty();
    this.BindOutwardList();
    this.DeliveryOrderDetailList=[];
    this.DeliveryOrderDetailChargeList=[];
  }
  async BindDropdown(){
    this.api.get('/Customer').subscribe(
     data=>{this.customerList=data},
     error=>{ console.error(error);}
   );
   
   this.api.get('/Remarks').subscribe(
     data=>{this.remarkList=data.filter((p:any)=>p.ProcessID==3);},
     error=>{ console.error(error);}
   );
   this.api.get('/dock').subscribe(
    data=>{this.dockList=data},
    error=>{ console.error(error);}
  );
  this.api.get('/UnloadingBy').subscribe(
    data=>{this.unloadingList=data},
    error=>{ console.error(error);}
  );
  this.api.get('/LabourContracter').subscribe(
    data=>{this.labourContractorList=data},
    error=>{ console.error(error);}
  );
 }
//------------Bind Data to Customerpart Selection
 BindCustomerParty(){
  this.api.get('/CustomerParty').subscribe(
    data=>{this.customePartyList=data;
    //console.log(data);
    },
    error=>{ console.error(error);}
  );
 }
 //---------------Bind Data to Outward List (2nd tab) 
 BindOutwardList(){
  const OutwardListData={
      outwardID: 0,
      warehouseID: 1,
      outWardDate: "",
      billStartDate: "",
      deliveryOrderID: 0,
      customerPartyID: 0,
      truckNo: "",
      containerNo: "",
      transporterName: "",
      remarks: "",
      createdBy: 0,
      customerID: 0,
      driverName: "",
      driverNo: "",
      docID: 0,
      loadingBy: 0,
      transferID: 0,
      dispatchID: 0,
      StatusID:0,
  };
  this.api.post('/Outward/GetOutwardList',OutwardListData).subscribe(
    data=>{this.OutwardList=data;
      this.OutwardList12=data;
     console.log(this.OutwardList12);
    },error=>{ console.error(error);}
  );
 }
 tabOutward(event:any){
  this.tab=event;
  //this.BindOutwardList();
  }

  //----------- Button click event on pending DO 
  OnSearchPendingDO(){
    if(this.form.value.customer_id==null || this.form.value.customer_id=="")
    {
      alert("Please .... Select Customer Name");
      document?.getElementById("customer_id")?.focus();
    }else{
      this.GetPendingDO={
        CustomerID :this.form.value.customer_id,
        WarehouseId :this.currentUser.warehouseId,
        CompanyID :this.currentUser.companyId
      }
      this.api.post('/Outward/GetDeliveryOrderByID',this.GetPendingDO).subscribe(
        data=>{if(data.length>0){
            this.PendingDOList=data;
          }else{
            alert("No Pending DO .....")
          }},
        error=>{ console.error(error);}
      );
    }

    
  }
  ///----------------Open window for Add to new customer party 
  openPartyWindow(AddPartyContent:any) {
    //console.log(this.form.value.customer_id);
    if(this.form.value.customer_id==null || this.form.value.customer_id=="")
    {
      alert("Please .... Select Customer Name");
      document?.getElementById("customer_id")?.focus();
    }else{
      this.modalService.open(AddPartyContent);
    }  
  }
///----------------Close window for Add to new customer party 
  onCloseAddParty(AddPartyContent:any){    
    this.modalService.dismissAll(AddPartyContent);
  }

  //-------------------Save Customer party window data
  onAddParty(){
    if(this.formParty.value.txtPartyName==null || this.formParty.value.txtPartyName==""){
      alert("Please .... Enter Party Name");
      document?.getElementById("txtPartyName")?.focus();
      }
      else
      {
      this.SaveCustomerParty={
        CustomerPartyID :0,
        CustomerID :this.form.value.customer_id ,
        PartyName : this.formParty.value.txtPartyName ,
        ShippingAddress :this.formParty.value.txtShippingAddress1 ,
        ShippingAddress1 :this.formParty.value.txtShippingAddress2 ,
        PinCode :this.formParty.value.txtPinCode ,
        CreatedBy :this.currentUser.userId
      };
        this.api.post('/CustomerParty/CustomerPartysave',this.SaveCustomerParty).subscribe(
          data=>{data;
          alert(data);
          this.formParty.reset();
          this.BindCustomerParty();
        },
        error=>{ console.error(error);}
      );
    }
  }

  onKeyfilter(e:string){
    //console.log(e.length);
    
    if(e.length>=0){
      const OutwardListData={
        outwardID: 0,
        warehouseID: 1,
        outWardDate: "",
        billStartDate: "",
        deliveryOrderID: 0,
        customerPartyID: 0,
        truckNo: "",
        containerNo: "",
        transporterName: "",
        remarks: "",
        createdBy: 0,
        customerID: 0,
        driverName: "",
        driverNo: "",
        docID: 0,
        loadingBy: 0,
        transferID: 0,
        dispatchID: 0,
        StatusID:0,
    };
    this.api.post('/Outward/GetOutwardList',OutwardListData).subscribe(
      data=>{this.OutwardList=data;
        var searchName = e;
        const lists=this.OutwardList;
        let res = lists.filter((obj:any) => 
        (obj.OutWardNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.OutWardDate.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.CustomerName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.DeliveryOrderNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.DispatchNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.DeliverTo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.TruckNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.TransporterName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.ContainerNo.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.Remarks.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) ||
        (obj.DriverName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0)||
        (obj.StatusName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0)
        );
        this.OutwardList=res;
      },error=>{ console.error(error);} );
    }
  }

//--------- Pending DO List Row double click event
  onRowDblclicked(a:any,e:any){
    if(this.form.value.cbLabourContractor==null || this.form.value.cbLabourContractor==""){
      alert("Please .... Select Labour Contractor");
    document?.getElementById("cbLabourContractor")?.focus();
    }
    else{
      this.DOID=Number(a.cellSelection[0].rowData.DeliveryOrderID);
      this.DisptID=Number(a.cellSelection[0].rowData.DispatchID);
      
      const customePartyID=this.customePartyList.filter((x:any)=>x.PartyName ==a.cellSelection[0].rowData["DeliverTo"])
      this.form.patchValue({
        txtTruck_No:a.cellSelection[0].rowData["TruckNo"],
        txtContainer_No:a.cellSelection[0].rowData["ContainerNo"],
        cbCustomer_Party:customePartyID[0].CustomerPartyID,
        });
      const GetDeliveryOrderDetailData={
        outwardID :0,
          warehouseID :0,
          outWardDate :0,
          billStartDate :0,
          deliveryOrderID :0,
          customerPartyID :0,
          truckNo :0,
          containerNo :0,
          transporterName :0,
          remarks :0,
          createdBy :0,
          customerID :0,
          driverName :0,
          driverNo :0,
          docID :0,
          loadingBy :0,
          transferID :0,
          dispatchID :a.cellSelection[0].rowData["DispatchID"],
          StatusID:0,
      }
        this.api.post('/Outward/GetDeliveryOrderDetail',GetDeliveryOrderDetailData).subscribe(
          data=>{this.DeliveryOrderDetailList=data;     //console.log("orig",data); 
        },error=>{ console.error(error);});
    }
  }
//---------- Add Data in outward Detail and show outward charges  
  DeliveryOrderDetailCellRenderer(params:any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'true';
    input.checked = params.value;
    const DODetailData={
      CustomerID: this.form.value.customer_id ,
      WarehouseId: this.currentUser.warehouseId,
      CompanyID: this.currentUser.companyId,
      ProductID: params.data.ProductID
    }
    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
     });
     if(params.value.toString()=="true"){
        this.api.post('/Outward/GetOutwardServices',DODetailData).subscribe(
        data=>{this.DeliveryOrderDetailChargeList=[]; 
          this.DeliveryOrderDetailChargeList=data;
          this.DID=this.DID+1;
          this.OutwardDetailsData={
              OutwardDID:this.DID,
              DeliveryOrderDID:params.data.DeliveryOrderDID,
              DispatchDID:params.data.DispatchDID,
              OutQuantity:params.data.DispatchQuantity,
              LabourContractorID:this.form.value.cbLabourContractor,
          }
          if(this.OutwardDetailList.length>0){
            const OutDetailsFilter =this.OutwardDetailList.filter((x:any)=>x.DeliveryOrderDID!=params.data.DeliveryOrderDID);
            this.OutwardDetailList=OutDetailsFilter;
            //console.log("OutwardDetailList",this.OutwardDetailList);
            // console.log("Filter",OutDetailsFilter);
            // console.log("FilterID",OutDetailsFilter);
          }          
          //this.OutwardDetailList
          this.OutwardDetailList.push(this.OutwardDetailsData);
          //this.ChargesList=[];  
          //console.log("OutwardDetail Final",this.OutwardDetailList);
          this.DeliveryOrderDetailChargeList.forEach((i:any)=>{ 
          if(i.Add==true){
            this.ChargesListData.push(
              {
                "OutwardDID":this.DID,
                "ServiceID":i.ServiceID,
                "ServiceName":i.ServiceName,
                "Rate":i.C_Rate,
                "L_Rate":i.L_Rate
              });
              }        
            });
          
          this.ChargesListData.slice();          
        },error=>{ console.error(error);});
      }
      else
      {
        this.DeliveryOrderDetailChargeList=[];
        if(this.OutwardDetailList.length>0)
        {
          const OutDetailFilter =this.OutwardDetailList.filter((x:any)=>x.DeliveryOrderDID==params.data.DeliveryOrderDID);
          const OutChargeFilter =this.ChargesListData.filter((x:any)=>x.OutwardDID!=OutDetailFilter[0].OutwardDID);
          this.ChargesListData=OutChargeFilter;
        }
      }        
    return input;
  }
  /// -------------------- Apply charges
  DeliveryOrderChargeCellEditRenderer(params:any) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'true';
    input.checked = params.value;

    input.addEventListener('click', (e) => {
      var val = params.value == true ? false : true;
      params.setValue(val);
      const ChargesDT=this.ChargesListData.filter((x:any)=>x.OutwardDID!=this.DID);
      this.ChargesListData=ChargesDT;
        this.DeliveryOrderDetailChargeList.forEach((i:any)=>{
          if(i.Add==true){
            this.ChargesListData.push(
              {
               "OutwardDID":this.DID,
               "ServiceID":i.ServiceID,
               "ServiceName":i.ServiceName,
               "Rate":i.C_Rate,
               "L_Rate":i.L_Rate
              });
            }        
        });
        this.ChargesListData.slice();
        //console.log("click 3",this.ChargesListData);
     });
    return input;
  }
///-------------------------------save Outward
OnSaveOutward(){
  //console.log(this.DeliveryOrderDetailList);  
  if(this.DeliveryOrderDetailList.length>0)
  {
    const OutwardCount=this.DeliveryOrderDetailList.filter((x:any)=>x.Outward==false);
    this.Out_Count=OutwardCount.length;
  }
  console.log("Save");
  if(this.form.value.customer_id==null || this.form.value.customer_id==""){
    alert("Please .... Select Customer Name");
    document?.getElementById("customer_id")?.focus();
    return;
  }else if(this.form.value.Outward_Date==null){
    alert("Please... Select Outward Date ..!!!");
    document?.getElementById("Outward_Date")?.focus();
    return;
  }else if (this.form.value.txtTruck_No ==null || this.form.value.txtTruck_No==""){
    alert("Please .... Enter Truck No ....");
    document?.getElementById("txtTruck_No")?.focus();
    return;
  }else if (this.form.value.cbDock_Name==null || this.form.value.cbDock_Name==""){
    alert("Please .... select Dock name ....");
    document?.getElementById("cbDock_Name")?.focus();
    return;
  }else if(this.form.value.cbLodingBy_Name==null){
    alert("Please... Select unloading by ..!!!");
    document?.getElementById("cbLodingBy_Name")?.focus();
    return;
  }else if (this.form.value.cbLabourContractor==null || this.form.value.cbLabourContractor==""){
    alert("Please .... select Labour Contractor ....");
    document?.getElementById("cbLabourContractor")?.focus();
    return;
  }
  else if(this.DeliveryOrderDetailList.length==0){
    alert("Please... Add Outward Details ..!!!");
    return;
  }else if(this.Out_Count>0){
    alert("Please... Select Outward Product ..!!!");
    return;
  }
  // else if(this.InwardshowStorageArea.length==0){
  //   alert("Please... Add Storage Details ..!!!");
  //   //document?.getElementById("truckno")?.focus();
  //   return;
  // }else if(this.InwardTransportList.length==0){
  //   alert("Please... Add transport Details..!!!");
  //   //document?.getElementById("truckno")?.focus();
  //   return;
  // }
  else{
      //alert("valid");
      //this.form.value.cbLabourContractor
      //const UpdateDODID=this.ChargesListData;
      
      // this.newArr=this.OutwardDetailList.concat(this.ChargesListData)
      // console.log(this.newArr);
      this.Saveclick = true;
      this.newArr=[];
      this.OutwardDetailList.forEach(i=>{
        this.ChargesListData.forEach(j=>{
          if(i.OutwardDID==j.OutwardDID)
          {
            this.newArr.push({
              "OutwardDID":i.DeliveryOrderDID,
              "ServiceID":j.ServiceID,
              "ServiceName":j.ServiceName,
              "Rate":j.Rate,
              "L_Rate":j.L_Rate,
            })
          }
        });
      });
      this.ChargesListData=this.newArr;
      //console.log(this.newArr);
      //console.log(this.ChargesListData);
      //console.log(this.OutwardDetailList);
      const InsertOutwardData={
        OutwardID:this.outID,   
        WarehouseID: this.currentUser.warehouseId, 
        OutWardDate:this.form.value.Outward_Date,  
        BillStartDate:this.form.value.Outward_Date,   
        DeliveryOrderID: this.DOID, 
        CustomerPartyID: this.form.value.cbCustomer_Party, 
        TruckNo:this.form.value.txtTruck_No,   
        ContainerNo:this.form.value.txtContainer_No,
        TransporterName:"",
        Remarks:this.form.value.cbRemarks,
        CreatedBy:this.currentUser.userId,   
        CustomerID: Number(this.form.value.customer_id), 
        OutwardDetailModel:this.OutwardDetailList,
        OutwardChargeModel:this.ChargesListData,
        DriverName:this.form.value.txtDriver_Name,
        DriverNo:this.form.value.txtDriver_MobileNo,
        DocID:  Number(this.form.value.cbDock_Name),
        LoadingBy:Number(this.form.value.cbLodingBy_Name),  
        TransferID:0,
        DispatchID:this.DisptID,
        };
        //console.log(InsertOutwardData);
        this.api.post('/Outward/Outward_Insert',InsertOutwardData).subscribe(
          data=>{
               this.BindOutwardList();
            },error=>{ console.error(error);}
        );
      }
      // console.log("ChargesListData",this.ChargesListData);
      // console.log("OutwardDetailList",this.OutwardDetailList);
    }
//------------Reset Outward Form
OnResetOuward(){
  this.form.reset();
  this.Saveclick = false;
  this.BindOutwardList();
  const UpdatedDate = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd hh:mm:ss')
  this.todayDate=UpdatedDate;
  this.outID=0;
  this.DOID=0
  this.DisptID=0;
  this.BindCustomerParty();
  this.DeliveryOrderDetailList=[];
  this.DeliveryOrderDetailChargeList=[];
  this.PendingDOList=[];
  this.SaveCustomerParty=[];
  this.DeliveryOrderDetailList=[];

  this.OutwardDetailList=[];
  this.ChargesListData=[];
  this.Out_Count=0;
  this.newArr=[];

}

onDeleteOutward(records:any){
  console.log("0",records);
 
    const OutwardDeleteData={
      outwardID: records.OutWardID,
      warehouseID: records.WarehouseID,
      outWardDate: "",
      billStartDate: "",
      deliveryOrderID: 0,
      customerPartyID: 0,
      truckNo: "",
      containerNo: "",
      transporterName: "",
      remarks: "BY test",
      createdBy: this.currentUser.userId,
      customerID: 0,
      driverName: "",
      driverNo: "",
      docID: 0,
      loadingBy: 0,
      transferID: 0,
      dispatchID: 0,
      StatusID:records.StatusID,
  };
  console.log("Delete ",OutwardDeleteData);
  this.api.post('/Outward/OutwardStatus_validation',OutwardDeleteData).subscribe(
    data=>{console.log("process ",data[0].Count);
        if(data[0].Count==0){          
          alert("Some data is updated. So Please, reperform your cancelled operation");
          this.BindOutwardList();
        }else
        {
          if(records.StatusID=82){
            alert("Sorry,Outward already deactivated or deleted ....!!!");
          }
          else
          {
            this.api.post('/Outward/OutWard_Cancelled',OutwardDeleteData).subscribe(
              data=>{ 
                alert(data);
                   this.BindOutwardList();
                },error=>{ console.error(error);}
            );
          }
        }
      },error=>{ console.error(error);}
  );
  
}
OnCancelledOutward(deletedata:any)
{
  if(window.confirm("Do you want to cancel your Outward...!!!")){
        const OutwardDeleteData={
          outwardID: deletedata.rowData.OutWardID,
          warehouseID: deletedata.rowData.WarehouseID,
          outWardDate: "",
          billStartDate: "",
          deliveryOrderID: 0,
          customerPartyID: 0,
          truckNo: "",
          containerNo: "",
          transporterName: "",
          remarks: "BY test",
          createdBy: this.currentUser.userId,
          customerID: 0,
          driverName: "",
          driverNo: "",
          docID: 0,
          loadingBy: 0,
          transferID: 0,
          dispatchID: 0,
          StatusID:deletedata.rowData.StatusID,
      };
    this.api.post('/Outward/OutwardStatus_validation',OutwardDeleteData).subscribe(
      data=>{//console.log("process ",data[0].Count);
          if(data[0].Count==0){          
            alert("Some data is updated. So Please, reperform your cancelled operation");
            this.BindOutwardList();
          }else
          {
            if(deletedata.rowData.StatusID=82){
              alert("Sorry,Outward already deactivated or deleted ....!!!");
            }
            else
            {
              this.api.post('/Outward/OutWard_Cancelled',OutwardDeleteData).subscribe(
                data=>{ 
                  alert(data);
                    this.BindOutwardList();
                  },error=>{ console.error(error);}
              );
            }
          }
        },error=>{ console.error(error);}
    );
  }else{
    console.log('Cancel');
  }
}
//----------------------------Grid Column


PendingDOListColum: MtxGridColumn[] = [
  {    header:"DispatchID",    field:"DispatchID",    hide:true,  },
  {    header:"DeliveryOrderID",    field:"DeliveryOrderID",    hide:true,  },
  {    header:"DeliveryOrderNo",    field:"DeliveryOrderNo",  },
  {    header:"DispatchNo",    field:"DispatchNo",  },
  {    header:"CreatedDate",    field:"CreatedDate",    hide:true,  },
  {    header:"OrderGivenBy",    field:"OrderGivenBy",  },
  {    header:"DeliverTo",    field:"DeliverTo",  },
  {    header:"ShippingAddress",    field:"ShippingAddress",  },
  {    header:"Remarks",    field:"Remarks",    hide:false,  },
  {    header:"TruckNo",    field:"TruckNo",    hide:false,  },
  {    header:"ContainerNo",    field:"ContainerNo",  },
];

OutWardListColumn: MtxGridColumn[] = [
  {
    header: "Action",
    field: 'Action',
    minWidth: 80,
    pinned:'left',    
    type: 'button',
    buttons: [
      {
        color: 'warn',
        type: 'icon',
        icon: 'delete',
        tooltip: 'delete',
        pop: true,
        popTitle:'Do you want to delete Outward ....!!', //this.translate.stream('table_kitchen_sink.confirm_delete'),
        popCloseText:'No', //this.translate.stream('table_kitchen_sink.close'),
        popOkText:'Yes', 
        popDescription:'',
        popCloseColor:'warn',
        popOkColor:'primary',
        click: record => this.onDeleteOutward(record),
      }
    ]
  },
  {header:"OutWardID",field:"OutWardID",hide:true },
  {header:"OutWardNo",field:"OutWardNo",hide:false,minWidth: 100,  },
  {header:"WarehouseID",field:"WarehouseID",hide:true,  },
  {header:"CustomerName",field:"CustomerName",minWidth: 150,  },
  {header:"WareHouseName",field:"WareHouseName",hide:true,  },
  {header:"OutWardDate",field:"OutWardDate",minWidth: 100,type:'date',typeParameter:{ format:'dd-MM-yyyy'}  },
  {header:"DeliveryOrderNo",field:"DeliveryOrderNo",minWidth: 100,  },
  {header:"DispatchNo",field:"DispatchNo",minWidth: 100,},
  {header:"DeliverTo",field:"DeliverTo",minWidth: 120,hide:false,  },
  {header:"TruckNo",field:"TruckNo",hide:false,minWidth: 150,  },
  {header:"ContainerNo",field:"ContainerNo",minWidth: 120,  },
  {header:"TransporterName",field:"TransporterName",hide:false,minWidth: 80,  },
  {header:"Remarks",field:"Remarks",minWidth: 100,  },  
  {header:"IsCancelled",field:"IsCancelled",hide:true,  },
  {header:"DriverName",field:"DriverName",minWidth: 80,  },
  {header:"DocID",field:"DocID",hide:true,  },
  {header:"LoadingBy",field:"LoadingBy",hide:true,minWidth: 80,  },
  {header:"StatusID",field:"StatusID",hide:true,  },
  {header:"StatusName",field:"StatusName",minWidth: 80,  },
]

DeliveryOrderDetailColumns:ColDef[]  = [
  {    field: 'Outward',  hide:false,cellRenderer: (params:any) => this.DeliveryOrderDetailCellRenderer(params), width:10,     },
  { field: 'ProductName', hide:false, },
  { field: 'LotNo', hide:false,resizable: true },
  { field: 'BrandName' }, { field: 'CountInPacket', hide:true }, { field: 'StorageArea', hide:true },
  { field: 'DispatchQuantity' }, { field: 'FirstLotNo', hide:false }, { field: 'DeliveryOrderDID', hide:false },
  { field: 'DispatchDID' }, { field: 'ProductID', hide:false }
];
DeliveryOrderDetailChargeColumns:ColDef[]  = [
  { field: 'Add',width:10,  hide:false,cellRenderer: (params:any) => this.DeliveryOrderChargeCellEditRenderer(params), },
  { field: 'ServiceID', hide:true },
  { field: 'ServiceName', hide:false,resizable: true },
  { field: 'C_Rate' , hide:true}, { field: 'L_Rate', hide:true }
];
Columnsdata:ColDef[]  = [
   {  headerName: 'Action', width:100 ,floatingFilter: false,
      cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.OnCancelledOutward.bind(this),
      label: 'Click 1'
    }
   },
  {headerName:"OutWardID",field:"OutWardID", filter: 'agTextColumnFilter',floatingFilter: true },
  {headerName:"OutWardNo",field:"OutWardNo", filter: 'agTextColumnFilter',floatingFilter: true  },
  {headerName:"WarehouseID",field:"WarehouseID", filter: 'agTextColumnFilter',floatingFilter: true  },
  {headerName:"CustomerName",field:"CustomerName", filter: 'agTextColumnFilter',floatingFilter: true },
  {headerName:"WareHouseName",field:"WareHouseName", filter: 'agTextColumnFilter',floatingFilter: true },
  {headerName:"OutWardDate",field:"OutWardDate", filter: 'agTextColumnFilter',floatingFilter: true },
  {headerName:"DeliveryOrderNo",field:"DeliveryOrderNo", filter: 'agTextColumnFilter',floatingFilter: true},
  {headerName:"DispatchNo",field:"DispatchNo", filter: 'agTextColumnFilter',floatingFilter: true},
  {headerName:"DeliverTo",field:"DeliverTo", filter: 'agTextColumnFilter',floatingFilter: true },
  {headerName:"TruckNo",field:"TruckNo"  , filter: 'agTextColumnFilter',floatingFilter: true },
  {headerName:"ContainerNo",field:"ContainerNo", filter: 'agTextColumnFilter',floatingFilter: true },
  {headerName:"TransporterName",field:"TransporterName", filter: 'agTextColumnFilter',floatingFilter: true  },
  {headerName:"Remarks",field:"Remarks", filter: 'agTextColumnFilter',floatingFilter: true },  
  {headerName:"IsCancelled",field:"IsCancelled", filter: 'agTextColumnFilter',floatingFilter: true },
  {headerName:"DriverName",field:"DriverName", filter: 'agTextColumnFilter',floatingFilter: true  },
  {headerName:"DocID",field:"DocID", filter: 'agTextColumnFilter',floatingFilter: true},
  {headerName:"LoadingBy",field:"LoadingBy", filter: 'agTextColumnFilter',floatingFilter: true},
  {headerName:"StatusID",field:"StatusID", filter: 'agTextColumnFilter',floatingFilter: true},
  {headerName:"StatusName",field:"StatusName", filter: 'agTextColumnFilter',floatingFilter: true},
];



}
//----------------Define Class
export class OutwardCharege{
  OutwardDID:number=0;
  ServiceID:number=0;
  ServiceName:string="";
  Rate:number=0;
  L_Rate:number=0;
}

export class OutwardDetail{
  OutwardDID:number=0;
	DeliveryOrderDID:number=0;
	DispatchDID:number=0;
	OutQuantity:number=0;
	LabourContractorID:number=0;
}