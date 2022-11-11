import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { GenericMasterRoutingModule } from './generic-master-routing.module';
import { CountMasterComponent } from './count-master/count-master.component';
import { DepartmentMasterComponent } from './department-master/department-master.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';
import { ItemTypeMasterComponent } from './item-type-master/item-type-master.component';
import { CountmastereditbuttonComponent } from './count-master/countmastereditbutton/countmastereditbutton.component';
import { DepartmentmastereditbuttonComponent } from './department-master/departmentmastereditbutton/departmentmastereditbutton.component';
import { DesignationmastereditbuttonComponent } from './designation-master/designationmastereditbutton/designationmastereditbutton.component';
import { ItemtypemastereditbuttonComponent } from './item-type-master/itemtypemastereditbutton/itemtypemastereditbutton.component';


@NgModule({
  declarations: [
    CountMasterComponent,
    DepartmentMasterComponent,
    DesignationMasterComponent,
    ItemTypeMasterComponent,
    CountmastereditbuttonComponent,
    DepartmentmastereditbuttonComponent,
    DesignationmastereditbuttonComponent,
    ItemtypemastereditbuttonComponent
    
  ],
  imports: [
    CommonModule,
  SharedModule,
  GenericMasterRoutingModule,
  AgGridModule.withComponents([]),
  ]
})
export class GenericMasterModule { }
