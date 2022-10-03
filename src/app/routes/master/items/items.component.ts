import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  form!: FormGroup; submitted = false; Reseted = false;
  TempCatList: any; ItemTypelist: any; ItemList: any;
  HideSaveButton = true;
  ItemID: Number = 0;
  UserID: any = 0;

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.UserID = api.getUserID();
}
ngOnInit(): void {
this.form = this.fb.group({

      ItemID: [0, Validators.required],
      ItemCode: ['', Validators.required],
      ItemName: ['', Validators.required],
      ItemTypeID: [null, Validators.required],
      TemperatureCategoryID: [null, Validators.required],
      IsActive: [true, Validators.required],
      CreatedBy: [this.UserID]
    });
    this.BindinfDataToList();
    this.BindDropdown();
}
  BindinfDataToList() {
    this.api.get('/item/Items_Select').subscribe(
      data => { this.ItemList = data; console.log("initialdata", this.ItemList) },
      error => { console.error(error); }
    );
  }

  async BindDropdown() {
    this.api.get('/item/itemtype').subscribe(
      data => { this.ItemTypelist = data },
      error => { console.error(error); }
    );

    this.api.get('/TemperatureCategory').subscribe(
      data => { this.TempCatList = data },
      error => { console.error(error); }
    );

    this.api.get('/item/itemlist').subscribe(
      data => { this.ItemList = data },
      error => { console.error(error); }
    );
  }
get f() { return this.form.controls; }

  onSubmit(formData: any) {
    this.submitted = true;
    if (this.form.invalid) {

      return;
    }
    else {
      this.HideSaveButton = true;
      {
        const item = formData.value;
        this.api.post('/item/save', item).subscribe(
          data => {
            this.dialog.alert(data[0], '', () => { window.location.reload(); });
            this.onReset();
            this.BindinfDataToList();
          },
          error => { console.error(error); }
        );
      }
    }

  }
    onReset() {
    this.form.reset();
    this.ItemID
    this.submitted = false;
    this.HideSaveButton = true;
    this.form.controls['chIsActive'].setValue(true);
    this.form.controls.TemperatureCategory.setValue("select");
    this.BindinfDataToList();

  }
  editProduct(record: any) {
    this.HideSaveButton = true;


    var temp: any = null;
    if (record.TemperatureCategory) {
      temp = this.TempCatList.filter((x: any) => x.TemperatureCategory === record.TemperatureCategory);

    }

    const item: any = {
      ItemID: record.ItemID,
      ItemCode: record.ItemCode == null ? '' : record.ItemCode,
      ItemName: record.ItemName,
      ItemTypeID: record.ItemTypeID == null ? null : record.ItemTypeID,
      TemperatureCategoryID: temp == undefined ? null : temp[0].TemperatureCategoryID,
      IsActive: record.IsActive,
      CreatedBy: this.UserID,
    }
    this.form.setValue(item);
  }
columns: MtxGridColumn[] = [
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
          click: record => this.editProduct(record),
        }
      ]
    },
    {
      header: 'ItemID',
      field: 'ItemID',
      sortable: true,
      hide: true
    },
    {
      header: 'ItemCode',
      field: 'ItemCode',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'ItemName',
      field: 'ItemName',
      sortable: true,
      minWidth: 250,

    },
    {
      header: 'ItemTypeID',
      field: 'ItemTypeID',
      hide: true
    },
    {
      header: 'ItemType',
      field: 'ItemType',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'TemperatureCategoryID',
      field: 'TemperatureCategoryID',
      hide: true
    },
    {
      header: 'TemperatureCategory',
      field: 'TemperatureCategory',
      sortable: true,
      minWidth: 200,
    },
    {
      header: 'IsActive',
      field: 'IsActive',
      sortable: true,
      minWidth: 120,
    }

  ]
}
