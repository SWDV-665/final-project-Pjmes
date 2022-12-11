import { Injectable } from '@angular/core';


//for local storage of data input.
@Injectable({
  providedIn: 'root'
})
export class DataService {
public items:any[]=[];
  constructor() {
    this.items=JSON.parse(localStorage.getItem('todoData') || '[]');
   }
}
