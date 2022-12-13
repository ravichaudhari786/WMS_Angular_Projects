import { Component, OnInit } from '@angular/core';


import { noUndefined } from '@angular/compiler/src/util';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@core';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { count } from 'console';
import { User } from '@core/authentication/interface';
import { ColDef,GridApi } from 'ag-grid-community';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { TemperatureCategoryEditButtonComponent } from './temperature-category-edit-button/temperature-category-edit-button.component';
@Component({
  selector: 'app-temperature-category',
  templateUrl: './temperature-category.component.html',
  styleUrls: ['./temperature-category.component.scss']
})
export class TemperatureCategoryComponent implements OnInit {
 
  
  form!: FormGroup; submitted = false; Reseted = false;
  HideSaveButton = true;
  frameworkComponents: any;
  TemperatureCategoryDID:number=0;
  UserID: any = 0;
  TempCategoryID: number = 0;
  private currentUser: User;
  TemperatureCategoryList: any;
  constructor(private fb: FormBuilder, private api: ApiService, public dialog: MtxDialog,) { 
    this.UserID = api.getUserID();
    this.currentUser = this.api.getCurrentUser();
    this.frameworkComponents = {
      buttonRenderer: TemperatureCategoryEditButtonComponent
      }
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      txtTemeratureCategory: ['', Validators.required],
      txtMinimumTemperature: [null, Validators.required],
      txtMaximumTemperature: [null, Validators.required],
      CreatedBy: [this.UserID],
    
    });
    this.BindinfDataToList();
 
  }
  BindinfDataToList() {

    this.api.get('/TemperatureCategory/TemperatureCategories_Select').subscribe(
      data => {
        this.TemperatureCategoryList = data;
        console.log("Temperature List",this.TemperatureCategoryList)
      },
      error => { console.error(error); }
    );
  }
  
  get f() { return this.form.controls; }
  
  onSubmit(formData: any) {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else {
      this.HideSaveButton = true;
      const TemperatureCategory = {
        TempCategoryID: this.TemperatureCategoryDID,
        TempCategory: this.form.value.txtTemeratureCategory,
        MinTemp: this.form.value.txtMinimumTemperature,
        MaxTemp: this.form.value.txtMaximumTemperature,
        CreatedBy:this.currentUser.userId
    }
    console.log("TemperatureCategory", TemperatureCategory);
  this.api.post('/TemperatureCategory/TemperatureCategories_Insert', TemperatureCategory).subscribe(
      data => {
        this.dialog.alert(data[0]);
        this.onReset();
        this.BindinfDataToList();
        this.TemperatureCategoryDID=0;
      },
      error => { console.error(error); }
    );
  }
}

  onReset() {
    this.form.reset();
    this.TempCategoryID = 0;
    this.submitted = false;
    this.HideSaveButton = true;
  
    this.BindinfDataToList();
  }
  oneditTemperatureCategory(d:any){
    const strTempCategoryID=this.TemperatureCategoryList.filter((x:any)=>x.TempCategoryID==d.rowData.TempCategoryID);
  
  
    console.log("on edit data",d);
    
   
   this.form.controls['txtTemeratureCategory'].reset();
   this.form.controls['txtMinimumTemperature'].reset();
   this.form.controls['txtMaximumTemperature'].reset();
  
  //fill the selected grid row data and patch to form fields
  TempCategoryID:d.rowData["TempCategoryID"];
      this.form.patchValue({
        
        
        txtTemeratureCategory :d.rowData["TemperatureCategory"],
        txtMinimumTemperature :d.rowData["MinTemperature"],
        txtMaximumTemperature:d.rowData["MaxTemperature"],
        
      });
   
  this.TemperatureCategoryDID=d.rowData["TemperatureCategoryID"];
  console.log("TemperatureCategoryDID",this.TemperatureCategoryDID)
  console.log("Wprk3333",d.rowData);
  // this.tab = 0;
  
  }


  columnDefs: ColDef[] = [

    {  headerName: 'Action', width:100 ,floatingFilter: false,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.oneditTemperatureCategory.bind(this),
      label: 'Click 1'
    }
  },
    { headerName:'Temperature Category',field: 'TemperatureCategory',hide:false, filter: 'agTextColumnFilter', floatingFilter:false,},
    { headerName:'Min Temperature',field: 'MinTemperature' ,filter: 'agTextColumnFilter', floatingFilter: false,},
    { headerName:'Max Temperature',field: 'MaxTemperature' ,  filter: 'agTextColumnFilter', floatingFilter: false, },
 

 


   ]

}
