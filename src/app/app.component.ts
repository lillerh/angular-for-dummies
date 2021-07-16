import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intervals: number[]=[];
  oddNumber = false;
  evenNumber = false;

  onEmittingNumbers(counter: any){
    this.intervals.push(counter);
    console.log(this.oddNumber);

    console.log(this.evenNumber);

    console.log(this.intervals);

  }
}
