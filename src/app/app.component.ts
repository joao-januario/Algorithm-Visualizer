import { Component } from '@angular/core';
import { algorithms } from './algorithms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algorithm-visualizer';
  algorithms = algorithms;
}

