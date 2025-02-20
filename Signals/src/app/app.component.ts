import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count=signal(10);
  x=20;
  // constructor(){
  //   effect(()=>{
  //     console.log(this.count());
  //     console.log(this.x);
  //   })
  // }
  // increaseValue(){
  //   this.count.set(this.count()+1);
  //   this.x=this.x+1;
  // }
  updateVal(Val:string){
    if(Val=='inc'){
      this.count.set(this.count()+1);
    }
    else
    {
      this.count.set(this.count()-1);
    }
  }
}
