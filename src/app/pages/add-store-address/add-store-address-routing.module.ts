import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStoreAddressPage } from './add-store-address.page';

const routes: Routes = [
  {
    path: '',
    component: AddStoreAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStoreAddressPageRoutingModule {}
