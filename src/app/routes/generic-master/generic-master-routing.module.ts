import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountMasterComponent } from './count-master/count-master.component';
import { DepartmentMasterComponent } from './department-master/department-master.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';

const routes: Routes = [
  {path:"countmaster",component:CountMasterComponent},
  {path:"departmentmaster",component:DepartmentMasterComponent},
  {path:"designationmaster",component:DesignationMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericMasterRoutingModule { }



