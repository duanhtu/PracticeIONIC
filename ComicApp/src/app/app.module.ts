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
import { StudentPage } from '../pages/student/student';
import { EditStudentPage } from '../pages/edit-student/edit-student';
import { AddStudentPage } from '../pages/add-student/add-student';
import { AddScorePage } from '../pages/add-score/add-score';

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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    DetailContentPage,
    DetailNamePage,
    DetailFilmPage,
    StudentPage,
    EditStudentPage,
    AddStudentPage,
    AddScorePage
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
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    DetailContentPage,
    DetailNamePage,
    DetailFilmPage,
    StudentPage,
    EditStudentPage,
    AddStudentPage,
    AddScorePage
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
