import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello Provider Provider');
  }

  saveLocalStorage(comicData: any) {
    this.storage.set('comic', comicData);
  }

  loadLocalStorage() {
    return this.storage.get('comic');
  }
}
