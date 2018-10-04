import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import * as reducer from '../../reducers' 
import * as studentsActions from '../../actions/student.actions'
import { Student } from 'models/student';
import { Observable } from 'rxjs/Rx';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,  private store: Store<reducer.State>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
    this.student$ = this.store.select('student').select(state => state.student);
    this.store.dispatch(new studentsActions.LoadStudentsAction());
  }

  deleteStudent(student) {
    this.store.dispatch(new studentsActions.DeleteStudentAction(student));
  }
}
