import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailContentPage } from '../detail-content/detail-content'
import { DetailNamePage } from '../detail-name/detail-name'
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item: string;
  public selectedItem  = {};
  name: string;
  content: string;
  detailContentTab = DetailContentPage
  detailNameTab = DetailNamePage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = this.navParams.data;
    console.log("Detail Page data = ", this.selectedItem);
    //this.content = this.selectedItem.content;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  goHome() {
    console.log("Detail goHome");
    this.navCtrl.popToRoot();
  }

}
