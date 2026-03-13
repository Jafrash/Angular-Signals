import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service';

@Component({
  standalone: true,
  selector: 'app-increment',
  imports: [],
  templateUrl: './increment.html',
  styleUrls: ['./increment.css'],
})
export class Increment {
  public countService=inject(CounterService);

  increment(){
    this.countService.increment();
  }

}
