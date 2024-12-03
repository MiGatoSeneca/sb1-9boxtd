import { Request, Response } from 'express';
import { TodoService } from '../services/todoService';

export class TodoController {
  private todoService = new TodoService();

  getAllTodos = async (req: Request, res: Response) => {
    const todos = await this.todoService.getAllTodos();
    res.json(todos);
  };

  createTodo = async (req: Request, res: Response) => {
    const todo = await this.todoService.createTodo(req.body);
    res.status(201).json(todo);
  };

  updateTodo = async (req: Request, res: Response) => {
    const todo = await this.todoService.updateTodo(parseInt(req.params.id), req.body);
    res.json(todo);
  };

  deleteTodo = async (req: Request, res: Response) => {
    await this.todoService.deleteTodo(parseInt(req.params.id));
    res.status(204).send();
  };
}