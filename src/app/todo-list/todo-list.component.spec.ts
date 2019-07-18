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

  it('should have a list of todos', () => {
    const listElementsDe = element.queryAll(By.css('ul.todo-list li'));
    expect(listElementsDe.length).toEqual(3);
  });

  it('should have a complete todo', () => {
    const completeElementDe = element.queryAll(By.css('ul.todo-list li.completed'));
    expect(completeElementDe.length).toEqual(1);
    const toggleCheckboxDe = element.query(By.css('ul.todo-list li.completed input.toggle'));
    expect(toggleCheckboxDe.nativeElement.checked).toBe(true);
  });

  it('should remove a todo', () => {
    spyOn(component, 'onRemoveTodo');
    const destroyButtonDe = element.query(By.css('ul.todo-list li button.destroy'));
    destroyButtonDe.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onRemoveTodo).toHaveBeenCalled();
  });

  it('should complete a todo', () => {
    spyOn(component, 'onToggleTodoComplete');
    const toggleCheckboxDe = element.query(By.css('ul.todo-list li input.toggle'));
    toggleCheckboxDe.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onToggleTodoComplete).toHaveBeenCalled();
  });
});
