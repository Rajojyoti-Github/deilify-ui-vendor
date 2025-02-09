import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash-and-bank',
  templateUrl: './cash-and-bank.page.html',
  styleUrls: ['./cash-and-bank.page.scss'],
})
export class CashAndBankPage implements OnInit {

  totalOrderValue: any = 0;
  totalEarningValue: any = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewBank() {
    this.router.navigate(['add-new-bank']);
  }

}
