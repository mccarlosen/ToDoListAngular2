import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo, TODOS } from '../../shared/base-todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  status: boolean = false;
  todoForm: FormGroup;
  todo: Todo;
  todos: Todo[] = TODOS;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.todoForm = this.fb.group({
      todo: ['', Validators.required]
    })

    this.todoForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.todoForm) { return; } // check if form exist
    const form = this.todoForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    todo: ''
  };

  validationMessages = {
    todo: {
      'required': 'Texto es requerido.'
    }
  };

  addTodo() {
    let form = this.todoForm;
    let control = form.get('todo');
    if(control) {
      this.title = control.value.trim();
      this.todo = {title: this.title, status: this.status};
      this.todos.push(this.todo);
      form.reset();
    } 
  }

}
