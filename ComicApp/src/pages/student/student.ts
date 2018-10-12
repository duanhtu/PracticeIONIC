import { Score } from 'models/score';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import * as reducer from '../../reducers' 
import * as studentsActions from '../../actions/student.actions'
import { Student } from 'models/student';
import { Observable } from 'rxjs/Rx';
import { EditStudentPage } from '../edit-student/edit-student';
import { AddStudentPage } from '../add-student/add-student';
import { AddScorePage } from '../add-score/add-score';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  student$ : Observable<Student[]>;
  score$ : Observable<Score[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,  private store: Store<reducer.State>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
    this.student$ = this.store.select('student').select(state => state.students);
    this.score$ = this.store.select('student').select(state => state.scores);
    this.store.dispatch(new studentsActions.LoadStudentsAction());
    console.log();
  }

  deleteStudent(student) {
    this.store.dispatch(new studentsActions.DeleteStudentAction(student));
  }

  editStudent(student) {
    this.navCtrl.push(EditStudentPage,student);
  }

  addStudent() {
    this.navCtrl.push(AddStudentPage);
  }

  addScore() {
    this.navCtrl.push(AddScorePage);
  }
}
