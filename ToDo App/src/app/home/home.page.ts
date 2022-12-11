import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: NavController, public dataService: DataService) {
    console.log(this.dataService.items)
  }

  addTodos() {
    this.router.navigateForward('add-todo');
  }
  deleteTodo(item: any) {
    this.dataService.items = this.dataService.items.filter(x => x.id != item.id);

    localStorage.setItem('todoData', JSON.stringify(this.dataService.items));
    console.log(this.dataService.items);
  }
  edit(todo:any){
    localStorage.setItem('one-todo',JSON.stringify(todo));
    this.router.navigateForward('add-todo');
  }
}
