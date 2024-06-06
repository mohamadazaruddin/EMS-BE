import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProjectDto } from './projects.dto';
import { ProjectService } from './projects.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';
@UseGuards(JwtGuard)
@Controller('project')
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
