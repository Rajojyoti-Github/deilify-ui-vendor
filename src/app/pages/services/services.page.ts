import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  @ViewChild('categorySelect', { static: false }) categorySelect!: IonSelect;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSelect() {
    this.categorySelect.open();
  }

  addService() {
    this.router.navigate(['add-service']);
  }

}
