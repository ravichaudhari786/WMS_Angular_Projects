import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { Column } from 'ag-grid-community';

@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.scss']
})
export class ServiceMasterComponent implements OnInit {

    form!: FormGroup; submitted = false; Reseted = false;
    StorageAreaTypeList: any; BillingCycleNameIList: any; ServiceList: any; ServiceTypelist :any;
    HideSaveButton = true;
    ItemID: Number = 0;
    UserID: any = 0;
    ServiceID: number = 0;
    ServiceTypeList: any;
  
    constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) {
      this.UserID = api.getUserID();
  }
  ngOnInit(): void {
  this.form = this.fb.group({
  
       
        txtServiceName: ['', Validators.required],
        txtServiceCode: ['', Validators.required],
        ServiceTypeID: [null, Validators.required],
        StorageAreaTypeID: [null, Validators.required],
        BillingCycleID: [null, Validators.required],
        IsActive: [true, Validators.required],
        
      });
      this.BindinfDataToList();
      this.BindDropdown();
  }
    BindinfDataToList() {
      this.api.get('/Services/Service_Select').subscribe(
        data => { this.ServiceList = data; },
        error => { console.error(error); }
      );
    }
    
  
    async BindDropdown() {
      this.api.get('/Service/serviceType').subscribe(
        data => { this.ServiceTypelist = data; },
        error => { console.error(error); }
      );
  
      this.api.get('/StorageAreaType/ServieceStorageAreaType').subscribe(
        data => { this.StorageAreaTypeList = data; },
        error => { console.error(error); }
      );
  
      this.api.get('/BillingCycles/BillingCycle_Select').subscribe(
        data => { this.BillingCycleNameIList = data;  },
        error => { console.error(error); }
      );
      
     }
  get f() { return this.form.controls; }
  
    onSubmit(formData: any) {
      console.log(this.form);
      this.submitted = true;
      if (this.form.invalid) {
  
        return;
      }
      else {
        this.HideSaveButton = false;
        {
          console.log("formData",formData);
          
     
 
          const dataitem={
            ServiceID:this.ServiceID,
            ServiceCode:formData.value.txtServiceCode,
            ServiceName:formData.value.txtServiceName,
            ServiceTypeID:formData.value.ServiceTypeID,
            HCNCode:'',
            BillingCycleID:formData.value.BillingCycleID,
            StorageAreaTypeID:formData.value.StorageAreaTypeID,
            IsActive: formData.value.IsActive,
            TaxID:0
          };
 
          this.api.post('/Services/Services_Insert', dataitem).subscribe(
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
      this.ServiceID =0;
      this.submitted = false;
      this.HideSaveButton = true;
      this.form.controls['chIsActive'].setValue(true);
  
      this.BindinfDataToList();
  
    }
    editService(record: any) {
      console.log("record",record);
      const Billingdata=this.BillingCycleNameIList.filter((x:any)=>x.BillingCyclesName==record.BillingCyclesName);
      const Servicedata=this.ServiceTypelist.filter((x:any)=>x.ServiceType==record.ServiceType);
      const Storagedata=this.StorageAreaTypeList.filter((x:any)=>x.ServiceName==record.ServiceName);
        
      this.HideSaveButton = true;
      this.submitted = false;  
      this.ServiceID=record.ServiceID;
  
      const item: any = {
      
        txtServiceName:record.ServiceName,
        txtServiceCode: record.ServiceCode==null?'':record.ServiceCode,      
        ServiceTypeID:Servicedata[0].ServiceTypeID,
        StorageAreaTypeID:Storagedata[0].StorageAreaTypeID==null?0:Storagedata[0].StorageAreaTypeID,
        BillingCycleID:Billingdata[0].BillingCycleID,   
        IsActive: record.IsActive,
       };

   
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
             click: record => this.editService(record),
          }
        ]
      },
      {
        header: 'ServiceID',
        field: 'ServiceID',
        sortable: true,
        hide: true
      },
      {
        header: 'ServiceName',
        field: 'ServiceName',
        sortable: true,
        minWidth: 250,
  
      },
      {
        header: 'ServiceCode',
        field: 'ServiceCode',
        sortable: true,
        minWidth: 170,
      },
      {
        header: 'ServiceType',
        field: 'ServiceType',
        sortable: true,
        minWidth: 250,
      },
      {
        header: 'StorageAreaType',
        field: 'StorageAreaType',
        sortable: true,
        minWidth: 250,
      },
      {
        header: 'BillingCyclesName',
        field: 'BillingCyclesName',
        sortable: true,
        minWidth: 250,
      },
      {
        header: 'HCNCode',
        field: 'HCNCode',
        hide: true,
        minWidth: 170,
      },
      {
        header: 'IsActive',
        field: 'IsActive',
        sortable: true,
        minWidth: 120,
      },
      {
        header: 'TaxID',
        field: 'TaxID',
        hide: true
      },
  
    ]
  }
