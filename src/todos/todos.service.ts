import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from '../schemes/todo.scheme';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find(todo => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  create(todo: Partial<Todo>): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      title: todo.title ?? 'Untitled',
      description: todo.description ?? '',
      done: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, updatedTodo: Partial<Todo>): Todo {
    const todo = this.findOne(id);
    Object.assign(todo, updatedTodo);
    return todo;
  }

  remove(id: number): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    this.todos.splice(index, 1);
  }
}