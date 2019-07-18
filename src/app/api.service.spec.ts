// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Todo } from './todo';

import { environment } from '../environments/environment';
import { ApiService } from './api.service';

const API_URL = environment.apiUrl;

describe('Api service testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    apiService = TestBed.get(ApiService);
  });

  it('can test ApiService.getAllTodos', () => {
    const testData: Todo[] = [new Todo({id: 1, title: 'test', complete: false})];

    apiService.getAllTodos().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(API_URL + '/todos');

    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('can test ApiService.createTodo', () => {
    const testData: Todo = new Todo({id: 1, title: 'test', complete: false});

    apiService.createTodo(testData).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(API_URL + '/todos');

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(testData);

    req.flush(testData);
  });

  it('can test ApiService.getTodoById', () => {
    const testData: Todo = new Todo({id: 1, title: 'test', complete: false});

    apiService.getTodoById(testData.id).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(API_URL + '/todos/' + testData.id);

    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('can test ApiService.updateTodo', () => {
    const testData: Todo = new Todo({id: 1, title: 'test', complete: false});

    apiService.updateTodo(testData).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(API_URL + '/todos/' + testData.id);

    expect(req.request.method).toEqual('PUT');

    req.flush(testData);
  });

  it('can test ApiService.deleteTodoById', () => {
    const testData: Todo = new Todo({id: 1, title: 'test', complete: false});

    apiService.deleteTodoById(testData.id).subscribe((data) => {
      expect(data).toEqual(null);
    });

    const req = httpTestingController.expectOne(API_URL + '/todos/' + testData.id);

    expect(req.request.method).toEqual('DELETE');

    req.flush(testData);
  });

  afterEach(() => {
     httpTestingController.verify();
  });
});
