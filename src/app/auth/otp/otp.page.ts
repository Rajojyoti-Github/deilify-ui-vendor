import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/services/auth.service';
import { CommonService } from 'src/app/lib/services/common.service';
import { catchError, tap, throwError } from 'rxjs';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  mobileNumber: any;
  otp: any;
  timer = 60;
  interval: any;
  resendOtp = false;
  invalidOtp: boolean = true;
  config = {
    length: 4,
    allowNumbersOnly: true,
    inputStyles: {
      'font-size': '1.5rem',
      'width': '40px',
      'height': '45px',
      'border-radius': '5px',
      'margin': '5px 15px 5px 15px'
    }
  };

  constructor(private router: Router, private route: ActivatedRoute, private commonService: CommonService,
    private authService: AuthService) {
    this.route.params.subscribe((res) => {
      this.mobileNumber = parseInt(JSON.parse(atob(res['phone'])));
    });
  }

  ngOnInit() {
    this.startTimer();
  }

  onOtpChange(event: any) {
    this.otp = event;
    console.log(this.otp);
    this.invalidOtp = false;
  }

  resendOtpBtn() {
    //this.resendOtp = false;
    this.timer = 60;
    this.startTimer();
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.timer = 0;
        this.resendOtp = true;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  verifyOtp() {
    // if(this.otp == "1234") {
    //   this.router.navigate(['/home']);
    // } 

    const params = {
      mobileNumber: this.mobileNumber.toString(),
      otp: this.otp,
      message: "",
      vendorId: "",
    };
    this.authService.verifyOtp(params).pipe(
      tap((res: any) => {
        if (res.message == "Success") {
          localStorage.setItem("vendorId", res.vendorId);
          this.router.navigate(['/home']);
        } else if (res && res.error) {
          this.invalidOtp = true;
          this.commonService.toast(res.error.message);
        }
      }),
      catchError((err: any) => {
        this.commonService.toast(err.error.error.message);
        return throwError(() => new Error(err.error.error.message)); // rethrow the error if needed
      })
    ).subscribe();

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
