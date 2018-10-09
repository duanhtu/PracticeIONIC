import { Action } from '@ngrx/store';
import { Student } from 'models/student';
import { Score } from '../models/score';

export const LOAD_STUDENTS = 'LOAD_STUDENTS';
export const LOAD_STUDENTS_SUCCESS = 'LOAD_STUDENT_SUCCESS';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';
export const ADD_SCORE = 'ADD_SCORE';

export class LoadStudentsAction implements Action {
    readonly type = LOAD_STUDENTS;

    constructor() { }
}

export class LoadStudentsSuccessAction implements Action {
    readonly type = LOAD_STUDENTS_SUCCESS;

    constructor(public students: Student[]) { }
}

export class DeleteStudentAction implements Action {
    readonly type = DELETE_STUDENT;

    constructor(public payload: Student) { }
}

export class EditStudentAction implements Action {
    readonly type = EDIT_STUDENT;

    constructor(public student: Student, public studentEdit: Student) { }
}

export class AddStudentAction implements Action {
    readonly type = ADD_STUDENT;

    constructor(public student: Student) { }
}

export class AddScoreAction implements Action {
    readonly type = ADD_SCORE;

    constructor(public score: Score) { }
}

export type Actions
    = LoadStudentsAction
    | LoadStudentsSuccessAction
    | DeleteStudentAction
    | EditStudentAction
    | AddStudentAction
    | AddScoreAction