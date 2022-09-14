import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ProductComponent } from './product/product.component';
import { LabourContractorsComponent } from './labour-contractors/labour-contractors.component';
import {ReportPrintInfoComponent} from './report-print-info/report-print-info.component';
import { PelletsComponent } from './pellets/pellets.component';
import { CheckListMasterComponent } from './check-list-master/check-list-master.component';
import { CheckListDetailComponent } from './check-list-detail/check-list-detail.component';
import { DockMasterComponent } from './dock-master/dock-master.component';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { RemarksComponent } from './remarks/remarks.component';

 const routes:Routes=[{ path: 'product', component: ProductComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'Labour Contractors', component: LabourContractorsComponent },
  { path: 'Report Print Info', component: ReportPrintInfoComponent },
  { path: 'Pellets', component: PelletsComponent },
  { path: 'Check List Master', component: CheckListMasterComponent },
  { path: 'Check List Detail', component: CheckListDetailComponent },
  { path: 'Dock Master', component: DockMasterComponent },
  { path: 'Financial Year', component: FinancialYearComponent },
  { path: 'Remarks', component: RemarksComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule { }
