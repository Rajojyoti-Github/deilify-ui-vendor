import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillInvoicePageRoutingModule } from './bill-invoice-routing.module';

import { BillInvoicePage } from './bill-invoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillInvoicePageRoutingModule
  ],
  declarations: [BillInvoicePage]
})
export class BillInvoicePageModule {}
