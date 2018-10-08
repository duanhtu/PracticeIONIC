import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as reducer from '../../reducers' 
import * as studentsActions from '../../actions/student.actions'
import { Student } from '../../models/student';

/**
 * Generated class for the EditStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {
  student: Student;
  group: FormGroup;
  studentEdit: Student;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private store: Store<reducer.State>) {
    this.student = this.navParams.data;
    this.group = new FormGroup({
      Id: new FormControl(this.student.id),
      Name: new FormControl (this.student.name),
     
    });
    this.group.valueChanges.subscribe((data) => {
      this.studentEdit = new Student(data.Id,data.Name);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditStudentPage');
  }

  ionViewDidEnter(){
    
  }

  saveEdit() {
    this.store.dispatch(new studentsActions.EditStudentAction(this.student, this.studentEdit));
  }
}
