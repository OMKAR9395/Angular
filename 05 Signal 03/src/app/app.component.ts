import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  x=signal(10);
  y=signal(20);
  z=computed(()=>this.x()+this.y());

  updateValue(){
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }
}
