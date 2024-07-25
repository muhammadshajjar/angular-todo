import { Component } from '@angular/core';
import { TODOS } from './components/todo/dummy-todos';
import { Todo } from './components/todo/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
  todos: Todo[] = TODOS;
  editTodo: Todo | null = null;
  filter: string = 'all';

  onGetEditTodo(todo: Todo) {
    this.editTodo = todo;
  }

  onCancelEditTodo() {
    this.editTodo = null;
  }

  onGetEnteredTask(todo: Todo) {
    // Handle add/edit todo in this function
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
    } else {
      this.todos.unshift(todo);
    }
    this.filter = 'all';
  }
  onGetCompletedTodoID(id: string) {
    //handle complete toggle
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  onGetAppliedFilter(currentFilter: string) {
    this.filter = currentFilter;
  }

  get filteredTodos() {
    let filteredTodos;
    switch (this.filter) {
      case 'todo':
        filteredTodos = this.todos.filter((todo) => !todo.completed);
        break;
      case 'completed':
        filteredTodos = this.todos.filter((todo) => todo.completed);
        break;
      default:
        filteredTodos = this.todos;
    }
    return filteredTodos;
  }

  trackByItems(index: number, item: Todo): string {
    return item.id;
  }
}
