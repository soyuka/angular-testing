/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoListFooterComponent } from './todo-list-footer.component';
import { Todo } from '../todo';

describe('TodoListFooterComponent', () => {
  let component: TodoListFooterComponent;
  let fixture: ComponentFixture<TodoListFooterComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListFooterComponent);
    component = fixture.componentInstance;
    component.todos = [];
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create empty footer', () => {
    expect(component).toBeTruthy();
    expect(element.nativeElement.children.length).toEqual(0);
  });

  it('should have footer information about single todo', () => {
    component.todos = [new Todo()];
    fixture.detectChanges();
    const textElement = element.query(By.css('.todo-count'));
    expect(textElement.nativeElement.textContent).toEqual('1 item left');
  });

  it('should have footer information about multiple todos', () => {
    component.todos = [new Todo(), new Todo()];
    fixture.detectChanges();
    const textElement = element.query(By.css('.todo-count'));
    expect(textElement.nativeElement.textContent).toEqual('2 items left');
  });
});
