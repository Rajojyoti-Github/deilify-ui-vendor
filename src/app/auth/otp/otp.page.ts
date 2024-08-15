import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

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

  constructor(private router: Router) { }

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
    if(this.otp == "1234") {
      this.router.navigate(['/home']);
    } else {
      
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
