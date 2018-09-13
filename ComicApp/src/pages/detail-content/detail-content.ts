import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-content',
  templateUrl: 'detail-content.html',
})
export class DetailContentPage {
  content : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.content = this.navParams.get("content");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailContentPage');
  }

  goHome() {
    console.log("Detail Content goHome");
    this.navCtrl.popToRoot();
  }

}
