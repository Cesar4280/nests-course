import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { TaskService } from './tasks.service';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTasks(@Query('limit') limit?: string) {
    return this.taskService.getTasks(limit);
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(parseInt(id), task);
  }

  @Delete(':id')
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch(':id')
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }
}
