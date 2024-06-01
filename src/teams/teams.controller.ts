import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamService } from './teams.service';
import { TeamDto } from './teams.dto';

@Controller('team')
export class TeamController {
  constructor(private rolesService: TeamService) {}
  @Get()
  getRoles() {
    return this.rolesService.getAllRoles();
  }

  @Post()
  addRole(@Body() role: TeamDto) {
    return this.rolesService.addNewRole(role);
  }
}
