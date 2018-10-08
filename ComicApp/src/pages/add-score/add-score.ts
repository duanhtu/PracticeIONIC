import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Score } from '../../models/score';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, Action } from '@ngrx/store';
import * as reducer from '../../reducers' 
import * as studentsActions from '../../actions/student.actions'

/**
 * Generated class for the AddScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-score',
  templateUrl: 'add-score.html',
})
export class AddScorePage {
  score: Score;
  group: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<reducer.State>) {
    this.group = new FormGroup({
      Id: new FormControl(''),
      Math: new FormControl(''),
      Physics: new FormControl(''),
      Chemistry: new FormControl('')
    });
    this.group.valueChanges.subscribe((data) => {
      this.score = new Score(data.Id, +data.Math, +data.Physics, +data.Chemistry);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddScorePage');
  }

  addScore() {
    this.store.dispatch(new studentsActions.AddScoreAction(this.score));
  }


}
