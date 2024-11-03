import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get('/')
  getAllProjects() {
    return 'Todos los proyectos';
  }

  @Post('/')
  createProject() {
    return 'Creando proyecto';
  }

  @Put('/')
  updateProject() {
    return 'Actualizando proyecto';
  }

  @Delete('/')
  deleteProject() {
    return 'Eliminando proyecto';
  }

  @Patch('/')
  updateProjectStatus() {
    return 'Actualizando estado del proyecto';
  }
}
