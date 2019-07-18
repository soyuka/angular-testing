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

describe('TodoDataService', () => {
  let todoDataService: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

    todoDataService = TestBed.get(TodoDataService);
  });
});
