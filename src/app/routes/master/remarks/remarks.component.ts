import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService} from '@core';
import { MtxGridColumn } from '@ng-matero/extensions';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { InwardActionButtonComponent } from '../../process/inward/inward-action-button/inward-action-button.component';
import { ColDef, GridApi, GridOptions, RowDoubleClickedEvent } from 'ag-grid-community';
import { LocalStorageService } from '@shared';
@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.scss']
})
export class RemarksComponent implements OnInit {
  form!: FormGroup;
  processList:any=[];
  submitted = false;
  frameworkComponents: any;
  RemarksList: any = [];
  MyMenus:any;
  RemarksIDs:Number=0;
  ActiveFlag:boolean=true;
  currentUser:any;
  constructor(private fb: FormBuilder,private api:ApiService,public dialog: MtxDialog,
    private store: LocalStorageService) {
    this.frameworkComponents = {
      buttonRenderer: InwardActionButtonComponent,
    }
    this.form = this.fb.group({
      txtRemarks: ['', Validators.required],
      cbProcessID: [null, Validators.required],
    });

    
  }

  ngOnInit(): void {    
    this.MyMenus = this.api.getCurrentMenusForButton("Remarks");
    this.currentUser=this.api.getCurrentUser();
    console.log("currentUser",this.currentUser.userId)
    this.BindDropdown();
  }
  get f() { return this.form.controls; }

  async BindDropdown(){
    this.api.get('/Remarks/ProcessList').subscribe(
      data=>{this.processList=data;
      console.log("processList",data)},
      error=>{ console.error(error);}
    );

    this.api.get('/Remarks/Remarks_List').subscribe(
      data=>{this.RemarksList=data;
      console.log("RemarksList",data)},
      error=>{ console.error(error);}
    );
  }
  onSubmit(formData:any){    
    this.submitted = true;
    if (this.form.invalid) {
      for (const control of Object.keys(this.form.controls)) {
        this.form.controls[control].markAsTouched();
      }
      const controls = this.form.controls;
        for (const name in controls) {
            if (controls[name].invalid) {              
              document?.getElementById(String(name))?.focus();
            }
        }
     return;
    }else{
      const RemarkSaveData={
      "RemarksID":this.RemarksIDs,
      "Remarks":String(formData.value.txtRemarks),
      "ProcessID":Number(formData.value.cbProcessID),
      "IsActive":this.ActiveFlag,
      "CreatedBy":this.currentUser.userId
    };
    console.log("RemarkSaveData",RemarkSaveData);
    this.api.post('/Remarks/Remarks_insert',RemarkSaveData).subscribe(
      data=>{data;
        this.dialog.alert(data[0]);
        this.OnResetRemarks();
    },
      error=>{ console.error(error);}
    );
    }
  }
  OnRemarksActions(ActionData: any) {
    console.log("OnRemarksActions", ActionData.rowData);
    this.RemarksIDs= ActionData.rowData.RemarksID;
    this.ActiveFlag=ActionData.rowData.IsActive;
    const Editvalues={
      txtRemarks: ActionData.rowData.Remarks,
      cbProcessID: ActionData.rowData.ProcessID,
    };
    this.form.setValue(Editvalues);
  }
  OnResetRemarks(){
    this.RemarksIDs=0;
    this.ActiveFlag=true;
    this.form.reset();
    this.submitted = false;
    this.BindDropdown();
  }
  RemarksListcolumns: ColDef[] = [
    {
      headerName: 'Action', floatingFilter: false, maxWidth: 150,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.OnRemarksActions.bind(this),
      }
    },
    { field: 'RemarksID',hide: true,filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'Remarks', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ProcessName', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'ProcessID',hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CreatedBy', filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'CreatedDate', hide: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: 'IsActive', filter: "agTextColumnFilter", floatingFilter: true },
    
  ];



}
