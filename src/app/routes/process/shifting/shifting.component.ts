import { Component, OnInit } from '@angular/core';
import { noUndefined } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
@Component({
  selector: 'app-shifting',
  templateUrl: './shifting.component.html',
  styleUrls: ['./shifting.component.scss']
})
export class ShiftingComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  HideSaveButton=true;
  TempCatList:any;ItemTypelist:any;ItemList:any;
  customerList:any;

  dataSource = new MatTableDataSource<any>();
  tab=0;
  UserID:any=0;
  constructor(private fb: FormBuilder,private api:ApiService,public dialog: MtxDialog,) {
    this.UserID=api.getUserID();
 
    }

  ngOnInit(): void {
    this.form = this.fb.group({

      //ItemID: [0, Validators.required],
      cbCustomerID : ['', Validators.required],
      txtLotNo : ['', Validators.required],
      ItemCode : ['', Validators.required],
      ItemName : ['', Validators.required],
      ItemTypeID: [null,Validators.required],
      TemperatureCategoryID: [null, Validators.required],
      IsActive:[true, Validators.required],
      //CreatedBy:[this.UserID]
    });


    this.BindDropdown();
  }
  async BindDropdown(){
    this.api.get('/Customer').subscribe(
      data=>{this.customerList=data},
      error=>{ console.error(error);}
    );
    this.api.get('/item/itemtype').subscribe(
      data=>{this.ItemTypelist=data},
      error=>{ console.error(error);}
    );

    this.api.get('/TemperatureCategory').subscribe(
     data=>{this.TempCatList=data},
     error=>{ console.error(error);}
   );

   this.api.get('/item/itemlist').subscribe(
     data=>{this.ItemList=data},
     error=>{ console.error(error);}
   );

 }
 get f() { return this.form.controls; }

 onSubmit(formData:any){
  this.submitted=true;
  if(this.form.invalid){
    alert("invalid");
    return;
  }else {
    this.HideSaveButton=false;
    alert("Save");

  }

  
 }

 tabchange(event:any){
  this.tab=event;
}
onReset(){
  this.submitted=false;
  this.HideSaveButton=true;
}
 //---end
}
