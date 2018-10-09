import { Action } from '@ngrx/store';
import { StudentApiProvider } from './../providers/student-api/student-api';
import { Injectable } from '@angular/core';
import { Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import * as studentActions from '../actions/student.actions';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentEffects {
    constructor(
        private actions$: Actions,
        private studentApiProvider: StudentApiProvider
    ) { }

    // tslint:disable-next-line:member-ordering
    @Effect() loadStudents$:Observable<Action> = this.actions$
        .ofType(studentActions.LOAD_STUDENTS)
        .switchMap(() => {
            return this.studentApiProvider.getStudents()
                .map(students => new studentActions.LoadStudentsSuccessAction(students));
        });
};