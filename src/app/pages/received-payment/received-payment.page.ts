import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-received-payment',
  templateUrl: './received-payment.page.html',
  styleUrls: ['./received-payment.page.scss'],
})
export class ReceivedPaymentPage implements OnInit {

  selectedPaymentMode: string = 'cash';
  
  constructor() { }

  ngOnInit() {
  }

}
