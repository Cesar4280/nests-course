import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks() {
    // buscar en una bd
    // petición a otro backend o api
    return [
      {
        id: 1,
        name: 'Brush Teeth',
        completed: true,
      },
      {
        id: 2,
        name: 'Clean The Dishes',
        completed: true,
      },
      {
        id: 3,
        name: 'Take Out The Garbage',
        completed: true,
      },
    ];
  }
}
