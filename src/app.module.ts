import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { dbConfig } from '../db/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';

import { join } from 'path';
import { RoleModule } from './roles/roles.module';
import { TeamModule } from './teams/teams.module';
import { ProjectModule } from './org-projects/projects.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dbConfig),
    EmployeesModule,
    TodoModule,
    RoleModule,
    TimesheetModule,
    TeamModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
