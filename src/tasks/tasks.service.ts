import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  id: number;
  title: string;
  status: boolean;
}

@Injectable()
export class TaskService {
  private tasks: Array<Task> = [
    {
      id: 1,
      title: 'Brush Teeth',
      status: true,
    },
    {
      id: 2,
      title: 'Clean The Dishes',
      status: true,
    },
    {
      id: 3,
      title: 'Take Out The Garbage',
      status: true,
    },
  ];

  getTasks(limit?: string): Array<Task> {
    // buscar en una bd
    // petición a otro backend o api
    return limit ? this.tasks.slice(0, parseInt(limit)) : this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    return taskFound ?? new NotFoundException(`Task with id ${id} not found`);
  }

  createTask(task: CreateTaskDto) {
    const id = this.tasks.length + 1;
    const newTask = { ...task, id };
    this.tasks.push(newTask);
    return this.tasks.at(-1);
  }

  updateTask(id: number, task: UpdateTaskDto) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound)
      return new NotFoundException(
        `Task with id ${id} not found`,
      ).getResponse();
    if ('title' in task) taskFound.title = task.title;
    if ('status' in task) taskFound.status = task.status;
    return taskFound;
  }

  deleteTask() {
    return 'Eliminando tarea';
  }

  updateTaskStatus() {
    return 'Actualizando el estado de la tarea';
  }
}
