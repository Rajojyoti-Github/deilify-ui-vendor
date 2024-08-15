import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewBankPageRoutingModule } from './add-new-bank-routing.module';

import { AddNewBankPage } from './add-new-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewBankPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [AddNewBankPage]
})
export class AddNewBankPageModule {}
