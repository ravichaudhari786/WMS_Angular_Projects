import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';

@Component({
  selector: 'app-state-city',
  templateUrl: './state-city.component.html',
  styleUrls: ['./state-city.component.scss']
})
export class StateCityComponent implements OnInit {
  form!: FormGroup;
  form2!: FormGroup;
  tab = 0;
   StateList: any; UserID: any = 0;
  submitted = false; submitted2 = false; SaveData: any = {};
  private currentUser: User; Citylist: any; SaveData2: any = {};

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      StateID: [0, Validators.required],
      State: ['', Validators.required],
      StateCode: ['', Validators.required],
      CreatedBy: [this.UserID],
      GstCode: ['', Validators.required],

    })

    this.form2 = this.fb.group({
      CityID: [0, Validators.required],
      City: ['', Validators.required],
      StateID: ['', Validators.required],
      CreatedBy: [this.UserID],

    })




    this.BindDropdown();
  }

  get f() { return this.form.controls; }

  onStateSave(formData: any) {

    this.submitted = true;
    if (this.form.invalid) {
      //alert("invalid form");
      return;
    }
    else {
      this.SaveData = {
        StateID: this.form.value.StateID,
        State: this.form.value.State,
        StateCode: this.form.value.StateCode,
        GstCode: this.form.value.GstCode,
        CreatedBy: this.currentUser.userId
      }
      this.api.post('/City/States_insert', this.SaveData).subscribe(
        data => {
          this.dialog.alert(data[0], '', () => { window.location.reload(); });
          // window.location.reload();
        },
        error => { console.error(error); }
      );
    }
  }

  onCitySave(formData: any) {


    this.submitted2 = true;
    if (this.form2.invalid) {
      //alert("invalid form");
      return;
    }
    else {
      this.SaveData2 = {
        CityID: this.form2.value.CityID,
        City: this.form2.value.City,
        StateID: this.form2.value.StateID,
        CreatedBy: this.currentUser.userId
      }
      console.log(this.SaveData2);
      this.api.post('/City/Cities_Insert', this.SaveData2).subscribe(
        data => {
          this.dialog.alert(data[0], '', () => { window.location.reload(); });
          // window.location.reload();
        },
        error => { console.error(error); }
      );
    }
  }





  tabchange(event: any) {
    this.tab = event;
  }

  async BindDropdown() {
    this.api.get('/City/States_Select').subscribe(
      data => { this.StateList = data },
      error => { console.error(error); }
    );

    this.api.get('/City/Cities_Select').subscribe(
      data => { this.Citylist = data }, 
       error => { console.error(error); }
    );





  }

  editState(record: any) {

    const item: any = {

      StateID: record.StateID,
      State: record.State,
      StateCode: record.StateCode,
      GstCode: record.GstCode,
      CreatedBy: this.currentUser.userId,

    }
    this.form.setValue(item);
    
    this.tab = 0;
  }


  editCity(record: any) {
    const item: any = {

      CityID: record.CityID,
      City: record.City,
      StateID: record.StateID,
      CreatedBy:this.currentUser.userId,

    }
    this.form.setValue(item);
    console.log(this.form.value);
    this.tab = 0;


  }


  StateColumn: MtxGridColumn[] = [
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
          click: record => this.editState(record),

        }
      ]
    },
    {
      header: 'StateID',
      field: 'StateID',
      sortable: true,
      hide: true
    },
    {
      header: 'State',
      field: 'State',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'StateCode',
      field: 'StateCode',
      sortable: true,
      minWidth: 250,

    },
    {
      header: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 250,

    },

    {
      header: 'GstCode',
      field: 'GstCode',
      sortable: true,
      minWidth: 120,
    },
  ]


  CityColumn: MtxGridColumn[] = [
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
          click: record => this.editCity(record),

        }
      ]
    },
    {
      header: 'CityID',
      field: 'CityID',
      sortable: true,
      hide: true
    },
    {
      header: 'City',
      field: 'City',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'state',
      field: 'state',
      sortable: true,
      minWidth: 250,

    },
    {
      header: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 250,

    },


  ]
}
