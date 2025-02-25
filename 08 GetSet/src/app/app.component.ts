import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "";
  displayName="";
  email="";
  getName(event:Event){
    const val = (event.target as HTMLInputElement).value;
    this.name = val;
  }
  showName(){
    this.displayName=this.name;
  }
  setName(){
    this.name="Omkar";
  }
  getEmail(val:string){
    this.email=val;
  }
  setEmail(){
    this.email="omkarmohite85@gmail.com";
  }

}
