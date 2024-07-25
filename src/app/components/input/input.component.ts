import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  private _todoEditItem!: Todo | null;
  @Output() todoItem = new EventEmitter<Todo>();
  @Output() onCancelTodo = new EventEmitter<void>();
  enteredTitle = '';

  @Input('todoEditItem') set todoEditItem(value: Todo | null) {
    this._todoEditItem = value;
    this.enteredTitle = value?.title || '';
  }
  get todoEditItem() {
    return this._todoEditItem;
  }
  onAddTodo() {
    let todo: Todo;
    if (this.todoEditItem?.title) {
      todo = { ...this.todoEditItem, title: this.enteredTitle };
    } else {
      todo = {
        id: crypto.randomUUID(),
        title: this.enteredTitle,
        date_added: new Date().toISOString(),
        completed: false,
      };
    }
    this.todoItem.emit(todo);
    this.resetFields();
  }

  onCancelEdit() {
    this.onCancelTodo.emit();
  }
  resetFields() {
    this.enteredTitle = '';
    this.todoEditItem = null;
  }
}
