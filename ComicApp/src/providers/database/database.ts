import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { BehaviorSubject } from 'rxjs';
import { Provider } from '../provider/provider';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SafeResourceUrl } from '../../../node_modules/@angular/platform-browser';
import { Item } from '../../../node_modules/ionic-angular/umd';
import 'rxjs/Rx';

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

  constructor(public http: HttpClient, private sqlLite: SQLite, private provider: Provider, private sqlPorter: SQLitePorter) {
    // this.sqlLite.create({ name: this.database_name, location: 'default' })
    //   .then((db: SQLiteObject) => {
    //     this.database = db;
    //     db.executeSql('create table if not exists `ComicData`(id varchar(255), name varchar(255), type varchar(255), status integer)', [])
    //       .then(res => {
    //         this.getTypes().then(data => {
    //           if (data.rows.length > 0) {
    //             this.databaseReady.next(true);
    //             // let sql = "alter table `ComicData` add des varchar(255) ";
    //             // this.database.executeSql(sql, []).then(res => {
    //             //   this.databaseReady.next(true);
    //             //   console.log('db_excuted');
    //             // });
    //           }
    //           else {
    //             let sql = "INSERT INTO `ComicData` (id,name,type,status) VALUES ('" + "C1" + "','" + "Aladin va du thu than" + "','" + "Than Thoai" + "','" + 2 + "')";
    //             this.database.executeSql(sql, []).then(res => {
    //               this.databaseReady.next(true);
    //               console.log('db_excuted');
    //             });
    //           }
    //         })
    //       })
    //   })
  }
  public init()
  {
    this.sqlLite.create({ name: this.database_name, location: 'default' })
    .then((db: SQLiteObject) => {
      this.database = db;
      db.executeSql('create table if not exists `ComicData`(id varchar(255), name varchar(255), type varchar(255), status integer)', [])
        .then(res => {
          this.getTypes().then(data => {
            if (data.rows.length > 0) {
              this.databaseReady.next(true);
              // let sql = "alter table `ComicData` add des varchar(255) ";
              // this.database.executeSql(sql, []).then(res => {
              //   this.databaseReady.next(true);
              //   console.log('db_excuted');
              // });
            }
            else {
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
    return this.database.executeSql('SELECT * FROM `ComicData`', []);
  }

  public migrateData() {
    this.http.get("../../assets/SQLCommands/SQLRegistry.json").subscribe(data => {
      let sqlRegistry: any = data;
      this.provider.loadLocalStorage("SQLmigrate").then(data => {
        let sqlExcute: Array<string>
        if (data) {
          let sqlMigrate: Array<string> = data;
          sqlExcute = sqlRegistry.filter((item) => {
            return sqlMigrate.indexOf(item) > 0
          }
          );
        }
        else {
          sqlExcute = sqlRegistry
          data = [];
        }
        if (sqlExcute.length > 0) {
          sqlExcute.forEach(async item => {
            console.log();
            let sqlURL = "../../assets/SQLCommands/" + item + ".sql";
            let sql = await this.http.get(sqlURL, { responseType: 'text' }).toPromise();
            await this.sqlPorter.importSqlToDb(this.database, sql);
            data.push(item);
            this.provider.saveLocalStorage("SQLmigrate", data);
          })
        }
      })
    });
  }


}
