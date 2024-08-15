import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  state = false;
  isLoading: boolean = false;

  constructor(private loadingController: LoadingController, private toastController: ToastController) { }

  async presentLoading() {
    const that = this;
    this.isLoading = true;
    return await this.loadingController.create({
      mode: 'ios'

    }).then(a => {
      a.present().then(() => {
        console.log('loading presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('loading abort presenting'));
        }
      });
    });
  }

  async dissmiss_loading() {
    if (this.isLoading) {
      this.isLoading = false;
      return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
    }
    return null;
  }

  toast(message: string, cssClass = '') {
    this.toastController
      .create({
        message,
        duration: 3000,
        mode: 'ios',
        color: 'dark',
        cssClass,
      })
      .then((toast) => toast.present());
  }

  async success(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: 'success',
    });
    toast.present();
  }

  async danger(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: 'danger',
    });
    toast.present();
  }

  async present() {
    this.state = true;
    return await this.loadingController
      .create({
        spinner: 'lines',
        message: 'Please wait...',
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.state) {
            a.dismiss();
          }
        });
      });
  }

  async dismiss() {
    this.state = false;
    //return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    while ((await this.loadingController.getTop()) !== undefined) {
      await this.loadingController.dismiss();
    }
  }

}
