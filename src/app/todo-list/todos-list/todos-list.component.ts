import { Component } from '@angular/core';
import { Todo, TODOS } from '../../shared/base-todos';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  todos: Todo[];

  constructor() {
    this.todos = TODOS;
  }
  onSelect(todo: Todo) {
    console.log(todo);
    if(todo) {
      let index = this.todos.indexOf(todo);
      if(index != -1) { 
        let status = this.todos[index].status;
        if(status) {
          this.todos[index].status = false;
        }else{
          this.todos[index].status = true;
        }
      }

    }
  }

}
