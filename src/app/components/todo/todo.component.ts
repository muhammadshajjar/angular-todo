import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './todo.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() onCompletedTodo = new EventEmitter<string>();
  @Output() onEditTodo = new EventEmitter<Todo>();

  onComplete() {
    this.onCompletedTodo.emit(this.todo.id);
  }
  onEdit() {
    this.onEditTodo.emit(this.todo);
  }
}
