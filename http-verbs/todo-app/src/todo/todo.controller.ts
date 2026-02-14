import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import type { Response } from 'express';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAllTodos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOneTodo(Number(id));
  }

  @Post()
  create(@Body() body: { id: number; title: string }) {
    return this.todoService.createTodo(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { id: number; title: string }) {
    return this.todoService.updateTodo(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() response: Response) {
    const result = this.todoService.deleteTodo(Number(id));

    if (result) {
      return response.json({
        message: 'Todo deleted successfully',
      });
    }

    return response.status(HttpStatus.BAD_REQUEST).json({
      message: 'bad request',
    });
  }
}
