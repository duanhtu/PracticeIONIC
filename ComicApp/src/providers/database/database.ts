import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
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
      db.executeSql('create table if not exists `ComicData`(id varchar(255), name varchar(255), type varchar(255), status integer)',[])
      .then (res => {
        this.getTypes().then(data => {
          if(data.rows.length > 0)
          {
            this.databaseReady.next(true);
            // let sql = "alter table `ComicData` add des varchar(255) ";
            // this.database.executeSql(sql, []).then(res => {
            //   this.databaseReady.next(true);
            //   console.log('db_excuted');
            // });
          }
          else
          {
            let sql = "INSERT INTO `ComicData` (id,name,type,status) VALUES ('" + "C1" + "','" + "Aladin va du thu than" + "','" + "Than Thoai" + "','" + 2 + "')";
            this.database.executeSql(sql, []).then(res => {
              this.databaseReady.next(true);
              console.log('db_excuted');
            });
          }
        })
      })
    })
  }

  public getTypes(): Promise<any> {
    return this.database.executeSql('SELECT * FROM `ComicData`',[]);
  }

  

}
