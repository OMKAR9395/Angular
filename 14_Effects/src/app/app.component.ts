import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName= signal('Fork Infosystem');
  count=signal(0);
  displayHeading=false;
  constructor(){
    effect(()=>{
      if(this.count()==2)
      {
        this.displayHeading=true;
        setTimeout(()=>{
          this.displayHeading=false;
        },2000)
      }
      else{
        this.displayHeading=false;
      }
    })
  }
  togglValue(){
    this.count.set(this.count()+1);
  }
}
