import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  handleClickEvent(){
    console.log("Function Called");
    this.otherFunction();
  }
  otherFunction(){
    console.log("We Are Inside Of Other Function");
  }
}
