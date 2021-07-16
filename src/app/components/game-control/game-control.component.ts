import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalGame = new EventEmitter<number>();
  counter:number=1;
  id: any;


  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.onStop();
    this.id = setInterval(() => {
      this.intervalGame.emit(this.counter);
      this.counter++;
      }, 1000);


  }

  onStop(){
    // if(this.id)
      clearInterval(this.id);
  }
}
