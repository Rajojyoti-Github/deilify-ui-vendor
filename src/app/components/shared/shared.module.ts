import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomTabViewComponent } from '../bottom-tab-view/bottom-tab-view.component';
import { IonicModule } from '@ionic/angular';

const COMPONENTS = [
  BottomTabViewComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CommonModule,
    ...COMPONENTS
  ],
})
export class SharedModule { }
