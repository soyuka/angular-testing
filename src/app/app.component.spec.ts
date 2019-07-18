import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoDataService } from './todo-data.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';
import { Todo } from './todo';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        TodoListComponent,
        TodoListFooterComponent,
        TodoListHeaderComponent,
        TodoListItemComponent
      ],
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      return fixture.whenStable();
    });
  }));

  it('should instantiate the app', () => {
    expect(app.todos.length).toEqual(1);
    expect(app.todos[0].title).toEqual('Read article');
  });

  it('should add a todo', async(() => {
    app.onAddTodo(new Todo({title: 'Hello', complete: false}));
    fixture.detectChanges();
    return fixture.whenStable()
    .then(() => {
      expect(app.todos.length).toEqual(2);
      expect(app.todos[1].title).toEqual('Hello');
    });
  }));

  it('should toggle complete', async(() => {
    // warning, mutability
    app.onToggleTodoComplete(app.todos[0]);
    fixture.detectChanges();
    return fixture.whenStable()
    .then(() => {
      expect(app.todos[0].complete).toBe(true);
    });
  }));

  it('should remove todo', async(() => {
    app.onRemoveTodo(app.todos[0]);
    fixture.detectChanges();
    return fixture.whenStable()
    .then(() => {
      expect(app.todos.length).toEqual(0);
    });
  }));
});
