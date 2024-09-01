import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/lib/services/common.service';
import { ProductService } from 'src/app/lib/services/product.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  addServicesForm!: FormGroup;
  categories: any[] = [];  // Array to store categories
  subCategories: any[] = []; // Array to store subcategories
  serviceLines: any[] = []; // Array to store serviceline
  selectedCategory: string | null = null;
  selectedSubCategory: any;
  selectedServiceLine: string | null = null;
  servicePrice: any;

  constructor(private fb: FormBuilder, private productService: ProductService, private commonService: CommonService) { }

  ngOnInit() {
    this.addServicesForm = this.fb.group({
      category: ['', Validators.required],
      //subCategory: ['', Validators.required],
      serviceLine: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.getCategory();
  }

  // function for get category 
  getCategory() {
    this.commonService.present();
    const requestPayload = {
      requestDDL: [
        {
          key: 'category'
        }
      ]
    };
    this.productService.getDDLResults(requestPayload).subscribe({
      next: (response: any[]) => {
        this.categories = response;
        this.commonService.dismiss();
      },
      error: (error: any) => {
        this.commonService.dismiss();
        this.commonService.danger(error);
        console.error('Error fetching categories:', error);
      }
    });
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.detail.value;
    console.log('Selected Category:', this.selectedCategory);

    // Trigger subcategory loading based on selected category
    if (this.selectedCategory) {
      this.getSubCategory(this.selectedCategory);
    } else {
      this.subCategories = []; // Reset subcategories if no category is selected
    }
  }

  // function for get subcategory 
  getSubCategory(category: string) {
    this.commonService.present();
    const requestPayload = {
      requestDDL: [
        {
          key: 'category',
          code: category
        }
      ]
    };
    this.productService.getDDLResults(requestPayload).subscribe({
      next: (response: any[]) => {
        this.subCategories = response;
        this.commonService.dismiss();
      },
      error: (error: any) => {
        this.commonService.dismiss();
        this.commonService.danger(error);
        console.error('Error fetching sub categories:', error);
      }
    });
  }

  onSubCategoryChange(event: any) {
    this.selectedSubCategory = event.detail.value;
    console.log('Selected SubCategory:', this.selectedSubCategory);

    // Trigger serviceLine loading based on selected subcategory
    if (this.selectedSubCategory) {
      this.getServiceLine(this.selectedSubCategory);
    } else {
      this.subCategories = []; // Reset serviceLine if no subcategory is selected
    }
  }

  // function for get serviceline 
  getServiceLine(subCategory: any) {
    this.commonService.present();
    const requestPayload = {
      requestDDL: [
        {
          key: "sub_category",
          id: subCategory.id,
          code: subCategory.value
        }
      ]
    };
    this.productService.getDDLResults(requestPayload).subscribe({
      next: (response: any[]) => {
        this.serviceLines = response;
        this.commonService.dismiss();
      },
      error: (error: any) => {
        this.commonService.dismiss();
        this.commonService.danger(error);
        console.error('Error fetching serviceLines:', error);
      }
    });

    
  }

  onServiceLineChange(event: any) {
    this.selectedServiceLine = event.detail.value;
    console.log('Selected serviveLine:', this.selectedServiceLine);
  }

  onSubmit() {
    if (this.addServicesForm.valid) {
      console.log(this.addServicesForm.value);
      this.commonService.present();
      this.addServicesForm.value['subCategory'] = this.selectedSubCategory.value;
      this.addServicesForm.value['vendorId'] = Number(localStorage.getItem("vendorId"));
      this.addServicesForm.value['nameOfVendor'] = "";
      this.addServicesForm.value['vendorStoreId'] = "";
      this.productService.addServices(this.addServicesForm.value).pipe(
        tap((res: any) => {
          this.commonService.dismiss();
          if (res?.addServices?.success) {
            this.commonService.success('add Service Successfully Uploaded');
            //this.router.navigate(['cash-and-bank']);
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
