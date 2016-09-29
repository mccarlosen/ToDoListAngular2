import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { todoListRouting } from './todo-list.routing';

import { TodoListComponent } from './todo-list.component';
import { AddTodoComponent } from './add-todo';
import { TodosListComponent } from './todos-list/todos-list.component';


@NgModule({
  declarations: [
    TodoListComponent,
    AddTodoComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    todoListRouting
  ],
  providers: [],
  bootstrap: [TodoListComponent]
})
export class TodoListModule { }
