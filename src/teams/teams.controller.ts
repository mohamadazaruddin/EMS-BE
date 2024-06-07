import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TeamService } from './teams.service';
import { TeamDto } from './teams.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';

// @UseGuards(JwtGuard)
@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  getRoles() {
    return this.teamService.getAllRoles();
  }

  @Post()
  addRole(@Body() role: TeamDto) {
    return this.teamService.addNewRole(role);
  }
}
