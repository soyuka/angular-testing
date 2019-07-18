export class Todo {
  id: number;
  title = '';
  complete = false;

  constructor(values: Partial<Todo> = {}) {
    Object.assign(this, values);
  }
}
