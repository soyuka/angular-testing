/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {TodoDataService} from './todo-data.service';
import { ApiService } from './api.service';
import { Todo } from './todo';
import { defer } from 'rxjs';

/**
 * Create async observable that emits-once and completes
 * after a JS engine turn
 */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

const apiServiceSpy = jasmine.createSpyObj('ApiService', [
  'createTodo',
  'deleteTodoById',
  'updateTodo',
  'getAllTodos',
  'getTodoById',
  'toggleTodoComplete'
]);

describe('TodoDataService', () => {
  let todoDataService: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useValue: apiServiceSpy
        }
      ]
    });

    todoDataService = TestBed.get(TodoDataService);
  });


  it('can test TodoDataService.getAllTodos', () => {
    const testData: Todo[] = [new Todo({id: 1, title: 'test', complete: false})];
    apiServiceSpy.getAllTodos.and.returnValue(asyncData(testData));

    todoDataService.getAllTodos().subscribe((data) => {
      expect(data).toEqual(testData);
      expect(apiServiceSpy.getAllTodos).toHaveBeenCalled();
    }, fail);
  });

  it('can test TodoDataService.addTodo', () => {
    const testData: Todo = new Todo({id: 1, title: 'test', complete: false});
    apiServiceSpy.createTodo.and.returnValue(asyncData(testData));

    todoDataService.addTodo(testData).subscribe((data) => {
      expect(data).toEqual(testData);
      expect(apiServiceSpy.createTodo).toHaveBeenCalled();
    }, fail);
  });

  it('can test TodoDataService.deleteTodoById', () => {
    apiServiceSpy.deleteTodoById.and.returnValue(asyncData(null));
    todoDataService.deleteTodoById(1).subscribe((data) => {
      expect(data).toEqual(null);
      expect(apiServiceSpy.deleteTodoById).toHaveBeenCalled();
    }, fail);
  });

  it('can test TodoDataService.toggleTodoComplete', () => {
    const testData: Todo = new Todo({id: 1, title: 'test', complete: false});
    const testDataAfter: Todo = new Todo({id: 1, title: 'test', complete: true});
    apiServiceSpy.updateTodo.and.returnValue(asyncData(testDataAfter));

    todoDataService.toggleTodoComplete(testData).subscribe((data) => {
      expect(data).toEqual(testDataAfter);
      expect(apiServiceSpy.updateTodo).toHaveBeenCalled();
    }, fail);
  });
});
