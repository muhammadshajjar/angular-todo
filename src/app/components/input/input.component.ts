import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
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
export class InputComponent implements OnChanges {
  @Input() todoEditItem!: Todo;
  @Output() todoItem = new EventEmitter<Todo>();
  enteredTitle = '';

  getButtonNameBasedOnStatus() {
    return this.todoEditItem?.title ? 'Edit' : 'Add';
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.enteredTitle = this.todoEditItem?.title;
  }
  onAddTodo(form: NgForm) {
    let todo: Todo;
    if (this.todoEditItem?.title) {
      todo = { ...this.todoEditItem, title: this.enteredTitle };
    } else {
      todo = {
        id: crypto.randomUUID(),
        title: this.enteredTitle,
        date_added: new Date().toISOString(),
      };
    }
    
    this.todoItem.emit(todo);

    form.resetForm();
    this.todoEditItem = { id: '', title: '', date_added: '' };
  }
}
