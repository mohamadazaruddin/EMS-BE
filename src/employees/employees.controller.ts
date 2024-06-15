import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployee, GetDataDto } from './dto/create-employee.dto';
import { Employee } from './entity/employees.entity';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';
import { ApiBody } from '@nestjs/swagger';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
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

  @Put(`/:id`)
  updateEmp(@Param('id') id: number, @Body() body: UpdateEmployeeDto) {
    return this.employeesService.updateEmpDetails(id, body);
  }

  @Post()
  @ApiBody({ type: CreateEmployee })
  createEmployee(@Body() body: CreateEmployee): Promise<Employee> {
    return this.employeesService.createEmployee(body);
  }
}
