import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  toCollect: any = 0;
  toPay: any = 0;
  totalSales: any = 0;
  totalOrder: any = 0;
  sellReport: any = 0;
  totalOrderValue: any = 0;

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

  openProfile() {
    this.router.navigate(['register']);
  }

}
