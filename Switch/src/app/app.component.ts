import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  color='red';
  handleColor(Val:string){
    this.color=Val;
  }
  changeColor(event:Event){
    this.color=(event.target as HTMLInputElement).value;
  }
}
