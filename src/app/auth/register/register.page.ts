import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhoneCheck } from 'src/app/config/constants';
import { CommonService } from 'src/app/lib/services/common.service';
import { UserService } from 'src/app/lib/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  phoneNumber: any;
  registerForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, public commonService: CommonService, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.phoneNumber = Number(localStorage.getItem("mobileNumber"));
  }

  Login() {
    this.router.navigate(['login']);
  }

  registration() {
    if (this.registerForm.valid) {
      this.registerForm.value["phoneNumber"] = "91"+ this.phoneNumber;
      console.log(this.registerForm.value);
      this.commonService.presentLoading();
      this.userService.registerUserDetails(this.registerForm.value).subscribe({
        next: (res: any) => {
          this.commonService.dissmiss_loading();
          if (res.message == "Success") {
            this.commonService.success('Profile successfully updated');
            this.router.navigate(['/home']);
          } else if (res && res.error) {
            this.commonService.danger(res.error.message);
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
  }

}
