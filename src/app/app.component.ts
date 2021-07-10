import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonClicked=false;
  log : Date[]= [];

  onDisplayDetails(){
    this.buttonClicked= !this.buttonClicked;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
  }

   getDate(){
    return Date.now();
   }
}
