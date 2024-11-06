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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  getAllTasks(@Query('limit') limit?: string) {
    return this.taskService.getTasks(limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by id' })
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task' })
  updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(parseInt(id), task);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update the status of one task' })
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }
}
