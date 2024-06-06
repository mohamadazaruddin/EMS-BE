import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entity/employees.entity';
import { TeamService } from 'src/teams/teams.service';
import { ProjectService } from 'src/org-projects/projects.service';
import { RolesService } from 'src/roles/roles.service';
import { Team } from 'src/teams/teams.entity';
import { Project } from 'src/org-projects/projects.entity';
import { Role } from 'src/roles/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Team, Project, Role])],
  controllers: [EmployeesController],
  providers: [EmployeesService, TeamService, ProjectService, RolesService],
})
export class EmployeesModule {}
