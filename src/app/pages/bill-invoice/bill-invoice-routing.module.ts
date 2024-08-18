import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillInvoicePage } from './bill-invoice.page';

const routes: Routes = [
  {
    path: '',
    component: BillInvoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillInvoicePageRoutingModule {}
