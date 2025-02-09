import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashAndBankPageRoutingModule } from './cash-and-bank-routing.module';

import { CashAndBankPage } from './cash-and-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashAndBankPageRoutingModule
  ],
  declarations: [CashAndBankPage]
})
export class CashAndBankPageModule {}
