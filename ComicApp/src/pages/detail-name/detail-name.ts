import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-name',
  templateUrl: 'detail-name.html',
})
export class DetailNamePage {
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.data.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailNamePage');
  }

  goHome() {
    console.log("Detail Name tab =", this.navCtrl);
    console.log("Detail Name parent =", this.navCtrl.parent);
    console.log("Detail Name parent.parent =", this.navCtrl.parent.parent);
    this.navCtrl.parent.parent.popToRoot();
  }
}
