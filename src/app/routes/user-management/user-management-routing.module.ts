import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsercomapnyComponent } from './usercomapny/usercomapny.component';
import { RoleUiComponent } from './role-ui/role-ui.component'
const routes: Routes = [
  { path: 'Users', component: UsersComponent },
  { path: 'UserCompany', component: UsercomapnyComponent },
  { path: 'RoleUI', component: RoleUiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
