import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { User } from '@core/authentication/interface';
import { Console } from 'console';
import { ColDef, GridApi } from 'ag-grid-community';
import { StatecityEditbuttonComponent } from './statecity-editbutton/statecity-editbutton.component';

@Component({
  selector: 'app-state-city',
  templateUrl: './state-city.component.html',
  styleUrls: ['./state-city.component.scss']
})
export class StateCityComponent implements OnInit {
  form!: FormGroup;
  form2!: FormGroup;
  tab = 0;
  frameworkComponents: any;
  StateList: any; UserID: any = 0; SaveData: any = {};
  submitted = false; submitted2 = false;
  HideSaveButton = true; HideSaveButton2 = true;
  StateID: number = 0; CityID: number = 0;
  private currentUser: User; Citylist: any; SaveData2: any = {};

  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: StatecityEditbuttonComponent,
    }
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      // StateID: [0, Validators.required],
      State: ['', Validators.required],
      StateCode: ['', Validators.required],
      CreatedBy: [this.UserID],
      GstCode: ['', Validators.required],

    })

    this.form2 = this.fb.group({
      // CityID: [0, Validators.required],
      City: ['', Validators.required],
      CStateID: [null, Validators.required],
      CreatedBy: [this.UserID],

    })




    this.BindDropdown();
  }

  get f() { return this.form.controls; }
  get f2() { return this.form2.controls; }

  onStateSave(formData: any) {
    console.log(formData)
    this.submitted = true;
    if (this.form.invalid) {
      //alert("invalid form");
      return;
    }
    else {
      this.HideSaveButton = false;
      this.SaveData = {
        StateID: this.StateID,
        State: this.form.value.State,
        StateCode: this.form.value.StateCode,
        GstCode: this.form.value.GstCode,
        CreatedBy: this.currentUser.userId
      }
      console.log("save",this.SaveData);
      this.api.post('/City/States_insert', this.SaveData).subscribe(
        data => {
          this.dialog.alert(data[0], '',);
          this.BindDropdown();
          this.form.reset();
          this.form.controls['State'].setErrors(null);
          this.form.controls['StateCode'].setErrors(null);
          this.form.controls['GstCode'].setErrors(null);
          
          // window.location.reload();
        },
        error => { console.error(error); }
      );
    }
  }

  onCitySave(formData: any) {
    console.log(formData)
    this.HideSaveButton2 = false;


    this.submitted2 = true;
    if (this.form2.invalid) {
      // alert("invalid form");
      return;
    }
    else {
      this.HideSaveButton2 = false;
      this.SaveData2 = {
        CityID: this.CityID,
        City: this.form2.value.City,
        StateID: this.form2.value.CStateID,
        CreatedBy: this.currentUser.userId
      }
      console.log(this.SaveData2);
      this.api.post('/City/Cities_Insert', this.SaveData2).subscribe(
        data => {
          this.dialog.alert(data[0], '',);
          
          this.BindDropdown();
          this.form.reset();
          this.form.controls['City'].setErrors(null);
          this.form.controls['CStateID'].setErrors(null);
          
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
  // ResetForm() {
  //   this.StateID = 0;
  //   this.form.reset();
  //   this.HideSaveButton = true;
  //   this.submitted = false;
  //   this.BindDropdown();

  // }
  // ResetForm2() {
  //   this.CityID = 0;
  //   this.form2.reset();
  //   this.HideSaveButton2 = true;
  //   this.submitted2 = false;
  //   this.BindDropdown();

  // }

  editState(record: any) {
    console.log(record);
    this.StateID = record.StateID;
    const item: any = {

      // StateID: record.StateID,
      State: record.rowData.State,
      StateCode: record.rowData.StateCode,
      GstCode: record.rowData.GstCode,
      CreatedBy: this.currentUser.userId,

    }
    this.form.setValue(item);

    this.tab = 0;
  }


  editCity(record: any) {
    console.log(record);
    this.CityID = record.CityID;
    const cityitem: any = {

      // CityID: record.CityID,
      City: record.rowData.City,
      CStateID: record.rowData.StateID,
      CreatedBy: this.currentUser.userId,

    }
    console.log(cityitem);
    this.form2.setValue(cityitem);
    console.log(this.form2.value);
    this.tab = 1;


  }


  StateColumn: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.editState.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'StateID',
      field: 'StateID',
      sortable: true,
      hide: true
    },
    {
      headerName: 'State',
      field: 'State',
      sortable: true,
      minWidth: 170,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'StateCode',
      field: 'StateCode',
      sortable: true,
      minWidth: 250,
      filter: 'agTextColumnFilter', floatingFilter: true,

    },
    {
      headerName: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 250,

    },

    {
      headerName: 'GstCode',
      field: 'GstCode',
      sortable: true,
      minWidth: 120,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
  ]


  CityColumn: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick2: this.editCity.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'CityID',
      field: 'CityID',
      sortable: true,
      hide: true
    },
    {
      headerName: 'City',
      field: 'City',
      sortable: true,
      minWidth: 170,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'state',
      field: 'state',
      sortable: true,
      minWidth: 250,
      filter: 'agTextColumnFilter', floatingFilter: true,
    },
    {
      headerName: 'CreatedDate',
      field: 'CreatedDate',
      sortable: true,
      minWidth: 250,

    },


  ]
}
