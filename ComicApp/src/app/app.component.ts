import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StudentPage } from '../pages/student/student';
import { Provider } from '../providers/provider/provider';
import { DatabaseProvider } from '../providers/database/database';
import { Store } from '@ngrx/store';
import 'rxjs/Rx';
import * as reducer from '../reducers' 
import * as filmActions from '../actions/film.actions'
import { Observable } from 'rxjs/Rx';
import { Film } from '../models/film';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  comics: any;
  type = [];
  films: Observable<Film[]>;
  pages: Array<{ title: string, component: any }>;

 
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public http: Http,/* private provider: Provider, private databaseProvider: DatabaseProvider,*/ private store: Store<reducer.State>) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
    //this.films = this.store.select('films').select(state => state.films);
    //this.store.dispatch(new filmActions.LoadFilmsAction());
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.databaseProvider.databaseReady.subscribe((data) => {
      //   if(data)
      //   {
      //     this.getAllTypes();
      //   }
      // });
      //this.databaseProvider.init();
      //this.databaseProvider.migrateData();
      this.platform.resume.subscribe ((result) => {
        console.log("App Resume");
      });
      this.platform.pause.subscribe((result) => {
        console.log("App pause");
      })
    });
  }

  getAllTypes() {
    // this.databaseProvider.getTypes().then(data => {
    //   for(let i = 0; i < data.rows.length; i++) {
    //     let item = data.rows.item(i);
    //     this.type.push(item);
    //   }
    // })
  }

  openPage(comic) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(ListPage, comic.comic);
  }

  openStudent(){
    this.nav.push(StudentPage);
  }
  ngOnInit() {
    // this.provider.loadLocalStorage('comic').then(data => {
    //   if (data != null) {
    //     this.comics = data;
    //   }
    //   else {
    //     this.http.get('../assets/data/comic.json').map(res => res.json()).subscribe(data => {
    //       this.comics = data.data;
    //       this.provider.saveLocalStorage('comic',this.comics);
    //     })
    //   }
    // })
  }

}
