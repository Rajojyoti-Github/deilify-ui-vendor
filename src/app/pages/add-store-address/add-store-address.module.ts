import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStoreAddressPageRoutingModule } from './add-store-address-routing.module';

import { AddStoreAddressPage } from './add-store-address.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    AddStoreAddressPageRoutingModule
  ],
  declarations: [AddStoreAddressPage]
})
export class AddStoreAddressPageModule {}
