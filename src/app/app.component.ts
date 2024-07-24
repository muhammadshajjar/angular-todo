import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { TodoComponent } from './components/todo/todo.component';
import { TODOS } from './components/todo/dummy-todos';
import { NgFor, NgIf } from '@angular/common';
import { Todo } from './components/todo/todo.model';
import { FilterComponent } from './components/filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    InputComponent,
    TodoComponent,
    NgFor,
    NgIf,
    FilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
  todos: Todo[] = TODOS;
  filteredTodos: Todo[] = TODOS;
  editTodo!: Todo;

  onGetEditTodo(todo: Todo) {
    this.editTodo = todo;
  }

  onGetEnteredTask(todo: Todo) {
    const index = this.filteredTodos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.filteredTodos[index] = todo;
    } else {
      this.filteredTodos.unshift(todo);
    }
    this.todos = this.filteredTodos;
  }
  onGetCompletedTodoID(id: string) {
    this.filteredTodos = this.filteredTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todos = this.filteredTodos;
  }

  onGetAppliedFilter(currentFilter: string) {
    if (currentFilter === 'todo') {
      return (this.filteredTodos = this.todos.filter(
        (todo) => !todo.completed
      ));
    } else if (currentFilter === 'completed') {
      return (this.filteredTodos = this.todos.filter((todo) => todo.completed));
    } else return (this.filteredTodos = this.todos);
  }

  trackByItems(index: number, item: Todo): string {
    return item.id;
  }
}
