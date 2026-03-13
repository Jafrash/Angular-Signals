import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service';

@Component({
  selector: 'app-show-count',
    standalone: true,
    imports: [],
  templateUrl: './show-count.html',
  styleUrls: ['./show-count.css'],
})
export class ShowCount {
  public counterService=inject(CounterService);
  
}
