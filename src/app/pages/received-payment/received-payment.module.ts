import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivedPaymentPageRoutingModule } from './received-payment-routing.module';

import { ReceivedPaymentPage } from './received-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivedPaymentPageRoutingModule
  ],
  declarations: [ReceivedPaymentPage]
})
export class ReceivedPaymentPageModule {}
