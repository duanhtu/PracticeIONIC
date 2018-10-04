import { ActionReducerMap } from '@ngrx/store';
import * as reducer from '../reducers/film.reducer';

export interface State {
     films?: reducer.State;
}

export const reducers: ActionReducerMap<State> = {
    films: reducer.filmReducer
}