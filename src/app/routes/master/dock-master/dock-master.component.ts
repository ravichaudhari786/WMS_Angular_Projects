import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
import { ColDef, GridApi } from 'ag-grid-community';
import { DockMasterEditButtonComponent } from './dock-master-edit-button/dock-master-edit-button.component';
@Component({
  selector: 'app-dock-master',
  templateUrl: './dock-master.component.html',
  styleUrls: ['./dock-master.component.scss']
})
export class DockMasterComponent implements OnInit {

  form!: FormGroup; submitted = false; DockList: any
  SaveData: any = {};
  frameworkComponents: any;
  private currentUser: User;
  dataSource = new MatTableDataSource<any>();
  tab = 0;
  UserID: any = 0;
  DocID:number=0;
  //dockID!: FormControl;
  HideSaveButton = true;

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: DockMasterEditButtonComponent,
    }
  }


  ngOnInit(): void {

    this.form = this.fb.group({

      // dockID: [0, Validators.required],
      dockName: ["", Validators.required],
      dockNo: ["", Validators.required],
      //  wareHouseID: [null, Validators.required],
      //isActive: [true, Validators.required],
      CreatedBy: [this.UserID],


    });

    this.BindDropdown();
    //this.currentUser=this.api.getCurrentUser();
  }

  get f() { return this.form.controls; }

  onSubmit(formData: any) {
   console.log(formData);
    this.submitted = true;
    if (this.form.invalid) {
      // this.dialog.alert("invalid Form")
   
     return;
    }
    else
    {
      this.HideSaveButton = false;
      this.SaveData = {
      dockID:this.DocID,
      dockName: this.form.value.dockName,
      dockNo: this.form.value.dockNo,
      isActive: true,
      wareHouseID: this.currentUser.warehouseId,
    }
    // console.log(this.SaveData);
    this.api.post('/DockMaster/Dock_insert', this.SaveData).subscribe(
      data => {
        this.dialog.alert(data[0], '',);
      
        // console.log(this.form);
        this.BindDropdown();
        // window.location.reload();
        this.form.reset();
        this.form.controls['dockName'].setErrors(null);
        this.form.controls['dockNo'].setErrors(null);
      },
      error => { console.error(error); }
    );
     }
  }
  // ResetForm(){
  //   this.DocID=0;
  //   this.form.reset();
  //   this.HideSaveButton = true;
  //   this.submitted = false;
  //   this.BindDropdown();
  // }

  async BindDropdown() {
    this.api.get('/DockMaster/Dock_Select').subscribe(
      data => { this.DockList = data },
      error => { console.error(error); }
    );
  }

  tabchange(event: any) {
    this.tab = event;
  }

  editProduct(record: any) {
    console.log(record)
    this.DocID=record.rowData.DockID;
    const item: any = {     
      dockNo: record.rowData.DockNo == null ? '' : record.rowData.DockNo,
      dockName: record.rowData.DockName,     
      CreatedBy: record.rowData.CreatedBy,
      //isActive: true
    }
    this.form.setValue(item);
    // console.log(this.form.value);
    this.tab = 0;
  }


  columns: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.editProduct.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'dockID',
      field: 'dockID',
      sortable: true,
      hide: true
    },
    {
      headerName: 'DockNo',
      field: 'DockNo',
      sortable: true,
      minWidth: 170,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'DockName',
      field: 'DockName',
      sortable: true,
      minWidth: 250,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'WareHouseName',
      field: 'WareHouseName',
      sortable: true,
      minWidth: 250,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },

    {
      headerName: 'wareHouseID',
      field: 'wareHouseID',
      hide: true
    },

    {
      headerName: 'CreatedBy',
      field: 'CreatedBy',
      sortable: true,
      minWidth: 120,
    },


    {
      headerName: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 120,
    }



  ]


}
