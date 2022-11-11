import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountMasterComponent } from './count-master/count-master.component';
import { DepartmentMasterComponent } from './department-master/department-master.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';
import { ItemTypeMasterComponent } from './item-type-master/item-type-master.component';

const routes: Routes = [
  {path:"CountMaster",component:CountMasterComponent},
  {path:"DepartmentMaster",component:DepartmentMasterComponent},
  {path:"DesignationMaster",component:DesignationMasterComponent},
  {path:"Item Type Master",component:ItemTypeMasterComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericMasterRoutingModule { }



