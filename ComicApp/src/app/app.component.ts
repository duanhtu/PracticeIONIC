import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Provider } from '../providers/provider/provider';
import { DatabaseProvider } from '../providers/database/database';
import 'rxjs/Rx';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  comics: any;
  type = [];
 
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public http: Http, private provider: Provider, private databaseProvider: DatabaseProvider) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.databaseProvider.databaseReady.subscribe((data) => {
        if(data)
        {
          this.getAllTypes();
        }
      });
    });
  }

  getAllTypes() {
    this.databaseProvider.getTypes().then(data => {
      for(let i = 0; i < data.rows.length; i++) {
        let item = data.rows.item(i);
        this.type.push(item);
      }
    })
  }

  openPage(comic) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(ListPage, comic.comic);
  }

  ngOnInit() {
    this.provider.loadLocalStorage().then(data => {
      if (data != null) {
        this.comics = data;
      }
      else {
        this.http.get('../assets/data/comic.json').map(res => res.json()).subscribe(data => {
          this.comics = data.data;
          this.provider.saveLocalStorage(this.comics);
        })
      }
    })
  }

}
