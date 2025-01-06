import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { CommonService } from 'src/app/lib/services/common.service';
import { UserService } from 'src/app/lib/services/user.service';

@Component({
  selector: 'app-add-new-bank',
  templateUrl: './add-new-bank.page.html',
  styleUrls: ['./add-new-bank.page.scss'],
})
export class AddNewBankPage implements OnInit {

  bankForm!: FormGroup;

  constructor(private fb: FormBuilder, public commonService: CommonService, private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.bankForm = this.fb.group({
      accountHolderName: ['', Validators.required],
      bankAccountNumber: ['', Validators.required],
      bankName: ['', Validators.required],
      beneficiaryName: ['', Validators.required],
      ifscCode: ['', Validators.required],
      upiId: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bankForm.valid) {
      console.log(this.bankForm.value);
      this.commonService.present();
      this.bankForm.value['vendorId'] = Number(localStorage.getItem("vendorId"));
      this.userService.addBankFormDetals(this.bankForm.value).pipe(
        tap((res: any) => {
          this.commonService.dismiss();
          if (res?.isBank) {
            this.commonService.success("Bank Account Successfully Uploaded");
            this.router.navigate(['cash-and-bank']);
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
