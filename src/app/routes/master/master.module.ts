import { NgModule } from '@angular/core';
import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ItemsComponent } from './items/items.component';
import { LabourContractorsComponent } from './labour-contractors/labour-contractors.component';
import { PelletsComponent } from './pellets/pellets.component';
import { ReportPrintInfoComponent } from './report-print-info/report-print-info.component';
import { CheckListMasterComponent } from './check-list-master/check-list-master.component';
import { CheckListDetailComponent } from './check-list-detail/check-list-detail.component';
import { DockMasterComponent } from './dock-master/dock-master.component';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { RemarksComponent } from './remarks/remarks.component';
import { BrandsComponent } from './brands/brands.component';
import { StateCityComponent } from './state-city/state-city.component';

@NgModule({
  declarations: [
    ProductComponent,
    ItemsComponent,

    LabourContractorsComponent,
    PelletsComponent,
    LabourContractorsComponent,
    PelletsComponent,
    LabourContractorsComponent,
    PelletsComponent,
    ReportPrintInfoComponent,
    CheckListMasterComponent,
    CheckListDetailComponent,
    DockMasterComponent,
    FinancialYearComponent,
    RemarksComponent,
    BrandsComponent,
    StateCityComponent
  ],
  imports: [
    SharedModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
