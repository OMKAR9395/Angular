import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { every } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  color=2;
  handleColor(val:number){
    this.color=val;
  }
  handleInput(event:Event){
    this.color=parseInt((event.target as HTMLInputElement).value)
  }
}
