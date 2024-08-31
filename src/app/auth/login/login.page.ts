import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneCheck } from 'src/app/config/constants';
import { AuthService } from 'src/app/lib/services/auth.service';
import { CommonService } from 'src/app/lib/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phoneNumber: any;
  invalidPhone: boolean = true;

  constructor(private router: Router, private commonService: CommonService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  getOtp(inputinfo: any) {
    if (!inputinfo.value) return;
    const params = { mobileNumber: "91" + inputinfo.value, otp: '', message: '' };
    if (!this.invalidPhone) {
      this.commonService.presentLoading();
      this.authService.sendOtp(params).subscribe({
        next: (res: any) => {
          this.commonService.dissmiss_loading();
          if (res.success) {
            this.commonService.dissmiss_loading()
            this.router.navigate(['otp', btoa(JSON.stringify(inputinfo.value))]);
          } else if (res && res.error) {
            this.commonService.dissmiss_loading()
            this.commonService.toast(res.error.message);
          }
        },
        error: (err: any) => {
          this.commonService.dissmiss_loading();
          this.commonService.danger('Something went wrong!!');
        },
        complete: () => {
          this.commonService.dissmiss_loading();
        }
      });
    }
    //this.router.navigate(['otp', btoa(JSON.stringify(inputinfo.value))]);
  }

  validatePhone(e: any) {
    this.invalidPhone = !PhoneCheck(this.phoneNumber);
  }

  Registration() {
    this.router.navigate(['register']);
  }

}
