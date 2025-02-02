import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect, ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/lib/services/common.service';
import { ProductService } from 'src/app/lib/services/product.service';
import { catchError, tap, throwError } from 'rxjs';
import { BulkUploadComponent } from 'src/app/components/bulk-upload/bulk-upload.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  @ViewChild('categorySelect', { static: false }) categorySelect!: IonSelect;
  vendorId: any;
  servicesData: any = [];

  constructor(private router: Router, public commonService: CommonService, private productService: ProductService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('testing')
    this.getServicesByVendorId();
  }

  getServicesByVendorId() {
    this.commonService.present();
    this.vendorId = Number(localStorage.getItem("vendorId"));
    this.productService.getServicesByVendorId(this.vendorId).pipe(
      tap((res: any) => {
        this.commonService.dismiss();
        if (res?.isServices && res?.isServices.length>0) {
          this.servicesData = res?.isServices;
        }
      }),
      catchError((error) => {
        this.commonService.dismiss();
        this.commonService.danger(error);
        return throwError(() => new Error(error.error.error.message)); // rethrow the error if needed
      })
    ).subscribe();
  }

  openSelect() {
    this.categorySelect.open();
  }

  addService() {
    this.router.navigate(['add-service']);
  }

  updateService(item: any) {
    
  }

  // open upload bulk service modal
  async uploadBulkServices() {
    const modal = await this.modalController.create({
      component: BulkUploadComponent,
      cssClass: 'bulk-modal-css',
      backdropDismiss: false,
    });
    return await modal.present();
  }

}
