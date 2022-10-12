import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@core';
import { MatTableDataSource } from '@angular/material/table';
import { MtxDialog, MtxGridCellSelectionDirective, MtxGridColumn, MtxGridRowClassFormatter } from '@ng-matero/extensions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { count } from 'console';
import { User } from '@core/authentication/interface';
@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.scss']
})
export class CustomerMasterComponent implements OnInit {
  form!: FormGroup; submitted = false; Reseted = false;
  customerList: any;
  NameIniList: any;
  CustomerTypelist: any;
  CustomersList: any;
  HideAddButton:any;
  Statelist: any;
  Citylist: any;
  
  Ratelist: any;
  HideSaveButton = true;
  CountsID: number = 0;
  UserID: any = 0;
  Departmentlist: any;
  Designationlist: any;
  tab: any;

  // private currentUser: User;


  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) { }

  ngOnInit(): void {
    this.CustomerTypelist = [];
    this.form = this.fb.group({

      customer_id: [0, Validators.required],
      NameIniID: [null, Validators.required],
      txtCustomerName: ['', Validators.required],
      txtCustomerCode: ['', Validators.required],
      CustomerTypeID: [null, Validators.required],
      txtGroupName: ['', Validators.required],
      WarehouseID: [null, Validators.required],
      email: ['', Validators.required],
      txtAddress1: ['', Validators.required],
      txtAddress2: ['', Validators.required],
      StateID: [null, Validators.required],
      CityID: [null, Validators.required],
      txtPINCODE: ['', Validators.required],

      txtFSSAI: ['', Validators.required],
      txtGSTNO: ['', Validators.required],
      txtPanNo: ['', Validators.required],
      txtGSTStateCode: ['', Validators.required],
      txtStorageDiscount: ['', Validators.required],
      txtLabourDiscount: ['', Validators.required],
      txtRefferedBy: ['', Validators.required],
      IsActive: ['', Validators.required],
      CreatedBy: ['', Validators.required],
      CreatedDate: ['', Validators.required],
      ModifyBy: ['', Validators.required],
      ModifyDate: ['', Validators.required],
      RateListID: ['', Validators.required],
      txtContactName: ['', Validators.required],
      emails: ['', Validators.required],
      DepartmentID: ['', Validators.required],
      DesignationID: ['', Validators.required],
      txtMobileNo: ['', Validators.required],
      txtContactNo: ['', Validators.required],
      txtDocumentName:['',Validators.required],
      
      SendSms: [],
      SendEmail: [],




    });
  }

  get f() { return this.form.controls; }

  onSubmit(formData: any) { 
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }else{
      this.HideSaveButton = true;
      this.HideAddButton =true;
      const Customerdata = {
        // DesignationID: this.DesigID,
        // DesignationName: this.form.value.txtDesignationName,
        // DesignationCode: this.form.value.txtDesignationCode,
        // IsActive: this.form.value.chIsActive,
      }
    }
  }
  editCustomer(record: any) { }
  tabCustomerschange(e: any) {
    this.tab = e;
    ;
  }
  onKeyfilter(e: string) { }


  CustomerListcolumns: MtxGridColumn[] = [


    {
      header: 'ContactName',
      field: 'ContactName',
      sortable: true,
      minWidth: 250,

    },
    {
      header: 'DepartmentName',
      field: 'DepartmentName',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'DesignationName',
      field: 'DesignationName',
      sortable: true,
      minWidth: 120
    },
    {
      header: 'MobileNo',
      field: 'MobileNo',
      sortable: true,
      minWidth: 170
    },
    {
      header: 'ContactNo',
      field: 'ContactNo',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'EmailID',
      field: 'EmailID',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'SendSms',
      field: 'SendSms',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'SendEmail',
      field: 'SendEmail',
      sortable: true,
      minWidth: 170,
    },

  ]

  columnsCustomersList: MtxGridColumn[] = [


    {
      header: 'Initials',
      field: 'Initials',
      sortable: true,
      minWidth: 250,

    },
    {
      header: 'CustomerName',
      field: 'CustomerName',
      sortable: true,
      minWidth: 250,
    },
    {
      header: 'CustomerCode',
      field: 'CustomerCode',
      sortable: true,
      minWidth: 120
    },
    {
      header: 'CustomerType',
      field: 'CustomerType',
      sortable: true,
      minWidth: 170
    },
    {
      header: 'Address1',
      field: 'Address1',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'Address2',
      field: 'Address2',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'GroupName',
      field: 'GroupName',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'EmailID',
      field: 'EmailID',
      sortable: true,
      minWidth: 170,
    },
    {
      header: 'GSTStateCode',
      field: 'GSTStateCode',
      sortable: true,
      minWidth: 170,
    },

  ]

}
