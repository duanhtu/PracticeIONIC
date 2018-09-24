import { Type } from './../../model/Type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import {} from '../../model/Type'

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  private _DB 	: SQLiteObject;
  private _DB_NAME : string 		= "ionic.db";

  constructor(public http: HttpClient, private _SQL        : SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  public init () {
    this._SQL.create({
      name 		  : this._DB_NAME,
      location 	  : 'default'
   })
   .then((db: SQLiteObject) =>
   {
     this._DB = db;
     return this._DB.executeSql('CREATE TABLE IF NOT EXISTS type(id TEXT PRIMARY KEY, date TEXT)');
   })
   .then(res => {
     return this._DB.executeSql('INSERT INTO type VALUES(?,?)',['T1', 'SACH GIAO KHOA']);
   })
   .catch((e) =>
   {
      console.log(e);
   });
  }

  public getType(): Promise<any> {
    return this._DB.executeSql('SELECT * FROM TYPE');
  }

}
