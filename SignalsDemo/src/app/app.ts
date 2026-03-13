import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowCount } from "./features/counter/components/show-count/show-count";
import { Increment } from "./features/counter/components/increment/increment";
import { Decrement } from "./features/counter/components/decrement/decrement";
import { Reset } from "./features/counter/components/reset/reset";
import { ShowNames } from "./features/counter/components/show-names/show-names";
import { AddName } from "./features/counter/components/add-name/add-name";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, ShowCount, Increment, Decrement, Reset, ShowNames, AddName],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('SignalsDemo');
}
