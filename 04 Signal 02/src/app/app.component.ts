import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data=signal<string  | number> (10);

  datas : WritableSignal<string | number> = signal("omkar");

  //count : Signal<number> = computed(()=>550);
  count : WritableSignal<number> = signal(10)
 
  updateSignal(){
    this.data.set("Hello");
  }
  updateClick(){
    this.datas.set(123);
  }
  updateCount(){
    this.count.update((val)=>val+1);
  }
}
