import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../../models/student';
import { Store, Action } from '@ngrx/store';
import * as reducer from '../../reducers' 
import * as studentsActions from '../../actions/student.actions'

/**
 * Generated class for the AddStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {
  student: Student;
  group: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private store: Store<reducer.State>) {
    this.group = new FormGroup({
      Id: new FormControl(''),
      Name: new FormControl (''),
      Class: new FormControl ('')
    });
    this.group.valueChanges.subscribe((data) => {
      this.student = new Student(data.Id,data.Name, data.Class);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStudentPage');
  }

  addStudent() {
    this.store.dispatch(new studentsActions.AddStudentAction(this.student));
  }

}
