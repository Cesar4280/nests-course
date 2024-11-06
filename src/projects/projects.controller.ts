import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('projects')
@ApiTags('projects')
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
