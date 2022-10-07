import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { GenericMasterRoutingModule } from './generic-master-routing.module';
import { CountMasterComponent } from './count-master/count-master.component';
import { DepartmentMasterComponent } from './department-master/department-master.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';
import { ItemTypeMasterComponent } from './item-type-master/item-type-master.component';


@NgModule({
  declarations: [
    CountMasterComponent,
    DepartmentMasterComponent,
    DesignationMasterComponent,
    ItemTypeMasterComponent
    
  ],
  imports: [
    CommonModule,
  SharedModule,
  GenericMasterRoutingModule
  ]
})
export class GenericMasterModule { }
