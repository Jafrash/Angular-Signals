import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public count=signal(0);
  
  increment(){
    this.count.update((oldValue)=>oldValue+1);
  }

  decrement(){
    this.count.update((oldValue)=>oldValue-1);
  }

  reset(){
    this.count.set(0);
  }

  getCount(){
    return this.count;

  }


}
