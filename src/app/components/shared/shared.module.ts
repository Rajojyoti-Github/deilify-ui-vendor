import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomTabViewComponent } from '../bottom-tab-view/bottom-tab-view.component';
import { IonicModule } from '@ionic/angular';
import { BulkUploadComponent } from '../bulk-upload/bulk-upload.component';

const COMPONENTS = [
  BottomTabViewComponent,
  BulkUploadComponent
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
