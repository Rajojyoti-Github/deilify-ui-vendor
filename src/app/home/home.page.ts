import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  cashandbankbalance() {
    this.router.navigate(['cash-and-bank']);
  }

  billInvoice() {
    this.router.navigate(['bill-invoice']);
  }

  receivedPayment() {
    this.router.navigate(['received-payment']);
  }

}
