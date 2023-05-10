import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { Console } from 'console';
import { ColDef, GridApi } from 'ag-grid-community';
import { User } from '@core/authentication/interface';
import { CompanyEditButtonComponent } from './company-edit-button/company-edit-button.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  tab = 0; dataSource = new MatTableDataSource<any>();
  UserID: any = 0; submitted = false;
  form!: FormGroup; CompanyList: any; CitiesList: any; SaveData2: any = {};HideSaveButton = true;
  private currentUser: User;
  CompanyID:number=0;
  frameworkComponents: any;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: CompanyEditButtonComponent,
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      // CompanyID: [0, Validators.required],
      CompanyName: ['', Validators.required],
      CompanyCode: ['', Validators.required],
      ParentCompanyID: [null,],
      MobileNo: [null, Validators.required],
      ContactNo: [null, ],
      GSTINNo: [null, Validators.required],
      PANNo: [null, Validators.required],
      Address1: [null, Validators.required],
      Address2: [null,],
      Address3: [null,],
      CBCityID: [null],
      PinCode: [null, ],
      ParentCompany:[null],
      CreatedBy: [this.UserID],
    });

    this.BindDropdown();
  }


  async BindDropdown() {
    this.api.get('/Company_Select/Company_Select1').subscribe(
      data => { this.CompanyList = data; console.log("company",data) },
      error => { console.error(error); }
    );
    this.api.get('/City/Cities_Select').subscribe(
      data => { this.CitiesList = data; },
      error => { console.error(error); }
    );

}
// ResetForm(){
//   this. CompanyID=0;
//   this.form.reset();
//   this.HideSaveButton = true;
//   this.submitted = false;
//   this.BindDropdown();
// }
onSubmit(formData:any){
  console.log(formData)
  this.submitted = true;
  if (this.form.invalid) {
    
    //alert("invalid form");
    return;
  }
  else {
    this.HideSaveButton = false;
    this.SaveData2 = {
      CompanyID :this.CompanyID,
      Companyname :this.form.value.CompanyName,
      CompanyCode :this.form.value.CompanyCode,
      Address1 :this.form.value.Address1,
      Address2 :this.form.value.Address2,
      Address3 :this.form.value.Address3,
      CityId :this.form.value.CBCityID,
      Pincode :this.form.value.PinCode,
      ContactNo :this.form.value.ContactNo,
      MobileNo :this.form.value.MobileNo,
      Gstno :this.form.value.GSTINNo,
      Panno :this.form.value.PANNo,
     ParentCompanyId :this.form.value.ParentCompanyID,
     createdby :this.currentUser.userId,

     
    }
    console.log(this.SaveData2);
    this.api.post('/Company_Select/Company_Insert_Update', this.SaveData2).subscribe(
      data => {
        this.dialog.alert(data[0], '',);
        // this.ResetForm();
        this.BindDropdown();
        this.form.reset();
        this.form.controls['CompanyName'].setErrors(null);
        this.form.controls['CompanyCode'].setErrors(null);
        this.form.controls['MobileNo'].setErrors(null);
        this.form.controls['GSTINNo'].setErrors(null);
        this.form.controls['PANNo'].setErrors(null);
        this.form.controls['Address1'].setErrors(null);
        // window.location.reload();
      },
      error => { console.error(error); }
    );
  }

}
get f() { return this.form.controls; }

  tabchange(event: any) {
    this.tab = event;
  }

  editCompany(record: any) {
    console.log(record);
    this.CompanyID=record.CompanyID;
    const item: any = {

      // CompanyID: record.CompanyID,
      CompanyName: record.rowData.CompanyName,
      CompanyCode: record.rowData.CompanyCode,
      ParentCompanyID: record.rowData.ParentCompanyID,
      ParentCompany: record.rowData.ParentCompanyID,
      MobileNo: record.rowData.MobileNo,
      ContactNo: record.rowData.ContactNo,
      GSTINNo: record.rowData.GSTINNo,
      PANNo: record.rowData.ParentCompany,
      Address1: record.rowData.Address1,
      Address2: record.rowData.Address2,
      Address3: record.rowData.Address3,
      CBCityID: record.rowData.CityID==null? 0 :record.rowData.CityID,
      PinCode: record.rowData.PinCode,
      CreatedBy:this.currentUser.userId,

    }
    this.form.setValue(item);
    
    this.tab = 0;
  }


  CompanylistColumn: ColDef[] = [
    {
      headerName: 'Action', width: 100, floatingFilter: false,
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        // onClick: this.onBtnClick1.bind(this),
        onClick: this.editCompany.bind(this),
        label: 'Click 1'
      }
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
      minWidth: 170,
    },
    {
      headerName: 'CompanyCode',
      field: 'CompanyCode',
      sortable: true,
      minWidth: 150,

    },
    {
      headerName: 'ParentCompanyID',
      field: 'ParentCompanyID',
      sortable: true,
      hide: true
    },
    {
      headerName: 'ParentCompany',
      field: 'ParentCompany',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'MobileNo',
      field: 'MobileNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'ContactNo',
      field: 'ContactNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'GSTINNo',
      field: 'GSTINNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'PANNo',
      field: 'PANNo',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'Address1',
      field: 'Address1',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'Address2',
      field: 'Address2',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'Address3',
      field: 'Address3',
      sortable: true,
      minWidth: 250,
    },
    {
      headerName: 'City',
      field: 'City',
      sortable: true,
      minWidth: 150,
    },
    {
      headerName: 'PinCode',
      field: 'PinCode',
      sortable: true,
      minWidth: 150,
    },
  ]
  //abctest

}
