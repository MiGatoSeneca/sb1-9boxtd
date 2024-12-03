import { Todo } from '../types';

export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Learn TypeScript', completed: true },
    { id: 2, title: 'Build a REST API', completed: false },
    { id: 3, title: 'Write tests', completed: false },
  ];

  async getAllTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async createTodo(data: Omit<Todo, 'id'>): Promise<Todo> {
    const newTodo = {
      id: this.todos.length + 1,
      ...data,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  async updateTodo(id: number, data: Partial<Todo>): Promise<Todo> {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) throw new Error('Todo not found');
    
    this.todos[index] = { ...this.todos[index], ...data };
    return this.todos[index];
  }

  async deleteTodo(id: number): Promise<void> {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) throw new Error('Todo not found');
    
    this.todos.splice(index, 1);
  }
}