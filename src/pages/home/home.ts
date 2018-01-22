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
    this.navCtrl.push(ContactPage);
  }

  setRoot(): void {
    this.navCtrl.setRoot(ContactPage);
  }

}
