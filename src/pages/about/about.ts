import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  options = ['cash', 'creditCard', 'check', 'writeOff'];
  optionsDetails = {
    'cash' : {
      name: 'Cash',
      color: 'secondary',
      icon: 'logo-usd',
    },
    'creditCard': {
      name: 'Credit Card',
      color: 'danger',
      icon: 'card',
    },
    'check': {
      name: 'Check',
      color: 'light',
      icon: 'logo-foursquare',
    },
    'writeOff': {
      name: 'Write-Off',
      color: 'dark',
      icon: 'clipboard',
    }
  };
  toastPositions = ['bottom', 'top', 'middle'];

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }

  showToast(message) {
    // console.log(this.optionsDetails['cash'].color);
    const toast = this.toastCtrl.create({
      message: message,
      position: this.toastPositions[Math.floor(Math.random()*this.toastPositions.length)],
      duration: 3000
    });

    toast.present();
  }

}
