import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log("Home DidLoad");
  } 

  ionViewWillEnter() {
    console.log("Home WillEnter");
  }

  ionViewDidEnter() {
    console.log("Home DidEnter");
  }

  ionViewWillLeave() {
    console.log("Home WillLeave");
  }

  ionViewDidLeave() {
    console.log("Home DidLeave");
  }

  ionViewWillUnload() {
    console.log("Home UnLoad");
  }

}
