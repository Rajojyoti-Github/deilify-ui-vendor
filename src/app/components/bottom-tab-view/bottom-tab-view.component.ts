import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-tab-view',
  templateUrl: './bottom-tab-view.component.html',
  styleUrls: ['./bottom-tab-view.component.scss'],
})
export class BottomTabViewComponent  implements OnInit {

  @Input() tabsTextAvailable: Boolean = false;
  checkRouter: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkRouter = this.router.getCurrentNavigation()?.finalUrl?.toString();
    console.log(this.checkRouter, 'checkrouter');
  }

  orderPageNavigation(pageName: any) {
    this.router.navigateByUrl(`/${pageName}`)
  }

}
