import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { AuthGuard } from '@core/authentication/auth.guard';
import {CustomersModule} from './customers/customers.module'


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
      },
      {
        path: 'master',
        loadChildren: () =>
          import('./master/master.module').then(m => m.MasterModule),
      },
      {
        path: 'genericmaster',
        loadChildren: () =>
          import('./generic-master/generic-master.module').then(m => m.GenericMasterModule),
      },
      {
        path: 'Reports',
        loadChildren: () =>
          import('./reports/reports.module').then(m => m.ReportsModule),
      },
      {
        path: 'process',
        loadChildren: () =>
          import('./process/process.module').then(m => m.ProcessModule),
      },
      {
        path: 'setup',
        loadChildren: () =>
          import('./setup/setup.module').then(m => m.SetupModule),
      },
      {

        path: 'Rate Management',
        loadChildren: () =>
          import('./rate-management/rate-management.module').then(m => m.RateManagementModule),
      },
      {
        path:'customers',
        loadChildren:() =>
        import('./customers/customers.module').then(m=>m.CustomersModule),

      },
      {
        path:'Accounts',
        loadChildren:() =>
        import('./accounts/accounts.module').then(m=>m.AccountsModule),

      },
      {
        path:'User Management',
        loadChildren:() =>
        import('./user-management/user-management.module').then(m=>m.UserManagementModule),

      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      // { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
