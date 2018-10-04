import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { DetailFilmPage } from '../detail-film/detail-film';
import { FilmApiProvider } from '../../providers/film-api/film-api'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: any;
  films: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public filmnApi:FilmApiProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    
    this.items = navParams.data;
    console.log("ListPage params =", this.items);
    console.log("");
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  ionViewDidLoad() {
    console.log("ListPage DidLoad");
    //this.filmnApi.getFilms().then(data => this.films = data);
  }

  ionViewWillEnter() {
    console.log("ListPage WillEnter");
  }

  ionViewDidEnter() {
    console.log("ListPage DidEnter");
  }

  ionViewWillLeave() {
    console.log("ListPage WillLeave");
  }

  ionViewDidLeave() {
    console.log("ListPage DidLeave");
  }

  ionViewWillUnload() {
    console.log("ListPage UnLoad");
  }

  ionViewCanEnter() {
    return true;
  }

  ionViewCanLeave() {
    return true;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailPage, item);
  }

  filmTapped(event, film) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailFilmPage, film.code);
  }
}
