import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  pushPage(): void {
    this.navCtrl.push(ContactPage, {
      type: 'push',
      course: 'ionic2',
      year: 2017,
      message: () => {
        console.log('Welcome to Ionic Course 2');
      }
    });
  }

  setRoot(): void {
    this.navCtrl.setRoot(ContactPage, {
      type: 'setRoot'
    });
  }

}
