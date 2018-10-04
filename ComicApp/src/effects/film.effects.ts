import { Action } from '@ngrx/store';
import { FilmApiProvider } from './../providers/film-api/film-api';
import { Injectable } from '@angular/core';
import { Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import * as filmActions from '../actions/film.actions';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FilmEffects {
    constructor(
        private actions$: Actions,
        private filmApiProvider: FilmApiProvider
    ) { }

    // tslint:disable-next-line:member-ordering
    @Effect() loadFilm$:Observable<Action> = this.actions$
        .ofType(filmActions.LOAD_FILMS)
        .switchMap(() => {
            return this.filmApiProvider.getFilms()
                .map(films => new filmActions.LoadFilmsSuccessAction(films));
        });
};
