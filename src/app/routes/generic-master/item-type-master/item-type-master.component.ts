import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
@Component({
  selector: 'app-item-type-master',
  templateUrl: './item-type-master.component.html',
  styleUrls: ['./item-type-master.component.scss']
})
export class ItemTypeMasterComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  ItemTypeList: any; 
  HideSaveButton = true;
  ItemTpID: number = 0;
  UserID: any = 0;
   private currentUser: User;

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.UserID = api.getUserID();
    this.currentUser = this.api.getCurrentUser();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
     //ItemTypeID: [null, Validators.required],
      txtItemTypeCode: ['', Validators.required],
      txtItemType: ['', Validators.required]
     
    });
    this.BindinfDataToList();
  }
  BindinfDataToList() {
    this.api.get('/ItemTypeMaster/ItemTypeMaster_Select').subscribe(
      data => { this.ItemTypeList = data;
      },
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
     
    }
    
    const Item = {
      ItemTypeID: this.ItemTpID,
      ItemTypeCode: this.form.value.txtItemTypeCode,
      ItemType: this.form.value.txtItemType,
    };

    console.log("Item", Item);
    this.api.post('/ItemTypeMaster/ItemTypeMaster_Insert_Update', Item).subscribe(
      data => {

        this.dialog.alert(data[0], '', () => { window.location.reload(); });
        this.onReset();
        this.BindinfDataToList();
      },
      error => { console.error(error); }
    );
  }
 onReset() {
    this.form.reset();
    this.ItemTpID = 0;
    this.submitted = false;
    this.HideSaveButton = true;
   
    this.BindinfDataToList();
  }
  editItemType(record: any) {
   
    this.HideSaveButton = true;
    console.log(record);
    this.ItemTpID = record.ItemTypeID;
    const item: any = {
      txtItemType: record.ItemType,
      txtItemTypeCode: record.ItemTypeCode,
     
    };
    console.log("item", item);
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
          click: record => this.editItemType(record),
        }
      ]
    },

    {
      header: 'ItemTypeID',
      field: 'ItemTypeID',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'ItemType',
      field: 'ItemType',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'ItemTypeCode',
      field: 'ItemTypeCode',
      sortable: true,
      minWidth: 250,
    }
   
  ]
}

