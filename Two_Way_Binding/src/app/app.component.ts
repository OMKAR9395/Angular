import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { every } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name="Patil";
  changeName(event:Event){
    const val = (event.target as HTMLInputElement).value
    this.name=val;
  }
}
