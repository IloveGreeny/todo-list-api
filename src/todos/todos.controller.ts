import { Controller, Get, Post, Param, Body, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { TodosService } from './todos.service';
import { Todo } from '../schemes/todo.scheme';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Todo {
    console.log(`Fetching todo with id: ${id}`);
    return this.todosService.findOne(id);
  }

  @Post()
  create(@Body() createTodoDto: Partial<Todo>): Todo {
    return this.todosService.create(createTodoDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTodoDto: Partial<Todo>): Todo {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    return this.todosService.remove(id);
  }
}
