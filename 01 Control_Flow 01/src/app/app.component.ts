import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 display=true;
 x=10;
 toggleDiv=true;
toggleTwo(){
this.toggleDiv=!this.toggleDiv;
}

 hide(){
  this.display=false;
 }
 show(){
  this.display=true;
 }
 toggle(){
  this.display=!this.display;
 }
}
