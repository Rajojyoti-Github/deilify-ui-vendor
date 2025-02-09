import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-invoice',
  templateUrl: './bill-invoice.page.html',
  styleUrls: ['./bill-invoice.page.scss'],
})
export class BillInvoicePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
