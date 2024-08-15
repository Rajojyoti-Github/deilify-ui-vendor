import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgOtpInputModule } from  'ng-otp-input';
import { CommonApi } from './lib/services/api/common.api';
import {  HttpClient, HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgOtpInputModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CommonApi,
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
