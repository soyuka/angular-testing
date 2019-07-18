/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { TodoListComponent } from './todo-list.component';
import { Todo } from '../todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent, TodoListItemComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    component.todos = [
     new Todo({ id: 1, title: 'Test', complete: false }),
     new Todo({ id: 2, title: 'Test', complete: false }),
     new Todo({ id: 3, title: 'Test', complete: true })
    ];
    element = fixture.debugElement;
    fixture.detectChanges();
  });

});
