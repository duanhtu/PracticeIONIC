import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  constructor(public navCtrl: NavController) {

  }

  // ngOnChanges() {
  //   console.log("Home ngOnChanges");
  // }

  // ngOnInit() {
  //   console.log("Home ngOnInit");
  // }

  // ngDoCheck() {
  //   console.log("Home ngDoCheck");
  // }

  // ngAfterContentInit() {
  //   console.log("Home ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("Home ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("Home ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("Home ngAfterViewChecked");
  // }

  // ngOnDestroy() {
  //   console.log("Home ngOnDestroy");
  // }

  ionViewDidLoad() {
    console.log("Home DidLoad");
  } 

  ionViewWillEnter() {
    console.log("HomePage WillEnter");
  }

  ionViewDidEnter() {
    console.log("HomePage DidEnter");
  }

  ionViewWillLeave() {
    console.log("HomePage WillLeave");
  }

  ionViewDidLeave() {
    console.log("HomePage DidLeave");
  }

  ionViewWillUnload() {
    console.log("HomePage UnLoad");
  }

}
