import { NgModule } from '@angular/core';
import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ItemsComponent } from './items/items.component';

import { LabourContractorsComponent } from './labour-contractors/labour-contractors.component';

import { PelletsComponent } from './pellets/pellets.component';

@NgModule({
  declarations: [
    ProductComponent,
    ItemsComponent,

    LabourContractorsComponent,

    PelletsComponent

  ],
  imports: [
    SharedModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
