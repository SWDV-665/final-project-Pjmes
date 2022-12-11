import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items:any[]=[];
  constructor() {
    this.items=JSON.parse(localStorage.getItem('todoData') || '[]');
   }
}
