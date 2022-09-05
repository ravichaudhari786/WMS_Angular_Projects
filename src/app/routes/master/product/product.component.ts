import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
 import { MatTableDataSource } from '@angular/material/table';
import { ApiService} from '@core';
import { MtxGridColumn } from '@ng-matero/extensions';
import { MtxDialog } from '@ng-matero/extensions/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  //providers: [CommanService]
})
export class ProductComponent implements OnInit {
  form!: FormGroup;submitted = false;
  UOMlist:any;ProductGrouplist:any;ProductTypelist:any;Itemlist:any;
  PackingTypelist:any;Temperaturelist:any;Billingcyclelist:any;Productlist:any;

  dataSource = new MatTableDataSource<any>();
  tab=0;
  UserID:any=0;

  constructor(private fb: FormBuilder,private api:ApiService,public dialog: MtxDialog,) {
   this.UserID=api.getUserID();
   }

  ngOnInit(): void {
    this.form = this.fb.group({

      ProductID: [0, Validators.required],
      ProductCode : [null, Validators.required],
      ProductName : [null, Validators.required],
      ItemID : [null, Validators.required],
      ProductGroupID: [null, [Validators.required]],
      PackingTypeID: [null, Validators.required],
      UOMID: [null, Validators.required],
      ItemUnit: [0],
      ItemCount: [null, Validators.required],
      ProductTypeID:[null, Validators.required],
     // ProductTaxCategoryID:[null],
      TemperatureCategoryID: [null],
      WeightinKG:[null, Validators.required],
      // Width:[null],
      // Length:[null],
      // Height:[null],
      CubicArea:[null, Validators.required],
      SelfLife:[null, Validators.required],
      ApproxValue:[null, Validators.required],
      BillingCycleID:[null, Validators.required],
      IsActive:[true, Validators.required],
      CreatedBy:[this.UserID],

    });

    this.BindDropdown();
    //console.log(this.Itemlist);
  }

  async BindDropdown(){
     this.api.get('/item/itemlist').subscribe(
       data=>{this.Itemlist=data},
       error=>{ console.error(error);}
     );

     this.api.get('/ProductTypes').subscribe(
      data=>{this.ProductTypelist=data},
      error=>{ console.error(error);}
    );

    this.api.get('/ProductGroups').subscribe(
      data=>{this.ProductGrouplist=data},
      error=>{ console.error(error);}
    );

    this.api.get('/uomlist').subscribe(
      data=>{this.UOMlist=data},
      error=>{ console.error(error);}
    );

    this.api.get('/GetPackingTypes').subscribe(
      data=>{this.PackingTypelist=data},
      error=>{ console.error(error);}
    );

    this.api.get('/TemperatureCategories').subscribe(
      data=>{this.Temperaturelist=data},
      error=>{ console.error(error);}
    );

    this.api.get('/GetBillingCycles').subscribe(
      data=>{this.Billingcyclelist=data},
      error=>{ console.error(error);}
    );

    this.api.get('/ProductList').subscribe(
      data=>{this.Productlist=data},
      error=>{ console.error(error);}
    );

  }

  public OnItemChange($event:any)
  {
    let id = $event.target.options[$event.target.options.selectedIndex].value;
    this.GetTemperatureCategory(id);

  }

  public GetTemperatureCategory(id:any){
    this.api.get('/itemwisetempCategory?itemid='+id).subscribe(
      data=>{this.Temperaturelist=data},
      error=>{ console.error(error);}
    );
  }

  get f() { return this.form.controls; }

  onSubmit(formData:any){

    this.submitted = true;
    if (this.form.invalid) {
     //alert("invalid form");
     return;
    }
    else
    {
      const product=formData.value;
      this.api.post('/SaveProduct',product).subscribe(
        data=>{
          this.dialog.alert(data[0]);
          window.location.reload();
          },
        error=>{ console.error(error);}
      );
    }
  }

  tabchange(event:any){
    this.tab=event;
  }
  editProduct(record:any){
    const Product:any={
      ProductID:record.ProductID,
      ProductCode : record.ProductCode,
      ProductName :record.ProductName,
      ItemID : record.ItemID,
      ProductGroupID: record.ProductGroupID,
      PackingTypeID: record.PackingTypeID,
      UOMID: record.UOMID,
      ItemUnit: record.ItemUnit,
      ItemCount: record.ItemCount,
      ProductTypeID:record.ProductTypeID,
      TemperatureCategoryID:record.TemperatureCategoryID,
      WeightinKG:record.WeightinKG,
      CubicArea:record.CubicArea,
      SelfLife:record.SelfLife,
      ApproxValue:record.ApproxValue,
      BillingCycleID:record.BillingCycleID,
      IsActive:record.IsActive,
      CreatedBy:this.UserID,
    }
    this.form.setValue(Product);
    this.tab=0;
  }

  columns: MtxGridColumn[] = [
    {
      header: "Action",
      field: 'Action',
      minWidth: 80,
      width: '80px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: 'Edit',
          click: record => this.editProduct(record),
        }
      ]
    },
    {
      header:'ProductID',
      field:'ProductID',
      sortable: true,
      minWidth: 100,
      hide:true
    },
    {
      header:'ProductCode',
      field:'ProductCode',
      sortable: true,
      minWidth: 110,
    },
    {
      header:'ProductName',
      field:'ProductName',
      sortable: true,
      minWidth: 220,
    },
    {
      header:'ItemID',
      field:'ItemID',
      hide:true
    },
    {
      header:'ItemName',
      field:'ItemName',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'ProductGroupID',
      field:'ProductGroupID',
      hide:true
    },
    {
      header:'ProductGroupName',
      field:'ProductGroupName',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'PackingTypeID',
      field:'PackingTypeID',
      hide:true
    },
    {
      header:'PackingType',
      field:'PackingType',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'UOMID',
      field:'UOMID',
      hide:true
    },
    {
      header:'UOMName',
      field:'UOMName',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'ItemUnit',
      field:'ItemUnit',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'ItemCount',
      field:'ItemCount',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'ProductTypeID',
      field:'ProductTypeID',
      hide:true
    },
    {
      header:'ProductType',
      field:'ProductType',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'TemperatureCategoryID',
      field:'TemperatureCategoryID',
      hide:true
    },
    {
      header:'TemperatureCategory',
      field:'TemperatureCategory',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'WeightinKG',
      field:'WeightinKG',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'CubicArea',
      field:'CubicArea',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'SelfLife',
      field:'SelfLife',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'ApproxValue',
      field:'ApproxValue',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'BillingCycleID',
      field:'BillingCycleID',
      hide:true
    },
    {
      header:'BillingCycles',
      field:'BillingCyclesName',
      sortable: true,
      minWidth: 100,
    },
    {
      header:'IsActive',
      field:'IsActive',
      sortable: true,
      minWidth: 100,
    }

  ]

}
