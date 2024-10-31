import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TaskController {
  @Get('/tasks')
  getAllTasks() {
    // buscar en una bd
    // petición a otro backend o api

    return 'Obteniendo todas las tareas';
  }
}
