import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiMockService {
  public getAllTodos(): Observable<Todo[]> {
    return of([
      new Todo({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    todo.id = 1;
    return of(todo);
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return of(
      new Todo({id: todoId, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return of(todo);
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return of(null);
  }
}

