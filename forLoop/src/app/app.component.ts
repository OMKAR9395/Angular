import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Val="Omkar";
  users=["Omkar","Patil","Amar","Sachin","Mahesh","Vishal"];
  students=[
    {name:'Harry',age:25,email:'harry@gmail.com',mobNo:7083454064},
    {name:'karan',age:21,email:'karan@gmail.com',mobNo:7514896258},
    {name:'Potter',age:22,email:'potter@gmail.com',mobNo:9145278435},
    {name:'Patil',age:30,email:'patil@gmail.com',mobNo:8547854128}
  ]
  getName(name:string){
    this.Val=name;
  }
}
