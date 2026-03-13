import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service';

@Component({
  standalone: true,
  selector: 'app-reset',
  imports: [],
  templateUrl: './reset.html',
  styleUrls: ['./reset.css'],
})
export class Reset {

  public counterService=inject(CounterService);

  reset(){
    this.counterService.reset();
  }
}
