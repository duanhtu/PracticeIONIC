import { ActionReducerMap } from '@ngrx/store';
import * as reducer from '../reducers/film.reducer';
import * as reducerStudent from '../reducers/student.reducer';

export interface State {
     films: reducer.State;
     student: reducerStudent.State
}

export const reducers: ActionReducerMap<State> = {
    films: reducer.filmReducer ,
    student: reducerStudent.studentReducer
}