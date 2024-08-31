import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/lib/services/common.service';
import { UserService } from 'src/app/lib/services/user.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-add-store-address',
  templateUrl: './add-store-address.page.html',
  styleUrls: ['./add-store-address.page.scss'],
})
export class AddStoreAddressPage implements OnInit {

  addStoreAddressForm!: FormGroup;
  countries: string[] = ['United States', 'Canada', 'India', 'Australia'];
  states: { [key: string]: string[] } = {
    'United States': ['California', 'Florida', 'New York'],
    Canada: ['Ontario', 'Quebec', 'British Columbia'],
    India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand',
      'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
      'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
      'Uttarakhand', 'Uttar Pradesh', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
      'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry'],
    Australia: ['New South Wales', 'Victoria', 'Queensland']
  };
  stateList: string[] = [];

  constructor(private fb: FormBuilder, public commonService: CommonService, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.addStoreAddressForm = this.fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required],
    });

    // Watch for changes in the country field to dynamically update state options
    this.addStoreAddressForm.get('country')?.valueChanges.subscribe(selectedCountry => {
      this.updateStateList(selectedCountry);
    });
  }

  updateStateList(selectedCountry: string) {
    this.stateList = this.states[selectedCountry] || [];
    // Reset state control if country changes
    this.addStoreAddressForm.get('state')?.setValue('');
  }

  onSubmit() {
    if (this.addStoreAddressForm.valid) {
      console.log(this.addStoreAddressForm.value);
      this.commonService.present();
      this.userService.addStoreAddress(this.addStoreAddressForm.value).pipe(
        tap((res: any) => {
          this.commonService.dismiss();
          if (res?.isBank?.success) {
            this.commonService.success('add Store Address Successfully Uploaded');
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
