import { Action } from '@ngrx/store';
import { Film } from 'models/film';

export const LOAD_FILMS = 'LOAD_FILMS';
export const LOAD_FILMS_SUCCESS = 'LOAD_FILMS_SUCCESS';

export class LoadFilmsAction implements Action {
    readonly type = LOAD_FILMS;

    constructor() { }
}

export class LoadFilmsSuccessAction implements Action {
    readonly type = LOAD_FILMS_SUCCESS;

    constructor(public payload: Film[]) { }
}

export type Actions
    = LoadFilmsAction
    | LoadFilmsSuccessAction