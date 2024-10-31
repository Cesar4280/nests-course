import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get('/')
  getAllProjects() {
    return 'Todos los proyectos';
  }
}
