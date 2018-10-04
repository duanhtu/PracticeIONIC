import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { DetailContentPage} from '../pages/detail-content/detail-content';
import { DetailNamePage } from '../pages/detail-name/detail-name';
import { DetailFilmPage } from '../pages/detail-film/detail-film';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { IonicStorageModule } from '@ionic/storage';
import { Provider } from '../providers/provider/provider';
import { FilmApiProvider } from '../providers/film-api/film-api';
import { DatabaseProvider } from '../providers/database/database';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { FilmEffects } from '../effects/film.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    DetailContentPage,
    DetailNamePage,
    DetailFilmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([FilmEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    DetailContentPage,
    DetailNamePage,
    DetailFilmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    SQLitePorter,
    Provider,
    FilmApiProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
