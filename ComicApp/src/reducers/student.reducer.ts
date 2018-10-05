import { Student } from 'models/student';
import * as fromStudents from '../actions/student.actions';

export interface State {
    student: Student[];
   
};

export function studentReducer(state = {student: [{id:'T1',name:'Tu', classRoom: 'A3'}, {id:'T2', name: 'Huan', classRoom: "A4"}] }, action: fromStudents.Actions): State {
    switch (action.type) {
        case fromStudents.LOAD_STUDENTS: {
            return  state = state;
        }
        case fromStudents.DELETE_STUDENT: {
            let student = action.payload;
            let newStudents = Object.assign([],state.student);
            newStudents.splice( newStudents.indexOf(student), 1);
            return {
                student: newStudents
            }
        }
        case fromStudents.EDIT_STUDENT:{
            let student = action.student;
            let studentEdit = action.studentEdit;
            let newStudents = Object.assign([],state.student);
            let indexEdit = newStudents.indexOf(student);
            newStudents[indexEdit] = studentEdit;
            return {
                student : newStudents
            }
        }
        case fromStudents.ADD_STUDENT: {
            let student = action.student;
            let newStudents = Object.assign([],state.student);
            newStudents.push(student);
            return {
                student : newStudents
            }
        }

        // case fromStudents.LOAD_FILMS: {
        //     return state = {
        //         films: [],
        //         isLoading : true
        //     };
        // }
        default: {
            return state;
        }
    }
}