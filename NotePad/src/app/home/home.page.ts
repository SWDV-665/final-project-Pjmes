import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AddNotePage } from '../add-note/add-note.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  addNote(){
    console.log('Moving to Add New Note');
    this.navCtrl.navigateForward(AddNotePage);
  }

}
