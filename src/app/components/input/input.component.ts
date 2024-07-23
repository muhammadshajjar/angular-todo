import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Output() todoItem = new EventEmitter<Todo>();
  enteredTitle = '';

  onAddTodo(form: NgForm) {
    const todo: Todo = {
      id: Math.random().toString(),
      title: this.enteredTitle,
      date_added: new Date().toISOString(),
    };
    this.todoItem.emit(todo);
    form.resetForm();
  }
}
