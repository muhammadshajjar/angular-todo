import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './todo.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() onCompletedTodo = new EventEmitter<string>();
  @Output() onEditTodo = new EventEmitter<Todo>();

  // isCompleted?: boolean;

  // ngOnInit(): void {
  //   this.isCompleted = this.todo.completed ? true : false;
  // }

  getTodoStatus() {
    return this.todo.completed ? 'Completed' : 'Complete';
  }
  onComplete() {
    this.onCompletedTodo.emit(this.todo.id);
  }
  onEdit() {
    this.onEditTodo.emit(this.todo);
  }
}
