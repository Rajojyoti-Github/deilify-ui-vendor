import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ApiUrls } from '../../config/constants';
import { CommonService } from './common.service';
import { CommonApi } from './api/common.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonApi: CommonApi,private commonService: CommonService) { }

  sendOtp(phone: any) {
    return this.commonApi
      .postData(ApiUrls.auth.sendOtp, phone)
      .pipe(catchError((err: any) => this.errorHandler(err)));
  }

  private errorHandler(err: any) {
    if(err.status == 401){
      this.commonService.toast(err.status == 401?err.error.error ? err.error.error.message : err.error.message:err.statusText);
    } else {
      this.commonService.toast(err.status == 200?err.error.error ? err.error.error.message : err.error.message:err.statusText);
    }
    return throwError(() => new Error(err.error.error.message));
  }
}
