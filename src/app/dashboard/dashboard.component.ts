import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title: string = "Bienvenidos";
  subtitle: string = "Simple ToDoList with Angular 2";
}
