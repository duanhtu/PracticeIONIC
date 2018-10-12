import { Action } from '@ngrx/store';
import { Film } from 'models/film';

export const LOAD_FILMS = 'LOAD_FILMS';
export const LOAD_FILMS_SUCCESS = 'LOAD_FILMS_SUCCESS';
export const ADD_FILM = "ADD_FILM";
export const ADD_FILM_SUCCESS = "ADD_FILM_SUCCESS"

export class LoadFilmsAction implements Action {
    readonly type = LOAD_FILMS;
    constructor() { }
}

export class LoadFilmsSuccessAction implements Action {
    readonly type = LOAD_FILMS_SUCCESS;
    constructor(public payload: Film[]) { }
}

export class AddFilmAction implements Action {
    readonly type = ADD_FILM;
    constructor(public payload: Film) { }
}

export class AddFilmSuccessAction implements Action {
    readonly type = ADD_FILM_SUCCESS;
    constructor() { }
}

export type Actions
    = LoadFilmsAction
    | LoadFilmsSuccessAction
    | AddFilmAction
    | AddFilmSuccessAction