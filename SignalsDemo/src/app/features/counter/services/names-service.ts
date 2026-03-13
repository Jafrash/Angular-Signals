import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NamesService {
  private names=signal<string[]>(['Jafrash','Mahesh','Hrithik','Suriya','Ranbir']);

  getNames(){
    return this.names;
  }

  addName(name:string){
    this.names.update((oldNames)=>[...oldNames,name]);
  }

  removeName(name:string){
    this.names.update((oldName)=>oldName.filter((n)=>n!==name));
  }

  editName(oldName: string, newName: string){
    this.names.update((arr)=>arr.map(n => n === oldName ? newName : n));
  }

  

}
