import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
import { ColDef,GridApi } from 'ag-grid-community';
import { ItemtypemastereditbuttonComponent } from './itemtypemastereditbutton/itemtypemastereditbutton.component';
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
  itemtypedid:number=0;
  frameworkComponents: any;
  UserID: any = 0;
  tab:any;
   private currentUser: User;

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.UserID = api.getUserID();
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: ItemtypemastereditbuttonComponent
      }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
     //ItemTypeID: [null, Validators.required],
      txtItemTypeCode: ['', Validators.required],
      txtItemType: ['', Validators.required],
    
     
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
      ItemTypeID: this.itemtypedid,
      ItemTypeCode: this.form.value.txtItemTypeCode,
      ItemType: this.form.value.txtItemType,
      IsActive: this.form.value.chIsActive,};

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
  // editItemType(record: any) {
   
  //   this.HideSaveButton = true;
  //   console.log(record);
  //   this.ItemTpID = record.ItemTypeID;
  //   const item: any = {
  //     txtItemType: record.ItemType,
  //     txtItemTypeCode: record.ItemTypeCode,
     
  //   };
  //   console.log("item", item);
  //   this.form.setValue(item);
  // }

  oneditItemType(d:any){

    const strItemTypeID=this.ItemTypeList.filter((x:any)=>x.ItemTypeID==d.rowData.ItemTypeID);
  
  
    console.log("on edit data",d);
    
   
   this.form.controls['txtItemTypeCode'].reset();
   this.form.controls['txtItemType'].reset()
  
  //fill the selected grid row data and patch to form fields
      itemtypeID:d.rowData["ItemTypeID"];
      this.form.patchValue({
        
        
        txtItemTypeCode :d.rowData["ItemTypeCode"],
        txtItemType :d.rowData["ItemType"],
        
      });
   
  this.itemtypedid=d.rowData["ItemTypeID"];//dapartmentdid used to save Customerid  on grid row selection 
  console.log("Wprk3333",d.rowData);//cellselaction array contain whole selected row of customerlist and place on 0th position of its own array
  this.tab = 0;
  
  
  }

  columnDefs: ColDef[] = [

    {  headerName: 'Action', width:100 ,floatingFilter: false,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.oneditItemType.bind(this),
      label: 'Click 1'
    }
  },
    { headerName:'ItemTypeID',field: 'ItemTypeID',hide:false, filter: 'agTextColumnFilter', floatingFilter: true,},
    { headerName:'ItemType',field: 'ItemType' ,  filter: 'agTextColumnFilter', floatingFilter: true, },
    { headerName:'ItemTypeCode',field: 'ItemTypeCode' ,filter: 'agTextColumnFilter', floatingFilter: true,},
    

   
 


   ]
  // columns: MtxGridColumn[] = [
  //   {
  //     header: "Action",
  //     field: 'Action',
  //     minWidth: 90,
  //     width: '90px',
  //     pinned: 'right',
  //     type: 'button',
  //     buttons: [
  //       {
  //         type: 'icon',
  //         icon: 'edit',
  //         tooltip: 'Edit',
  //         click: record => this.editItemType(record),
  //       }
  //     ]
  //   },

  //   {
  //     header: 'ItemTypeID',
  //     field: 'ItemTypeID',
  //     sortable: true,
  //     minWidth: 250,
  //   },
  //   {
  //     header: 'ItemType',
  //     field: 'ItemType',
  //     sortable: true,
  //     minWidth: 250,
  //   },
  //   {
  //     header: 'ItemTypeCode',
  //     field: 'ItemTypeCode',
  //     sortable: true,
  //     minWidth: 250,
  //   }
   
  // ]
}

