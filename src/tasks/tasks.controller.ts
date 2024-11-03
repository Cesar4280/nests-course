import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { Task, TaskService } from './tasks.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() task: Task) {
    return this.taskService.createTask(task);
  }

  @Put()
  updateTask() {
    return this.taskService.updateTask();
  }

  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }
}
