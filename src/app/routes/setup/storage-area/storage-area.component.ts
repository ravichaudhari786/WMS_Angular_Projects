import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { ColDef, GridApi } from 'ag-grid-community';
import { User } from '@core/authentication/interface';
import { StorageAreaButtonComponent } from './storage-area-button/storage-area-button.component';

@Component({
  selector: 'app-storage-area',
  templateUrl: './storage-area.component.html',
  styleUrls: ['./storage-area.component.scss']
})
export class StorageAreaComponent implements OnInit {
  private currentUser: User;
  tab = 0;
  frameworkComponents: any;
  form!: FormGroup; StorageAreaList: any; TempCatList: any;
  UserID: any = 0; StorageAreaTypeList: any; MinMaxList: any;
  StorageAreaGridList: any = {};
  StorageAreaDetails: Array<StorageAreaDetail> = [];
  submitted = false;
  StorageAreaID: number = 0;
  HideSaveButton = true;
  SaveStorageareaData: any = {};
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: StorageAreaButtonComponent,
    }
  }
  // AreaLength: number = 0;
  // AreaHeight: number = 0;
  // AreaBreadth: number = 0;
  // StorageCapacity: number = 0;
   WareHouseID: number = 0;

  ngOnInit(): void {
    this.form = this.fb.group({

      Storage_Area_Name: [null, Validators.required],
      StorageAreaCode: [null, Validators.required],
      StorageAreaTypeID: [null, Validators.required],
      Preference: [0],
      TemperatureCategoryID: [null, Validators.required],
      MinTempareture: [0],
      MaxTempareture: [0],
      AreaLength: [null, Validators.required],
      AreaHeight: [null, Validators.required],
      AreaBreadth: [null, Validators.required],
      StorageCapacity: [null, Validators.required],
      IsStorable: [true, Validators.required],
      IsTemparatureControlled: [true, Validators.required],
      //ParentStorageAreaID: [0, Validators.required],
      //StorageArea: ['', Validators.required],
      //StorageAreaID: [0, Validators.required],
      //StorageAreaMasterID: [0, Validators.required],
      //StorageAreaType: ['', Validators.required],
      //StorageName: [null, Validators.required],
      //WareHouseID: [0, Validators.required],
      //WareHouseName: ['', Validators.required],

      //createdBy: [this.UserID]
    });

    this.WareHouseID=this.currentUser.warehouseId;
    this.BindDropdown()
    //console.log(this.StorageAreaList)
    this.form.controls['AreaLength'].setValue(0);
    this.form.controls['AreaBreadth'].setValue(0);
    this.form.controls['AreaHeight'].setValue(0);
    this.form.controls['StorageCapacity'].setValue(0);
  }

  async BindDropdown() {
    this.api.get('/StorageAreaType/StorageAreaType_Select').subscribe(
      data => { this.StorageAreaTypeList = data },
      error => { console.error(error); }
    );
    this.api.get('/TemperatureCategory/TemperatureCategories_Select').subscribe(
      data => {
        this.TempCatList = data; //console.log("vishal", data);
      }, error => { console.error(error); }
    );
    this.api.post('/Storage/StorageArea_Select').subscribe(
      data => {
        this.StorageAreaList = data; //console.log(data)
      },
      error => { console.error(error); }
    );


  }

  get f() { return this.form.controls; }

  onSubmit(formData: any) {
    this.submitted = true;
    console.log(this.form);
    if (this.form.invalid) {
      alert("invalid form");
      return;
    }
    else {
      // alert("valid ");
      this.HideSaveButton = false;
      this.StorageAreaGridList = [];
      this.StorageAreaGridList = {
        StorageAreaID: this.StorageAreaID,
        WareHouseID: this.currentUser.warehouseId,
        //Storage_Area_Name: this.form.value.Storage_Area_Name,
        StorageAreaCode: this.form.value.StorageAreaCode,
        StorageArea: this.form.value.Storage_Area_Name,
        StorageAreaMasterID: Number(1),
        StorageName: '',//this.form.value.StorageName,
        StorageAreaTypeID: Number(this.form.value.StorageAreaTypeID),
        StorageAreaType: '',//this.form.value.StorageAreaType,
        ParentStorageAreaID: Number(1),
        IsStorable: this.form.value.IsStorable,
        IsTemparatureControlled: this.form.value.IsTemparatureControlled,
        Preference: this.form.value.Preference,
        MinTempareture: this.form.value.MinTempareture,
        MaxTempareture: this.form.value.MaxTempareture,
        TemperatureCategoryID: Number(this.form.value.TemperatureCategoryID),
        AreaLength: Number(this.form.value.AreaLength),
        AreaHeight: Number(this.form.value.AreaHeight),
        AreaBreadth: Number(this.form.value.AreaBreadth),
        StorageCapacity: Number(this.form.value.StorageCapacity),
      };
      this.StorageAreaDetails.push(this.StorageAreaGridList);

      console.log(this.StorageAreaGridList)
      this.SaveStorageareaData = {
        warehouseID: this.currentUser.warehouseId,
        StorageAreaID: this.StorageAreaID,
        cls_TD_StorageAreaS: this.StorageAreaDetails,
        createdBy: this.currentUser.userId,
        BlockID: 1
      };
      this.submitted = true;
      // console.log(this.SaveStorageareaData);
      this.api.post('/Storage/StorageAreas_Insert', this.SaveStorageareaData).subscribe(
        data => {
          this.dialog.alert(data.Table[0].Message, '',);
        },
        error => { console.error(error); });
        this.BindDropdown()
        this.form.reset()
        this.form.controls['Storage_Area_Name'].setErrors(null);
        this.form.controls['StorageAreaCode'].setErrors(null);
        this.form.controls['StorageAreaTypeID'].setErrors(null);
        this.form.controls['TemperatureCategoryID'].setErrors(null);
        this.form.controls['AreaLength'].setErrors(null);
        this.form.controls['AreaHeight'].setErrors(null);
        this.form.controls['AreaBreadth'].setErrors(null);
        this.form.controls['StorageCapacity'].setErrors(null);
        // window.location.reload();
    }
  }
  tabchange(event: any) {
    this.tab = event;
  }
 

  editstoragearea(record: any) {

    const TempID = this.TempCatList.filter((x: any) => x.TemperatureCategory == record.TemperatureCategory);
    console.log(record);
    this.StorageAreaID = record.StorageAreaID;
    this.WareHouseID= record.WareHouseID;
    const item: any = {

      AreaBreadth: record.AreaBreadth,
      AreaHeight: record.AreaHeight,
      AreaLength: record.AreaLength,
      IsStorable: record.IsStorable,
      IsTemparatureControlled: record.IsTemparatureControlled,
      MaxTempareture: record.MaxTempareture,
      MinTempareture: record.MinTempareture,
      //ParentStorageAreaID: record.ParentStorageAreaID,
      Preference: record.Preference,
      Storage_Area_Name: record.Storage_Area_Name,
      StorageAreaCode: record.StorageAreaCode,
      //StorageAreaID: record.StorageAreaID,
      //StorageAreaMasterID: record.ParentStorageAreaID,
      //StorageAreaType: record.StorageAreaType,
      StorageAreaTypeID: 1,
      StorageCapacity: record.StorageCapacity,
      //StorageName: record.StorageName,
      //Storage_Area_Name: record.Storage_Area_Name,
      TemperatureCategoryID: TempID[0].TemperatureCategoryID,//record.TemperatureCategoryID == null ? null : record.TemperatureCategoryID,
      //WareHouseID: record.WareHouseID,
      //WareHouseName: record.WareHouseName,
      //createdBy: this.currentUser.userId,


    }
    this.form.setValue(item);
    console.log(this.form.value);
    this.tab = 0;

  }
  GetTempdetails(a: any) {
    const datavalue = {
      TempCategoryID: this.form.value.TemperatureCategoryID,
      TempCategory: "",
      MinTemp: 0,
      MaxTemp: 0,
      CreatedBy: 0
    };
    this.api.post('/TemperatureCategory/Get_MinMax_Temp', datavalue).subscribe(
      data => {
        this.MinMaxList = data;
        // console.log(data);
        this.form.controls['MinTempareture'].setValue(data[0].MinTemperature);
        this.form.controls['MaxTempareture'].setValue(data[0].MaxTemperature);
      },
      error => { console.error(error); }
    );
  }

  //   AddStorageGrid: MtxGridColumn[] = [
  //     {      header: 'StorageAreaID',      field: 'StorageAreaID',            hide: false    },
  //     {      header: 'WareHouseID',      field: 'WareHouseID',            hide: false    },
  //     {      header: 'StorageAreaName',      field: 'StorageArea',            minWidth: 150,    },
  //     {      header: 'StorageAreaCode',      field: 'StorageAreaCode',           minWidth: 300,   },
  //     {      header: 'StorageAreaMasterID',      field: 'StorageAreaMasterID',            hide: false    },
  //     {      header: 'Storage Area Name',      field: 'StorageName',            minWidth: 150,   },
  //     {      header: 'StorageAreaTypeID',      field: 'StorageAreaTypeID',            minWidth: 300,      hide: false    },
  //     {      header: 'StorageAreaType',      field: 'StorageAreaType',            minWidth: 300,    },
  //     {      header: 'ParentStorageAreaID',      field: 'ParentStorageAreaID',               },
  //     {      header: 'IsStorable',      field: 'IsStorable',               },
  //     {      header: 'IsTemparatureControlled',      field: 'IsTemparatureControlled',            },
  //     {      header: 'Preference',      field: 'Preference',            minWidth: 300,},
  //     {      header: 'MinTempareture',      field: 'MinTempareture',            minWidth: 300,},
  //     {      header: 'MaxTempareture',      field: 'MaxTempareture',            minWidth: 300,},
  //     {      header: 'TemperatureCategoryID',      field: 'TemperatureCategoryID',            minWidth: 300,},
  //     {      header: 'AreaLength',      field: 'AreaLength',            minWidth: 300,},
  //     {      header: 'AreaHeight',      field: 'AreaHeight',            minWidth: 300,    },
  //     {      header: 'AreaBreadth',      field: 'AreaBreadth',            minWidth: 300,    },
  //     {      header: 'StorageCapacity',      field: 'StorageCapacity',            minWidth: 300,},
  // ]
  ItemTypelist = [
    { "ItemType": 222 }
  ]
  StorageArea1: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.editstoragearea.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'StorageAreaID',
      field: 'StorageAreaID',

      hide: true
    },

    {
      headerName: 'WareHouseID',
      field: 'WareHouseID',

      hide: true
    },
    {
      headerName: 'StorageArea',
      field: 'StorageArea',

      hide: true
    },
    {
      headerName: 'WareHouseName',
      field: 'WareHouseName',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'StorageAreaCode',
      field: 'StorageAreaCode',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'Storage Area Name',
      field: 'Storage_Area_Name',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'StorageAreaMasterID',
      field: 'StorageAreaMasterID',

      hide: true
    },
    {
      headerName: 'StorageAreaTypeID',
      field: 'StorageAreaTypeID',

      minWidth: 150,
      hide: true

    },
    {
      headerName: 'StorageAreaType',
      field: 'StorageAreaType',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,


    },
    {
      headerName: 'ParentStorageAreaID',
      field: 'ParentStorageAreaID',

      hide: true
    },
    {
      headerName: 'IsStorable',
      field: 'IsStorable',

      hide: true
    },
    {
      headerName: 'IsTemparatureControlled',
      field: 'IsTemparatureControlled',

      hide: true
    },

    {
      headerName: 'Preference',
      field: 'Preference',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'MinTempareture',
      field: 'MinTempareture',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'MaxTempareture',
      field: 'MaxTempareture',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'TemperatureCategory',
      field: 'TemperatureCategory',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'AreaLength',
      field: 'AreaLength',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'AreaHeight',
      field: 'AreaHeight',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'AreaBreadth',
      field: 'AreaBreadth',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },
    {
      headerName: 'StorageCapacity',
      field: 'StorageCapacity',
      filter: 'agTextColumnFilter', floatingFilter: true,
      minWidth: 150,

    },






  ]

}

export class StorageAreaDetail {
  StorageAreaID: number = 0;
  WareHouseID: number = 0;
  StorageAreaCode: number = 0;
  StorageArea: number = 0;
  StorageAreaMasterID: number = 0;
  StorageName: number = 0;
  StorageAreaTypeID: number = 0;
  StorageAreaType: number = 0;
  ParentStorageAreaID: number = 0;
  IsStorable: number = 0;
  IsTemparatureControlled: number = 0;
  Preference: number = 0;
  MinTempareture: number = 0;
  MaxTempareture: number = 0;
  TemperatureCategoryID: number = 0;
  AreaLength: number = 0;
  AreaHeight: number = 0;
  AreaBreadth: number = 0;
  StorageCapacity: number = 0;
}

