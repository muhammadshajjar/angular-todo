import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() filter!: string;
  @Output() onCompletedTodo = new EventEmitter<string>();
  @Output() onEditTodo = new EventEmitter<Todo>();

  onComplete() {
    this.onCompletedTodo.emit(this.todo.id);
  }
  onEdit() {
    this.onEditTodo.emit(this.todo);
  }
}
