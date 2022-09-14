import { NgModule } from '@angular/core';
import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ItemsComponent } from './items/items.component';
<<<<<<< HEAD
import { LabourContractorsComponent } from './labour-contractors/labour-contractors.component';
=======
import { PelletsComponent } from './pellets/pellets.component';
>>>>>>> d7fe0f1c464cf4445749edc1c040015e117afb17

@NgModule({
  declarations: [
    ProductComponent,
    ItemsComponent,
<<<<<<< HEAD
    LabourContractorsComponent
=======
    PelletsComponent
>>>>>>> d7fe0f1c464cf4445749edc1c040015e117afb17
  ],
  imports: [
    SharedModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
