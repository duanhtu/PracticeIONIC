import { Film } from 'models/film';
import * as fromFilms from '../actions/film.actions';

export interface State {
    films: Film[];
    isLoading:boolean;
};

const initialState: State = {
    films: [],
    isLoading : false
};

export function filmReducer(state = initialState, action: fromFilms.Actions): State {
    switch (action.type) {
        case fromFilms.LOAD_FILMS_SUCCESS: {
            return state = {
                films: action.payload,
                isLoading : false
            };
        }
        case fromFilms.LOAD_FILMS: {
            return state = {
                films: [],
                isLoading : true
            };
        }
        default: {
            return state;
        }
    }
}