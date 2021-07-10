import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonClicked=false;
  log :number[]= [];

  onDisplayDetails(){
    this.buttonClicked= !this.buttonClicked;
    this.log.push(this.log.length + 1);
  }

   getDate(){
    return Date.now();
   }
}
