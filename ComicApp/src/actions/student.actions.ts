import { Action } from '@ngrx/store';
import { Student } from 'models/student';

export const LOAD_STUDENTS = 'LOAD_STUDENTS';
export const LOAD_STUDENTS_SUCCESS = 'LOAD_STUDENTS_SUCCESS';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';

export class LoadStudentsAction implements Action {
    readonly type = LOAD_STUDENTS;

    constructor() { }
}


export class DeleteStudentAction implements Action {
    readonly type = DELETE_STUDENT;

    constructor(public payload: Student) { }
}


export type Actions
    = LoadStudentsAction
    | DeleteStudentAction