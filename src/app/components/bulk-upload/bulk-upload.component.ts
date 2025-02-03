import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/lib/services/common.service';
import { ProductService } from 'src/app/lib/services/product.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.scss'],
})
export class BulkUploadComponent implements OnInit {

  selectedFile: File | null = null;
  downloadedExcel: boolean = false;

  constructor(private modalController: ModalController, public commonService: CommonService, private productService: ProductService) { }

  ngOnInit() { }

  // Close the modal
  closeModal() {
    this.modalController.dismiss();
  }


  // Download the excel file for bulk upload data
  downloadPredefinedExcel() {
    this.commonService.present();
    this.productService.getDownloadExcelForBulkUpload().pipe(
      tap((blob: Blob) => {
        this.commonService.dismiss();
        this.downloadedExcel = true;
        this.downloadFile(blob, 'BulkUploadTemplate.xlsx'); // Change the filename if needed
        this.commonService.success('Download Successfully');
      }),
      catchError((error) => {
        this.commonService.dismiss();
        this.commonService.danger('Download failed.');
        return throwError(() => new Error(error.message));
      })
    ).subscribe();
  }
  
  downloadFile(blob: Blob, filename: string) {
    const link = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  // For send the excel data to api
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.productService.uploadExcelFileForBulkServices(this.selectedFile).pipe(
        tap((res: any) => {
          this.commonService.dismiss();
          if (res?.isUploadExcel) {
            this.commonService.success('Excel Uploaded Successfully');
          }
        }),
        catchError((error) => {
          this.commonService.dismiss();
          this.commonService.danger(error);
          return throwError(() => new Error(error.error.error.message)); // rethrow the error if needed
        })
      ).subscribe();
    }
  }

}
