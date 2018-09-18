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
    return new Promise(resolve => {
      this.http.get('http://localhost:58395/api/values').subscribe(res => resolve(res.json()));
    });
  }

  getFilm(id) {
    return this.http.get('http://localhost:58395/api/values/' + id).map(res => res.json());
  }
}
