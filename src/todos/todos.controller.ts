import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from '../schemes/todo.scheme';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Post()
  async create(@Body() createTodoDto: Partial<Todo>): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: Partial<Todo>): Promise<Todo> {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.todosService.remove(id);
  }
}
