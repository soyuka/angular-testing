import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html'
})
export class TodoListHeaderComponent {
  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
