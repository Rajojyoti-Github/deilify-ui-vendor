import { Injectable } from '@angular/core';
import { forkJoin, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonApi } from './api/common.api';
import { CommonService } from './common.service';
import { ApiUrls } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commonApi: CommonApi,
    private commonService: CommonService
  ) { }

  /* data upload for Bank Details */
  addBankFormDetals(body: any) {
    return forkJoin({ isBank: this.commonApi.addBankDetails(body) }).pipe(
      catchError((err) => this.errorHandler(err)),
      map(({ isBank }) => ({
        isBank,
      }))
    );
  }

  registerUserDetails(registerFormData: any) {
    return this.commonApi.putData(`${ApiUrls.register}/`, registerFormData);
  }

  addStoreAddress(addStoreAddressData: any) {
    return forkJoin({ isAddStore: this.commonApi.addStoreAddress(addStoreAddressData) }).pipe(
      catchError((err) => this.errorHandler(err)),
      map(({ isAddStore }) => ({
        isAddStore,
      }))
    );
  }

  private errorHandler(err: any) {
    if (err.error.length >= 1) {
      this.commonService.danger(err.error[0].message);
    } else {
      this.commonService.danger(err.error.error.message);
    }
    return throwError(() => new Error(err.error.error.message));
  }

}
