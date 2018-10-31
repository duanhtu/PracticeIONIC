import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AngularHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AngularHttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AngularHttpProvider Provider');
  }

  public getFilms() {
    console.log("AngularHTTProvider getFilms");
    let a = this.http.get('http://localhost:58395/api/values');
    return a;
  }

}
