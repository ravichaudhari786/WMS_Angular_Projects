import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
import { ThisReceiver } from '@angular/compiler';
import { ColDef, GridApi } from 'ag-grid-community';
@Component({
  selector: 'app-storage-area',
  templateUrl: './storage-area.component.html',
  styleUrls: ['./storage-area.component.scss']
})
export class StorageAreaComponent implements OnInit {
  private currentUser: User;
  tab = 0;
  form!: FormGroup; StorageAreaList: any; TempCatList: any;
  UserID: any = 0; StorageAreaTypeList: any; MinMaxList: any;
  StorageAreaGridList: any = {};
  StorageAreaDetails: Array<StorageAreaDetail> = [];
  submitted = false;
  StorageAreaID: number = 0;
  SaveStorageareaData: any = {};
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
  }

  ngOnInit(): void {
    this.form = this.fb.group({

      Storage_Area_Name: ['', Validators.required],
      StorageAreaCode: ['', Validators.required],
      StorageAreaTypeID: [null, Validators.required],
      Preference: [null, Validators.required],
      TemperatureCategoryID: [null, Validators.required],
      MinTempareture: [0, Validators.required],
      MaxTempareture: [0, Validators.required],
      AreaLength: [null, Validators.required],
      AreaHeight: [null, Validators.required],
      AreaBreadth: [null, Validators.required],
      StorageCapacity: [null, Validators.required],
      IsStorable: [true, Validators.required],
      IsTemparatureControlled: [true, Validators.required],
      ParentStorageAreaID: [0, Validators.required],
      StorageArea: ['', Validators.required],
      StorageAreaID: [0, Validators.required],
      StorageAreaMasterID: [0, Validators.required],
      StorageAreaType: ['', Validators.required],
      StorageName: [null, Validators.required],
      WareHouseID: [0, Validators.required],
      WareHouseName: ['', Validators.required],

      createdBy: [this.UserID]
    });
    // this.form = this.fb.group({
    //   StorageAreaID: [0, Validators.required],
    //   WareHouseID: [0, Validators.required],
    //   WareHouseName: ['', Validators.required],
    //   StorageAreaCode: ['', Validators.required],
    //   StorageArea: ['', Validators.required],
    //   StorageAreaMasterID: [0, Validators.required],
    //   Storage_Area_Name: ['', Validators.required],
    //   StorageName: [null, Validators.required],
    //   StorageAreaTypeID: [0, Validators.required],
    //   StorageAreaType: ['', Validators.required],
    //   ParentStorageAreaID: [0, Validators.required],
    //   IsStorable: [true, Validators.required],
    //   IsTemparatureControlled: [true, Validators.required],
    //   Preference: [0, Validators.required],
    //   MinTempareture: [0, Validators.required],
    //   MaxTempareture: [0, Validators.required],
    //   TemperatureCategoryID: [0, Validators.required],
    //   AreaLength: [0, Validators.required],
    //   AreaHeight: [0, Validators.required],
    //   AreaBreadth: [0, Validators.required],
    //   StorageCapacity: [0, Validators.required],
    //   createdBy: [this.currentUser.userId],
    // })
    this.BindDropdown()
    //console.log(this.StorageAreaList)
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
  // OnAdd() {
  //   this.submitted = true;
  //   // if (this.form.invalid) {
  //   //   //alert("invalid form");
  //   //   return;
  //   // }
  //   // else {
  //   this.StorageAreaGridList = [];
  //   this.StorageAreaGridList = {
  //     StorageAreaID: this.form.value.StorageAreaID,
  //     WareHouseID: this.currentUser.warehouseId,
  //     StorageAreaCode: this.form.value.StorageAreaCode,
  //     StorageArea: this.form.value.StorageArea,
  //     StorageAreaMasterID: Number(1),
  //     StorageName: '',//this.form.value.StorageName,
  //     StorageAreaTypeID: Number(this.form.value.StorageAreaTypeID),
  //     StorageAreaType: '',//this.form.value.StorageAreaType,
  //     ParentStorageAreaID: Number(1),
  //     IsStorable: this.form.value.IsStorable,
  //     IsTemparatureControlled: this.form.value.IsTemparatureControlled,
  //     Preference: this.form.value.Preference,
  //     MinTempareture: this.form.value.MinTempareture,
  //     MaxTempareture: this.form.value.MaxTempareture,
  //     TemperatureCategoryID: Number(this.form.value.TemperatureCategoryID),
  //     AreaLength: Number(this.form.value.AreaLength),
  //     AreaHeight: Number(this.form.value.AreaHeight),
  //     AreaBreadth: Number(this.form.value.AreaBreadth),
  //     StorageCapacity: Number(this.form.value.StorageCapacity),
  //   };
  //   this.StorageAreaDetails.push(this.StorageAreaGridList);
  //   //this.StorageAreaGridList = Adddatavalue;
  //   //this.StorageAreaGridList.slice();
  //   console.log(this.StorageAreaGridList)
  //   this.SaveStorageareaData = {
  //     warehouseID: this.currentUser.warehouseId,
  //     StorageAreaID: 0,
  //     cls_TD_StorageAreaS: this.StorageAreaDetails,
  //     createdBy: this.currentUser.userId,
  //     BlockID: 1
  //   };
  //   this.submitted = true;

  //   this.api.post('/Storage/StorageAreas_Insert', this.SaveStorageareaData).subscribe(
  //     data => {
  //       data;
  //       alert(data);
  //     },
  //     error => { console.error(error); }
  //   );
  //   // }

  // }
  //get f()  { return this.form.controls; }
  // onStorageSave(formData: any) {
  //   console.log(this.form);
  //   this.submitted = true;
  //   if (this.form.invalid) {
  //     alert("invalid form");
  //     return;
  //   }
  //   else {
  //     alert("valid ");
  //       this.StorageAreaGridList = [];
  //   this.StorageAreaGridList = {
  //     StorageAreaID: this.form.value.StorageAreaID,
  //     WareHouseID: this.currentUser.warehouseId,
  //     StorageAreaCode: this.form.value.StorageAreaCode,
  //     StorageArea: this.form.value.StorageArea,
  //     StorageAreaMasterID: Number(1),
  //     StorageName: '',//this.form.value.StorageName,
  //     StorageAreaTypeID: Number(this.form.value.StorageAreaTypeID),
  //     StorageAreaType: '',//this.form.value.StorageAreaType,
  //     ParentStorageAreaID: Number(1),
  //     IsStorable: this.form.value.IsStorable,
  //     IsTemparatureControlled: this.form.value.IsTemparatureControlled,
  //     Preference: this.form.value.Preference,
  //     MinTempareture: this.form.value.MinTempareture,
  //     MaxTempareture: this.form.value.MaxTempareture,
  //     TemperatureCategoryID: Number(this.form.value.TemperatureCategoryID),
  //     AreaLength: Number(this.form.value.AreaLength),
  //     AreaHeight: Number(this.form.value.AreaHeight),
  //     AreaBreadth: Number(this.form.value.AreaBreadth),
  //     StorageCapacity: Number(this.form.value.StorageCapacity),
  //   };
  //   this.StorageAreaDetails.push(this.StorageAreaGridList);

  //   console.log(this.StorageAreaGridList)
  //   this.SaveStorageareaData = {
  //     warehouseID: this.currentUser.warehouseId,
  //     StorageAreaID: 0,
  //     cls_TD_StorageAreaS: this.StorageAreaDetails,
  //     createdBy: this.currentUser.userId,
  //     BlockID: 1
  //   };
  //   this.submitted = true;
  //   console.log(this.SaveStorageareaData);
  //   this.api.post('/Storage/StorageAreas_Insert', this.SaveStorageareaData).subscribe(
  //     data => {
  //       data;
  //       alert(data);
  //     },
  //     error => { console.error(error); });

  // }
  // }
  get f() { return this.form.controls; }

  onSubmit(formData: any) {
    this.submitted = true;
    console.log(this.form);
    if (this.form.invalid) {
      //alert("invalid form");
      return;
    }
    else {
      alert("valid ");
      this.StorageAreaGridList = [];
      this.StorageAreaGridList = {
        StorageAreaID: this.form.value.StorageAreaID,
        WareHouseID: this.currentUser.warehouseId,
        Storage_Area_Name: this.form.value.Storage_Area_Name,
        StorageAreaCode: this.form.value.StorageAreaCode,
        StorageArea: this.form.value.StorageArea,
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
        StorageAreaID: 0,
        cls_TD_StorageAreaS: this.StorageAreaDetails,
        createdBy: this.currentUser.userId,
        BlockID: 1
      };
      this.submitted = true;
      console.log(this.SaveStorageareaData);
      this.api.post('/Storage/StorageAreas_Insert', this.SaveStorageareaData).subscribe(
        data => {
          data;
          alert(data);
        },
        error => { console.error(error); });



    }
  }
  tabchange(event: any) {
    this.tab = event;
  }

  editstoragearea(record: any) {
    console.log(record);

    const item: any = {

      AreaBreadth: record.AreaBreadth,
      AreaHeight: record.AreaHeight,
      AreaLength: record.AreaLength,
      IsStorable: record.IsStorable,
      IsTemparatureControlled: record.IsTemparatureControlled,
      MaxTempareture: record.MaxTempareture,
      MinTempareture: record.MinTempareture,
      ParentStorageAreaID: record.ParentStorageAreaID,
      Preference: record.Preference,
      StorageArea: record.Storage_Area_Name,
      StorageAreaCode: record.StorageAreaCode,
      StorageAreaID: record.StorageAreaID,
      StorageAreaMasterID: record.ParentStorageAreaID,
      StorageAreaType: record.StorageAreaType,
      StorageAreaTypeID: record.StorageAreaTypeID == null ? null : record.StorageAreaTypeID,
      StorageCapacity: record.StorageCapacity,
      StorageName: record.StorageName,
      Storage_Area_Name: record.Storage_Area_Name,
      TemperatureCategoryID: record.TemperatureCategoryID == null ? null : record.TemperatureCategoryID,
      WareHouseID: record.WareHouseID,
      WareHouseName: record.WareHouseName,
      createdBy: this.UserID,


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
        console.log(data);
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
  StorageArea1: MtxGridColumn[] = [
    {
      header: "Action",
      field: 'Action',
      minWidth: 90,
      width: '90px',
      pinned: 'right',

      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: 'Edit',
          click: record => this.editstoragearea(record),

        }
      ]
    },
    {
      header: 'StorageAreaID',
      field: 'StorageAreaID',

      hide: true
    },

    {
      header: 'WareHouseID',
      field: 'WareHouseID',

      hide: true
    },
    {
      header: 'StorageArea',
      field: 'StorageArea',

      hide: true
    },
    {
      header: 'WareHouseName',
      field: 'WareHouseName',

      minWidth: 150,

    },
    {
      header: 'StorageAreaCode',
      field: 'StorageAreaCode',

      minWidth: 150,

    },
    {
      header: 'Storage Area Name',
      field: 'Storage_Area_Name',

      minWidth: 150,

    },
    {
      header: 'StorageAreaMasterID',
      field: 'StorageAreaMasterID',

      hide: true
    },
    {
      header: 'StorageAreaTypeID',
      field: 'StorageAreaTypeID',

      minWidth: 150,
      hide: true

    },
    {
      header: 'StorageAreaType',
      field: 'StorageAreaType',

      minWidth: 150,


    },
    {
      header: 'ParentStorageAreaID',
      field: 'ParentStorageAreaID',

      hide: true
    },
    {
      header: 'IsStorable',
      field: 'IsStorable',

      hide: true
    },
    {
      header: 'IsTemparatureControlled',
      field: 'IsTemparatureControlled',

      hide: true
    },

    {
      header: 'Preference',
      field: 'Preference',

      minWidth: 150,

    },
    {
      header: 'MinTempareture',
      field: 'MinTempareture',

      minWidth: 150,

    },
    {
      header: 'MaxTempareture',
      field: 'MaxTempareture',

      minWidth: 150,

    },
    {
      header: 'TemperatureCategory',
      field: 'TemperatureCategory',

      minWidth: 150,

    },
    {
      header: 'AreaLength',
      field: 'AreaLength',

      minWidth: 150,

    },
    {
      header: 'AreaHeight',
      field: 'AreaHeight',

      minWidth: 150,

    },
    {
      header: 'AreaBreadth',
      field: 'AreaBreadth',

      minWidth: 150,

    },
    {
      header: 'StorageCapacity',
      field: 'StorageCapacity',

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

