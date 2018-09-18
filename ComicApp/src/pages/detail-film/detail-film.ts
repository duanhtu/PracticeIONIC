import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilmApiProvider } from '../../providers/film-api/film-api'

/**
 * Generated class for the DetailFilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-film',
  templateUrl: 'detail-film.html',
})
export class DetailFilmPage {
  id:string;
  film = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public filmnApi:FilmApiProvider) {
    this.id = navParams.data;
  }

  ionViewDidLoad() {
    console.log("DetailFilmPage DidLoad");
    this.filmnApi.getFilm(this.id).subscribe(res => {
      this.film = res;
      console.log("DetailFilmPage film = ", this.film);
    })
  }

}
