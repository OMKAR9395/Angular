import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    count = 0;
   /*
    countIncrement(){
      this.count=this.count + 1;
    }
    countDecrement(){
      this.count = this.count - 1;
    }
    countReset(){
      this.count=0;
    }
  */
    handleCounter(val:string){
      if(val == 'minus'){
        
        if(this.count <= 0){
          this.count=0;  
        }else{
          this.count = this.count - 1;
        }
      }else if(val == 'plus'){
        this.count=this.count + 1;
      }else{
        this.count=0;
      }
    }
}
