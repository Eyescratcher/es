import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  id!:number;

  constructor() { }

  setId(data:number){
    this.id = data;
  }

  getId(){
    return this.id;
  }
}
