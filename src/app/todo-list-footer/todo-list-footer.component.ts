import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html'
})
export class TodoListFooterComponent {
  @Input()
  todos: Todo[];
}
