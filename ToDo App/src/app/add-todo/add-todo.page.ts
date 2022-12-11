import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
public data={
  id: Math.floor((Math.random() * 99999) + 1),
  title:'',
  description:''
}

  constructor(
    public router:NavController,
    public loadingController:LoadingController,
    public dataService:DataService
    ) {
      let temp = localStorage.getItem('one-todo');
      if(temp){
        this.data=JSON.parse(temp);
      }else{
        
      }
     }

  ngOnInit() {
  }
 async save(){
    const loading = await this.loadingController.create({
      message: 'Please wait',
    });
    loading.present();
    if(!this.data.title || !this.data.description){
      loading.dismiss();
      alert('Please Enter All Fields');
    }else{
       let index = this.dataService.items.findIndex(x => x.id === this.data.id);

      console.log(index);
      if(index== -1){
        console.log("Add new");
        this.dataService.items.push(this.data);
        localStorage.setItem('todoData',JSON.stringify(this.dataService.items));
        loading.dismiss();
        console.log(this.dataService.items);
       
      }else {
        console.log("update");

        this.dataService.items[index]=this.data;
        localStorage.removeItem('one-todo');
        localStorage.setItem('todoData',JSON.stringify(this.dataService.items));
        loading.dismiss();
      }
      this.router.navigateRoot('home');
    
    }
   
  }

}
