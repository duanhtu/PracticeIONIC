import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable'

/*
  Generated class for the NativeHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class NativeHttpProvider {

  constructor(public http: HTTP) {
    console.log('Hello NativeHttpProvider Provider');
  }

  public getFilms() {
    let result = null;
    this.http.get("http://localhost:58395/api/values", {}, {}).then(res => {
      result = res;
    });
    return Observable.fromPromise(result);
  }
}
