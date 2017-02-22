import { Component } from '@angular/core';

@Component({
  selector: 'guessit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randNumber: number;
  guessedNumber: number;
  deviation: number;
  trials: number;

  constructor(){
    this.initializeGame();
  }

  initializeGame(){
    this.trials = 0;
    this.randNumber = Math.floor((Math.random() * 1000) + 1);
    this.guessedNumber = null;
    this.deviation = null;
  }

  verifyGuess(){
      this.deviation = this.randNumber - this.guessedNumber;
      this.trials += 1;
  }

}
