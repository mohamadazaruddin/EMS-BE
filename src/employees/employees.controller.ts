import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployee } from './dto/create-employee.dto';
import { Employee } from './entity/employees.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}
  @Get()
  getEmployees() {
    return this.employeesService.getAllEmployees();
  }
  @Get(`/:id`)
  getEmployeeById(@Param('id') id: number) {
    return this.employeesService.getEmployeeById(id);
  }

  @Post()
  createEmployee(@Body() body: CreateEmployee): Promise<Employee> {
    return this.employeesService.createEmployee(body);
  }
}
