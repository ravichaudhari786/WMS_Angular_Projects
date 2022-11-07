import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { ColDef, GridApi } from 'ag-grid-community';
import { Console } from 'console';
import { User } from '@core/authentication/interface';
import { WarehouseEditButtonComponent } from './warehouse-edit-button/warehouse-edit-button.component';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})


export class WarehouseComponent implements OnInit {
  form!: FormGroup; HideSaveButton = true;
  WarehouseList: any; submitted = false; tab = 0; CompanyList: any; CitiesList: any;
  SaveData2: any = {};
  WareHouseDetail: Array<WareHouseDetail> = [];
  frameworkComponents: any;
  WareHouseID: number = 0;
  url: string = '';
  Editfile:any
  imagePreview: string = '';
  ImageDT: string = '';
//  TYPED_ARRAY = new Uint8Array(ArrayBuffer:);
  private currentUser: User;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: WarehouseEditButtonComponent,
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      WareHouseCode: ['', Validators.required],
      WareHouseName: ['', Validators.required],
      CompanyID: [null, Validators.required],
      Address1: [null, Validators.required],
      Address2: [null],
      Address3: [null],
      TelNumber: [null],
      Fax: [null],
      EmailID: [null],
      CBCityID: [null],
      Logo: ['', Validators.required],
      IsActive: [true, Validators.required],
    });
    this.WareHouseID = this.currentUser.warehouseId;
    this.BindDropdown();
  }
  async BindDropdown() {
    debugger;
    // const WarehouseData={
    //   id: this.currentUser.warehouseId,
    //   userid:0,
    //   companyId :0
    //   };
    this.api.get('/Company_Select/Company_Select1').subscribe(
      data => { this.CompanyList = data; console.log("company", data) },
      error => { console.error(error); }
    );
    this.api.get('/City/Cities_Select').subscribe(
      data => { this.CitiesList = data; },
      error => { console.error(error); }
    );

    this.api.get('/Warehouse/GetWarehouse').subscribe(
      data => { this.WarehouseList = data; console.log(data); },
      error => { console.error(error); }
    );


  }
  get f() { return this.form.controls; }
  tabchange(event: any) {
    this.tab = event;
  }

  // onFileSelected(fileInputEvent: any) {
  //   const STRING_CHAR = TYPED_ARRAY.reduce((data:any, byte:any)=> {
  //     return data + String.fromCharCode(byte);
  //     }, '');

  // }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {


      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        var imageData = this.imagePreview.replace("data:image/jpeg;base64,", "");

        this.ImageDT = imageData;
      };
      reader.readAsDataURL(event.target.files[0]);

    }
  }

 

  onSubmit(formData: any) {
    console.log(formData)
    this.submitted = true;
    if (this.form.invalid) {
      //alert("invalid form");
      return;
    }
    else {
      this.HideSaveButton = false;
      
      /////////var submitval = JSON.stringify({ data: this.imagePreview});
      this.SaveData2 = {
        WarehouseID: this.currentUser.WarehouseID,
        CompanyID: this.form.value.CompanyID,
        WarehouseName: this.form.value.WareHouseName,
        WarehouseCode: this.form.value.WareHouseCode,
        Address1: this.form.value.Address1,
        Address2: this.form.value.Address2,
        Address3: this.form.value.Address3,
        TelNumber: this.form.value.TelNumber,
        Fax: this.form.value.Fax,
        EmailID: this.form.value.EmailID,
        CityId: this.form.value.CBCityID,
        Logo: this.ImageDT,
        createdby: this.currentUser.userId,


      }
      console.log(this.SaveData2);
      this.api.post('/Warehouse/Warehouse_Insert_Update', this.SaveData2).subscribe(
        data => {
          console.log(data)
          this.dialog.alert(data[0], '',);
          // this.ResetForm();
          this.BindDropdown();
          this.form.reset()
          this.form.controls['WareHouseCode'].setErrors(null);
          this.form.controls['WareHouseName'].setErrors(null);
          this.form.controls['CompanyID'].setErrors(null);
          this.form.controls['GSTINNo'].setErrors(null);
          this.form.controls['Address1'].setErrors(null);
          this.form.controls['Logo'].setErrors(null);
          this.form.controls['Logo'].setErrors(null);
          // window.location.reload();
        },
        error => { console.error(error); }
      );
    }

  }


  editWarehouse(record: any) {
    console.log(record);
    this.WareHouseID = record.WareHouseID;
    const CompanyData=this.CompanyList.filter((x:any)=>x.CompanyName==record.CompanyName);
    // const CityData=this.CitiesList.filter((x:any)=>x.City==record.City);
    
    const item: any = {
      // CompanyID:record.CompanyID,
      Address1: record.rowData.Address1,
      Address2: record.rowData.Address2,
      Address3: record.rowData.Address3,
     CBCityID: record.rowData.CityID==null? 0 :record.rowData.CityID,
      CompanyID:CompanyData[0].CompanyID,
      EmailID: record.rowData.EmailID,
      Fax: record.rowData.Fax,
      IsActive: record.rowData.IsActive,
      Logo: record.rowData.Logo,
      TelNumber: record.rowData.TelNumber,
      WareHouseCode: record.rowData.WareHouseCode,
      WareHouseName: record.rowData.WareHouseName


    }
    this.form.setValue(item);

    this.tab = 0;


  }
  WarehouselistColumn: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.editWarehouse.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'WareHouseID',
      field: 'WareHouseID',
      sortable: true,
      hide: true
    },
    {
      headerName: 'WareHouseName',
      field: 'WareHouseName',
      sortable: true,
      minWidth: 170,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'WareHouseCode',
      field: 'WareHouseCode',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'CompanyID',
      field: 'CompanyID',
      sortable: true,
      hide: true
      
    },

    {
      headerName: 'CompanyName',
      field: 'CompanyName',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Address1',
      field: 'Address1',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Address2',
      field: 'Address2',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Address3',
      field: 'Address3',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'TelNumber',
      field: 'TelNumber',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Fax',
      field: 'Fax',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },

    {
      headerName: 'EmailID',
      field: 'EmailID',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'City',
      field: 'City',
      sortable: true,
      minWidth: 150,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'Logo',
      field: 'Logo',
      sortable: true,
      minWidth: 150,
      hide: true,
    },
    {
      headerName: 'IsActive',
      field: 'IsActive',
      sortable: true,
      minWidth: 150,
      hide: true,
    },

  ]



}

export class WareHouseDetail {
  WarehouseID: number = 0;
  CompanyID: number = 0;

}
