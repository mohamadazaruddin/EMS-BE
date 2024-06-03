import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectDto } from './projects.dto';
import { ProjectService } from './projects.service';

@Controller('team')
export class ProjectController {
  constructor(private projectService: ProjectService) {}
  @Get()
  getRoles() {
    return this.projectService.getAllRoles();
  }

  @Post()
  addRole(@Body() role: ProjectDto) {
    return this.projectService.addNewRole(role);
  }
}
