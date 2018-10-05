import { Action } from '@ngrx/store';
import { Student } from 'models/student';

export const LOAD_STUDENTS = 'LOAD_STUDENTS';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';

export class LoadStudentsAction implements Action {
    readonly type = LOAD_STUDENTS;

    constructor() { }
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

export type Actions
    = LoadStudentsAction
    | DeleteStudentAction
    | EditStudentAction
    | AddStudentAction