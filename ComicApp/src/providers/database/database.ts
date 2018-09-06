import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  private _DB: SQLiteObject;
  private _DB_NAME: string = "ionic.db";

  constructor(public http: HttpClient, private _PLAT: Platform,
    private _SQL: SQLite,
    private _PORTER: SQLitePorter) {
    console.log('Hello DatabaseProvider Provider');
  }

  init() : void
   {
       // Define the application SQLite database
       this._SQL.create({
          name 		  : this._DB_NAME,
          location 	  : 'default'
       })
       .then((db: SQLiteObject) =>
       {
          // Associate the database handler object with the _DB private property
          this._DB = db;
       })
       .catch((e) =>
       {
          console.log(e);
       });
   }

   dataExistsCheck(tableName : string) : Promise<any>
   {
      return new Promise((resolve, reject) =>
      {
         this._DB.executeSql('SELECT count(*) AS numRows FROM ' + tableName, {})
         .then((data : any) =>
         {
            var numRows = data.rows.item(0).numRows;
            resolve(numRows);
         })
         .catch((e) =>
         {
            reject(e);
         });
      });
   }

   retrieveAllRecords() : Promise<any>
   {
      return new Promise((resolve, reject) =>
      {

         this._DB.executeSql('SELECT id, name, description FROM technologies', {})
         .then((data : any) =>
         {
            let items : any 	= [];
            if(data.rows.length > 0)
            {
               var k;

               // iterate through returned records and push as nested objects into
               // the items array
               for(k = 0; k < data.rows.length; k++)
               {
                  items.push(
                  {
	                 id 			    : data.rows.item(k).id,
	                 name 			    : data.rows.item(k).name,
	                 description 	    : data.rows.item(k).description
                  });
               }
            }
            resolve(items);
         })
         .catch((error : any) =>
         {
            reject(error);
         });

      });
   }

   importJSON(json : any) : Promise<any>
   {
      return new Promise((resolve, reject) =>
      {
         this._PORTER
         .importJsonToDb(this._DB, json)
         .then((data) =>
         {
            resolve(data);
         })
         .catch((e) =>
         {
            reject(e);
         });
      });
   }
}
