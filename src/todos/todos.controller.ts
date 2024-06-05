import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from '../schemes/todo.scheme';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from './dto/update-todo.dto';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  @ApiOperation({ summary: 'Get all todos' })
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one todo' })
  async findOne(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a todo' })
  @ApiCreatedResponse({ description: 'The todo has been successfully created.', type: Todo })
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a todo' })
  @ApiCreatedResponse({ description: 'The todo has been successfully updated.', type: Todo })
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto ): Promise<Todo> {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a todo' })
  @ApiCreatedResponse({ description: 'The todo has been successfully deleted.', type: Todo })
  async remove(@Param('id') id: string): Promise<void> {
    return this.todosService.remove(id);
  }
}
