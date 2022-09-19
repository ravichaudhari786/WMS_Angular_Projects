import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
@Component({
  selector: 'app-dock-master',
  templateUrl: './dock-master.component.html',
  styleUrls: ['./dock-master.component.scss']
})
export class DockMasterComponent implements OnInit {

  form!: FormGroup; submitted = false; DockList: any
  SaveData: any = {};
  private currentUser: User;
  dataSource = new MatTableDataSource<any>();
  tab = 0;
  UserID: any = 0;
  dockID!: FormControl;

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
  }


  ngOnInit(): void {

    this.form = this.fb.group({

      dockID: [0, Validators.required],
      dockName: ["", Validators.required],
      dockNo: ["", Validators.required],
      wareHouseID: [null, Validators.required],
      isActive: [true, Validators.required],
      CreatedBy: [this.UserID],


    });

    this.BindDropdown();
    //this.currentUser=this.api.getCurrentUser();
  }

  get f() { return this.form.controls; }

  onSubmit(formData: any) {
    console.log("Inside");
    this.submitted = true;
    if (this.form.invalid) {
   
     return;
    }
    else
    {
      this.SaveData = {
      dockID: this.form.value.dockID,
      dockName: this.form.value.dockName,
      dockNo: this.form.value.dockNo,
      isActive: true,
      wareHouseID: this.currentUser.warehouseId,
    }
    //console.log(this.SaveData);
    this.api.post('/DockMaster/Dock_insert', this.SaveData).subscribe(
      data => {
        this.dialog.alert(data[0], '', () => { window.location.reload(); });
        // window.location.reload();
      },
      error => { console.error(error); }
    );
     }
  }

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

    const item: any = {

      dockID: record.DockID,
      dockNo: record.DockNo == null ? '' : record.DockNo,
      dockName: record.DockName,
      wareHouseID: this.currentUser.warehouseId,
      CreatedBy: record.CreatedBy,
      isActive: true
    }
    this.form.setValue(item);
    console.log(this.form.value);
    this.tab = 0;
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
      header: 'dockID',
      field: 'dockID',
      sortable: true,
      hide: true
    },
    {
      header: 'DockNo',
      field: 'DockNo',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'DockName',
      field: 'DockName',
      sortable: true,
      minWidth: 250,

    },
    {
      header: 'WareHouseName',
      field: 'WareHouseName',
      sortable: true,
      minWidth: 250,

    },

    {
      header: 'wareHouseID',
      field: 'wareHouseID',
      hide: true
    },

    {
      header: 'CreatedBy',
      field: 'CreatedBy',
      sortable: true,
      minWidth: 120,
    },


    {
      header: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 120,
    }



  ]


}
