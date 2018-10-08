import { Student} from 'models/student';
import { Score } from '../models/score';
import * as fromStudents from '../actions/student.actions';

export interface State {
    students: Student[];
    scores: Score[];
};

export function studentReducer(state = {students: [], scores: []}, action: fromStudents.Actions): State {
    switch (action.type) {    
        // case fromStudents.DELETE_STUDENT: {
        //     let student = action.payload;
        //     let newStudents = Object.assign([],state.student);
        //     newStudents.splice( newStudents.indexOf(student), 1);
        //     return {
        //         student: newStudents
        //     }
        // }
        // case fromStudents.EDIT_STUDENT:{
        //     let student = action.student;
        //     let studentEdit = action.studentEdit;
        //     let newStudents = Object.assign([],state.student);
        //     let indexEdit = newStudents.indexOf(student);
        //     newStudents[indexEdit] = studentEdit;
        //     return {
        //         student : newStudents
        //     }
        // }
        case fromStudents.ADD_STUDENT: {
            let student = action.student;
            student.total = 0;
            student.pass = false;
            let newStudents = Object.assign([],state.students);
            newStudents.push(student);
            return {
                ...state,
                students : newStudents
            }
        }

        case fromStudents.ADD_SCORE: {
            let score = action.score;
            let newScores = Object.assign([],state.scores);
            newScores.push(score);
            let newStudents = Object.assign([],state.students);
            let student: Student = newStudents.find((ele) => ele.id == score.id);
            student.total = score.chemistry + score.math + score.physics;
            if(student.total >= 10)
            {
                student.pass = true;
            }
            return {
                scores: newScores,
                students: newStudents
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