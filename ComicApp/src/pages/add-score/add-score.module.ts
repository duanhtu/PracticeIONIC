import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddScorePage } from './add-score';

@NgModule({
  declarations: [
    AddScorePage,
  ],
  imports: [
    IonicPageModule.forChild(AddScorePage),
  ],
})
export class AddScorePageModule {}
