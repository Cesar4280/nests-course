import { Injectable } from '@nestjs/common';

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

  getTasks(): Array<Task> {
    // buscar en una bd
    // petición a otro backend o api
    return this.tasks;
  }

  createTask(task: Task) {
    console.log(task);
    this.tasks.push(task);
    return task;
  }

  updateTask() {
    return 'Actualizando tarea';
  }

  deleteTask() {
    return 'Eliminando tarea';
  }

  updateTaskStatus() {
    return 'Actualizando el estado de la tarea';
  }
}
