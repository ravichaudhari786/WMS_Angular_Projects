import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UsersComponent } from './users/users.component';
import { AgGridModule } from 'ag-grid-angular';
import { UsercomapnyComponent } from './usercomapny/usercomapny.component';
import { RoleUiComponent } from './role-ui/role-ui.component';
@NgModule({
  declarations: [
    UsersComponent,
    UsercomapnyComponent,
    RoleUiComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserManagementRoutingModule,
    MatDialogModule,
    AgGridModule.withComponents([]),

  ]
})
export class UserManagementModule { }
