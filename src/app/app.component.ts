import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { TodoComponent } from './components/todo/todo.component';
import { TODOS } from './components/todo/dummy-todos';
import { NgFor, NgIf } from '@angular/common';
import { Todo } from './components/todo/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InputComponent, TodoComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
  todos = TODOS;
  editTodo!: Todo;

  onGetEditTodo(todo: Todo) {
    this.editTodo = todo;
  }
  
  onGetEnteredTask(todo: Todo) {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
    } else {
      this.todos.unshift(todo);
    }
  }
  onGetCompletedTodoID(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  trackByItems(index: number, item: Todo): string {
    return item.id;
  }
}
