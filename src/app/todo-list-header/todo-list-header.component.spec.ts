/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoListHeaderComponent } from './todo-list-header.component';
import { FormsModule } from '@angular/forms';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ TodoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should add a todo ', async(() => {
    spyOn(component, 'addTodo');
    component.newTodo.title = 'Test';
    fixture.detectChanges();
    const inputElementDe = element.query(By.css('input.new-todo'));

    return fixture.whenStable().then(() => {
      expect(inputElementDe.nativeElement.value).toEqual('Test');
      inputElementDe.nativeElement.dispatchEvent(new KeyboardEvent('keyup', {key: 'Enter'}));
      fixture.detectChanges();
      expect(component.addTodo).toHaveBeenCalled();
    });
  }));
});
