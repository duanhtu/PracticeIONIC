import { Film } from './../../models/film';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilmApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmApiProvider {

  constructor(public http: Http) {
    console.log('Hello FilmApiProvider Provider');
  }

  getFilms() {
    // return new Promise(resolve => {
    //   this.http.get('http://localhost:58395/api/values').subscribe(res => {
    //     console.log("getFilms res =",res);
    //     console.log("getFilms res.json =", res.json());
    //     resolve(res.json())});
    // });
    return this.http.get('http://localhost:58395/api/values').map(res => {
      // console.log("getFilm res =",res);
      // console.log("getFilm res.json =", res.json());
      return res.json()
    });
  }

  getFilm(id) {
    return this.http.get('http://localhost:58395/api/values/' + id).map(res => {
      // console.log("getFilm res =",res);
      // console.log("getFilm res.json =", res.json());
      return res.json()
    });
  }

  addFilm(film: Film) {
    return this.http.post('http://localhost:58395/api/values', film);
  }
}
