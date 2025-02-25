import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  timer: any;
  seconds: number = 0;
  isRunning: boolean = false;
  timerDisplay: string = "00:00:00";

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.seconds++;
        this.timerDisplay = new Date(this.seconds * 1000).toISOString().substr(11, 8);
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.seconds = 0;
    this.timerDisplay = "00:00:00";
  }

  resumePauseTimer() {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.isRunning = false;
    } else {
      this.startTimer();
    }
  }
}
