import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashAndBankPage } from './cash-and-bank.page';

const routes: Routes = [
  {
    path: '',
    component: CashAndBankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashAndBankPageRoutingModule {}
