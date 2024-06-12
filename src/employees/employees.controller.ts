import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployee, GetDataDto } from './dto/create-employee.dto';
import { Employee } from './entity/employees.entity';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';
import { ApiBody } from '@nestjs/swagger';
// @UseGuards(JwtGuard)
@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}
  @Get()
  getEmployees(@Query() getData: GetDataDto) {
    const { role, team } = getData;
    return this.employeesService.getAllEmployees(team, role);
  }

  @Get('dashboard')
  getDashboard() {
    return this.employeesService.dashboardData();
  }

  @Get('user')
  getLoggedinUser(@Req() req) {
    return this.employeesService.getEmployeeById(req.user.id);
  }

  @Get(`/:id`)
  getEmployeeById(@Param('id') id: number) {
    return this.employeesService.getEmployeeById(id);
  }

  @Post()
  @ApiBody({ type: CreateEmployee })
  createEmployee(@Body() body: CreateEmployee): Promise<Employee> {
    return this.employeesService.createEmployee(body);
  }
}
