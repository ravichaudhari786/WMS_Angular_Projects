import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { noUndefined } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { ColDef,GridApi } from 'ag-grid-community';
import { data } from 'jquery';
import resizable from 'devextreme/ui/resizable';
import { DatetimeAdapter } from '@mat-datetimepicker/core';
import { User } from '@core/authentication/interface';
@Component({
  selector: 'app-product-tax-detail',
  templateUrl: './product-tax-detail.component.html',
  styleUrls: ['./product-tax-detail.component.scss']
})
export class ProductTaxDetailComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  frameworkComponents: any;
  ProductList:any;
  ServiceList:any;

  ProductTaxDetailSave:any;
  ProductTaxDetailList:any;
  ProductListT: Array<ProductList>=[];
  TD_ProductID:Array<ProductList>=[];
  ServiceListT: Array<ServiceList>=[];
  TD_ServiesID:Array<ServiceList>=[];
  PID:number=0;
  SID:number=0;
  Taxname:any;
  ProductTaxDID:number=0;
  ProductTaxID:number=0;
  TaxNameList:any;
  HideSaveButton = true;
  todayDate:any;
  UserID: any = 0;
  coTaxName: any;
  private currentUser:User;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) { 
    const dateSendingToServer = new DatePipe('en-US').transform(Date(), 'yyyy-MM-dd')
    this.todayDate=dateSendingToServer;
    console.log("date",this.todayDate)
    this.currentUser=this.api.getCurrentUser();
  
  }

  ngOnInit(): void {
   

    this.form = this.fb.group({

      txtTaxName: ['', Validators.required],
      WEDate: ['', Validators.required],
      txtHSNCode:['', Validators.required],

      
      CreatedBy: [this.UserID]
    });
   
    this.BindDropdown();
}
//for creating selected checkboxes list in product grid
checkBoxCellEditRendererProduct(params:any) {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.value = 'false';
  input.checked = params.value;
  input.addEventListener('click', (e) => {
    var val = params.value == true ? false : true;
    params.setValue(val);
    //console.log(val);
    this.ProductListT=[];
    this.ProductList.forEach((i:any)=>{ 
      if(i.Add==true){
        this.ProductListT.push(
          {
            "ProductID": i.ProductID,
         
          })
        }        
    });
    this.ProductListT.slice();
    console.log(this.ProductListT);
   
});


return input;
}


//for creating selected checkboxes list in services grid
checkBoxCellEditRendererService(params:any) {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.value = 'false';
  input.checked = params.value;
input.addEventListener('click', (e) => {
  var val = params.value == true ? false : true;
  params.setValue(val);
  //console.log(val);
    this.ServiceListT=[];
    this.ServiceList.forEach((i:any)=>{ 
      if(i.Add==true){
        this.ServiceListT.push(
          {
            "ServiesID": i.ServiceID,
            "StorageAreaTypeID": i.StorageAreaTypeID,
          });
        }        
    });
    this.ServiceListT.slice();
    console.log("ServiceListT",this.ServiceListT);
    


  //console.log(this.rowData);
 
});
return input;
}
//bind data to all grids and dropdown
async BindDropdown() {

  this.api.get('/Taxes/TaxList').subscribe(
    data => { this.TaxNameList = data ;    },
    error => { console.error(error); }
  );
  this.api.get('/ProductList').subscribe(    
    data=>{this.ProductList=data; },
    error=>{ console.error(error);} );

    this.api.get('/Services/Service_Select').subscribe(    
      data=>{this.ServiceList=data; console.log("this.ServiceList",this.ServiceList);},
      error=>{ console.error(error);} );
      

      this.api.get('/ProductTaxDetails/ProductTaxDetail_Select').subscribe(    
        data=>{this.ProductTaxDetailList=data; },
        error=>{ console.error(error);} );
}



  get f() { return this.form.controls; }
  OnResetClick(){

  }
//submit save form
  onSubmit(data:any){
 
    this.submitted = true;
    if (this.form.invalid) {
      
      return;
    }
    if( this.ProductTaxDetailList.length==0){
      alert("Please ....Provide Product Tax Details");
return;
    }
    else if(this.form.value.txtTaxName==null ||this.form.value.txtTaxName==""){
        this.Taxname="";
        }else if(this.ProductListT.length==0){
          alert("Please Select Product");
        }else if(this.ServiceListT.length==0){
          alert("Please Select Service");
        }

else{
  const coTaxName=this.TaxNameList.filter((x:any)=>x.TaxID==this.form.value.txtTaxName);
          this.Taxname=coTaxName[0].TaxName;
          console.log("Taxname",coTaxName[0].TaxID)
    
    this.ProductTaxDetailSave=[];
      
// this.ProductTaxDID=this.ProductTaxDetailList[0].ProductTaxID+1;
////create list class to assign all form values to database table columns
  this.ProductTaxDetailSave={
  ProductTaxID:0,
  TaxID:this.form.value.txtTaxName,
  WefDate: this.form.value.WEDate, 
  LTD_ProductTaxDetailProductID: this.ProductListT, 
  LTD_ProductTaxDetailServiesIDs: this.ServiceListT, 
  CreatedBy:this.currentUser.userId, 
  HSNCode: this.form.value.txtHSNCode, 

  };
  //console.log("ProductTaxID",this.ProductTaxDID)
  console.log("final",this.ProductTaxDetailSave)
      
/////////save insert 
 
  this.api.post('/ProductTaxDetails/ProductTaxDetails_insert',this.ProductTaxDetailSave).subscribe(
    data=>{data;
      console.log("data",data.Table[0].message);
      alert(data.Table[0].message);  
      this.BindDropdown();  
      this.form.patchValue({
        WEDate:this.todayDate,
           
      });
      
      this.form.controls['txtHSNCode'].reset();
        
  },    
    error=>{ console.error(error);}
  );
 
  
   
 
  }
}



//product list grid structure with check box
  ProductListCol: ColDef[] = [
    {
      field: 'Add', cellRenderer: (params:any) => this.checkBoxCellEditRendererProduct(params), 
      hide:false,width:10,     
    },
    { headerName: 'Product ID',field: 'ProductID',minWidth: 250,hide:true,},
    { headerName: 'Product Code',field: 'ProductCode',minWidth: 250,hide:true,},
    { headerName: 'Product Name',field: 'ProductName',minWidth: 355,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Product Type',field: 'ProductType',minWidth: 250,hide:true,},
    { headerName: 'Product Type ID',field: 'ProductTypeID',minWidth: 250,hide:true,},
    { headerName: 'Product Group Name ',field: 'ProductGroupName',minWidth: 355,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Product Group ID',field: 'ProductGroupID',minWidth: 250,hide:true,},
    { headerName: 'ItemID',field: 'ItemID',minWidth: 250,hide:true,},
    { headerName: 'ItemName',field: 'ItemName',minWidth: 250,hide:true,},
    { headerName: 'ItemUnit',field: 'ItemUnit',minWidth: 250,hide:true,},
    { headerName: 'ItemCount',field: 'ItemCount',minWidth: 250,hide:true,},
    { headerName: 'Temperature Category',field: 'TemperatureCategory',minWidth: 250,hide:true,},
    { headerName: 'Temperature Category ID',field: 'TemperatureCategoryID',minWidth: 250,hide:true,},
    { headerName: 'Weight in KG',field: 'WeightinKG',minWidth: 250,hide:true,},
    {headerName: 'UOM ID',field: 'UOMID',minWidth: 250,hide:true,},
    { headerName: 'Packing Type ID',field: 'PackingTypeID',minWidth: 250,hide:true,},
    { headerName: 'Cubic Area',field: 'CubicArea',minWidth: 250,hide:true,},
    { headerName: 'Self Life',field: 'SelfLife',minWidth: 250,hide:true,},
    { headerName: 'UOM Name',field: 'UOMName',minWidth: 250,hide:true,},
    { headerName: 'Packing Type',field: 'PackingType',minWidth: 250,hide:true,},
    { headerName: 'Is Active',field: 'IsActive',minWidth: 250,hide:true,},
    { headerName: 'Approx Value',field: 'ApproxValue',minWidth: 250,hide:true,},
    { headerName: 'Billing Cycles Name',field: 'BillingCyclesName',minWidth: 250,hide:true,},
    { headerName: 'Billing Cycle Name ID',field: 'BillingCycleNameID',minWidth: 250,hide:true,},

  ]

  //Service list grid structure with check box
  ServiceListCol: ColDef[] = [
    {
      field: 'Add', cellRenderer: (params:any) => this.checkBoxCellEditRendererService(params), 
      hide:false,width:10,     
    },

    { headerName: 'Service ID',field: 'ServiceID',minWidth: 250,hide:true,},
     { headerName: 'Service Name',field: 'ServiceName',minWidth: 710,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
     { headerName: 'Service Type',field: 'ServiceCode',minWidth: 250,hide:true,},
     { headerName: 'Service Name',field: 'ServiceType',minWidth: 250,hide:true,},
     { headerName: 'Storage Area Type',field: 'StorageAreaType',minWidth: 250,hide:true,},
     { headerName: 'HCN Code',field: 'HCNCode',minWidth: 250,hide:true,},
     { headerName: 'Billing Cycles Name',field: 'BillingCyclesName',minWidth: 250,hide:true,},
     { headerName: 'Tax Description',field: 'TaxDescription',minWidth: 250,hide:true,},
     { headerName: 'Is Active ',field: 'IsActive',minWidth: 250,hide:true,},
  

  ]
//Product tax Details list grid structure 
  PTDListCol:ColDef[]=[
    

    { headerName: 'Product Tax ID',field: 'ProductTaxID',minWidth: 250,hide:true,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Tax Name',field: 'TaxName',minWidth: 250,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Wef Date',field: 'WefDate',minWidth: 250,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Product Name',field: 'ProductName',minWidth: 250,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Service Name',field: 'ServiceName',minWidth: 250,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'HSN Code',field: 'HSNCode',minWidth: 250,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
    { headerName: 'Created Date',field: 'CreatedDate',minWidth: 250,hide:false,filter: 'agTextColumnFilter', floatingFilter: true},
]

}

//ProductList initializing 
export class ProductList{

  ProductID: number = 0;
 

}
//ServiceList initializing 
export class ServiceList{
  
  ServiesID: number = 0;
  StorageAreaTypeID: number = 0;

}
//ProductTaxDetailList initializing 
export class ProductTaxDetailList{

  ProductTaxID: number = 0;
  TaxID:string = "";
  WefDate:string = "";
  LTD_ProductTaxDetailProductID:Array<ProductList>=[];
  LTD_ProductTaxDetailServiesIDs:Array<ServiceList>=[];
  CreatedBy:string = "";
  HSNCode:string = "";
 

}

