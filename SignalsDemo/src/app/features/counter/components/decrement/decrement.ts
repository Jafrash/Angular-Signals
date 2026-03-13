import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service';

@Component({
  standalone: true,
  selector: 'app-decrement',
  imports: [],
  templateUrl: './decrement.html',
  styleUrls: ['./decrement.css'],
})
export class Decrement {
  public counterService=inject(CounterService);

  decrement(){
    this.counterService.decrement();
  }
  
}
