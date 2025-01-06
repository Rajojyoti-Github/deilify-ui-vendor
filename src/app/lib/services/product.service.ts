import { Injectable } from '@angular/core';
import { CommonApi } from './api/common.api';
import { map, catchError } from 'rxjs/operators';
import { CommonService } from './common.service';
import { forkJoin, throwError, Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private commonApi: CommonApi, private commonService: CommonService) { }

  getDDLResults(data: any): Observable<any> {
    return this.commonApi.getDDLResults(data).pipe(catchError((err) => this.errorHandler(err)));
  }

  addServices(addServicesData: any) {
    return forkJoin({ addServices: this.commonApi.addServices(addServicesData) }).pipe(
      catchError((err) => this.errorHandler(err)),
      map(({ addServices }) => ({
        addServices,
      }))
    );
  }

  getServicesByVendorId(vendorId: any) {
    return forkJoin({ isServices: this.commonApi.getAllServicesByVendorId(vendorId) }).pipe(
      catchError((err) => this.errorHandler(err)),
      map(({ isServices }) => ({
        isServices,
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
