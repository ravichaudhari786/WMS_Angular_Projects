import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { Console } from 'console';
import { User } from '@core/authentication/interface';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  tab = 0; dataSource = new MatTableDataSource<any>();
  UserID: any = 0; submitted = false;
  form!: FormGroup; CompanyList: any; CitiesList: any; SaveData2: any = {};
  private currentUser: User;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
    this.currentUser = this.api.getCurrentUser();

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      CompanyID: [0, Validators.required],
      CompanyName: ['', Validators.required],
      CompanyCode: ['', Validators.required],
      ParentCompanyID: [null, Validators.required],
      MobileNo: [null, Validators.required],
      ContactNo: [null, Validators.required],
      GSTINNo: [null, Validators.required],
      PANNo: [null, Validators.required],
      Address1: [null, Validators.required],
      Address2: [null, Validators.required],
      Address3: [null, Validators.required],
      CityID: [null, Validators.required],
      PinCode: [null, Validators.required],
      ParentCompany:[null],
      CreatedBy: [this.UserID],
    });

    this.BindDropdown();
  }


  async BindDropdown() {
    this.api.get('/Company_Select/Company_Select').subscribe(
      data => { this.CompanyList = data; console.log(data) },
      error => { console.error(error); }
    );
    this.api.get('/City/Cities_Select').subscribe(
      data => { this.CitiesList = data; },
      error => { console.error(error); }
    );

}
onSubmit(formData:any){
  this.submitted = true;
  if (this.form.invalid) {
    //alert("invalid form");
    return;
  }
  else {
    this.SaveData2 = {
      CompanyID :this.form.value.CompanyID,
      Companyname :this.form.value.CompanyName,
      CompanyCode :this.form.value.CompanyCode,
      Address1 :this.form.value.Address1,
      Address2 :this.form.value.Address2,
      Address3 :this.form.value.Address3,
     CityId :this.form.value.CityID,
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
        this.dialog.alert(data[0], '', () => { window.location.reload(); });
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
    const item: any = {

      CompanyID: record.CompanyID,
      CompanyName: record.CompanyName,
      CompanyCode: record.CompanyCode,
      ParentCompanyID: record.ParentCompanyID,
      ParentCompany: record.ParentCompanyID,
      MobileNo: record.MobileNo,
      ContactNo: record.ContactNo,
      GSTINNo: record.GSTINNo,
      PANNo: record.ParentCompany,
      Address1: record.Address1,
      Address2: record.Address2,
      Address3: record.Address3,
      CityID: record.City,
      PinCode: record.PinCode,
      CreatedBy:this.currentUser.userId,

    }
    this.form.setValue(item);
    
    this.tab = 0;
  }


  CompanylistColumn: MtxGridColumn[] = [
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
          click: record => this.editCompany(record),
        }
      ]
    },
    {
      header: 'CompanyID',
      field: 'CompanyID',
      sortable: true,
      hide: true
    },
    {
      header: 'CompanyName',
      field: 'CompanyName',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'CompanyCode',
      field: 'CompanyCode',
      sortable: true,
      minWidth: 150,

    },
    {
      header: 'ParentCompanyID',
      field: 'ParentCompanyID',
      sortable: true,
      hide: true
    },
    {
      header: 'ParentCompany',
      field: 'ParentCompany',
      sortable: true,
      minWidth: 150,
    },
    {
      header: 'MobileNo',
      field: 'MobileNo',
      sortable: true,
      minWidth: 150,
    },
    {
      header: 'ContactNo',
      field: 'ContactNo',
      sortable: true,
      minWidth: 150,
    },
    {
      header: 'GSTINNo',
      field: 'GSTINNo',
      sortable: true,
      minWidth: 150,
    },
    {
      header: 'PANNo',
      field: 'PANNo',
      sortable: true,
      minWidth: 150,
    },
    {
      header: 'Address1',
      field: 'Address1',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'Address2',
      field: 'Address2',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'Address3',
      field: 'Address3',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'City',
      field: 'City',
      sortable: true,
      minWidth: 150,
    },
    {
      header: 'PinCode',
      field: 'PinCode',
      sortable: true,
      minWidth: 150,
    },
  ]

}
