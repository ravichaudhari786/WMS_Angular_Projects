import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ProductComponent } from './product/product.component';
import { LabourContractorsComponent } from './labour-contractors/labour-contractors.component';
const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'Labour Contractors', component: LabourContractorsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule { }
