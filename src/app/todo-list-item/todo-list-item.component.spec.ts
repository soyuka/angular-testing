/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoListItemComponent } from './todo-list-item.component';
import { Todo } from '../todo';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    component.todo = new Todo({ id: 1, title: 'Test', complete: false });
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have a todo with actions', () => {
    spyOn(component, 'removeTodo');
    spyOn(component, 'toggleTodoComplete');
    const labelElementDe = element.query(By.css('label'));
    expect(labelElementDe.nativeElement.textContent).toEqual('Test');
    const inputElementDe = element.query(By.css('input[type="checkbox"].toggle'));
    expect(inputElementDe.nativeElement.checked).toBe(false);
    inputElementDe.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.toggleTodoComplete).toHaveBeenCalled();
    const buttonElementDe = element.query(By.css('button.destroy'));
    buttonElementDe.nativeElement.dispatchEvent(new Event('click'));
    expect(component.removeTodo).toHaveBeenCalled();
  });

  it('should have a completed todo', () => {
    component.todo = new Todo({ id: 1, title: 'Test', complete: true });
    fixture.detectChanges();
    const inputElementDe = element.query(By.css('input[type="checkbox"].toggle'));
    expect(inputElementDe.nativeElement.checked).toBe(true);
  });
});
