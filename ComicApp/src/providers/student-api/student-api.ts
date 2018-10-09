import { Score } from '../../models/score';
import { Student } from './../../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/observable/of";
import { Observable } from 'rxjs';

/*
  Generated class for the StudentApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentApiProvider {
  students: Array<Student> = [{id:'T1', name:'Robin', total: 0, pass: false}, {id:'T2', name:'Batman', total: 0, pass: false}]
  scores: Score[]

  constructor(public http: HttpClient) {
    console.log('Hello StudentApiProvider Provider');
  }

  getStudents(): Observable<Student[]> {
    return Observable.of(this.students);
  }

  getScores() {

  }
}
