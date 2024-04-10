import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { BillprocessComponent } from './billprocess/billprocess.component';
import { ReceiptComponent } from './receipt/receipt.component';
import {BankAccountComponent} from './bank-account/bank-account.component'
const routes: Routes = [
  { path: 'AdditionalServices', component: AdditionalServicesComponent },
  { path: 'BillProcess', component: BillprocessComponent },
  { path: 'Receipt', component: ReceiptComponent },
  { path: 'BankAccountDetail', component: BankAccountComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
