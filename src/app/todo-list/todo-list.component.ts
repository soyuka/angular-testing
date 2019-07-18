import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
