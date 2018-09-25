import { Type } from './../../model/Type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { } from '../../model/Type'
import { BehaviorSubject } from 'rxjs';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  private database: SQLiteObject;
  private database_name: string = "ionic.db";
  public databaseReady = new BehaviorSubject(false);

  constructor(public http: HttpClient, private sqlLite: SQLite) {
    this.sqlLite.create({ name: this.database_name, location: 'default' })
    .then((db: SQLiteObject) => {
      this.database = db;
      return this.database.executeSql("CREATE TABLE IF NOT EXISTS type(id TEXT PRIMARY KEY, date TEXT)");
    })
    .then (res => {
      this.getTypes().then(data => {
        if(data.rows.length > 0)
        {
          this.databaseReady.next(true);
        }
        else
        {
          this.database.executeSql('INSERT INTO type VALUES(?,?)', ['T1', 'SACH GIAO KHOA']);
          this.databaseReady.next(true);
        }
      })
    })
  }

  public getTypes(): Promise<any> {
    return this.database.executeSql('SELECT * FROM TYPE');
  }

}
