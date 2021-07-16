import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intervals: number[]=[];

  onEmittingNumbers(counter: number){
    this.intervals.push(counter);
  }
}
