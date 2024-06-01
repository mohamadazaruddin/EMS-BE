import { Injectable } from '@nestjs/common';
import { Employee } from './entity/employees.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployee } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}
  getAllEmployees() {
    return this.employeeRepository.find({
      relations: { role: true, project: true, team: true },
    });
  }

  async createEmployee(emp: CreateEmployee) {
    console.log(emp, 'rpp');
    const employee = this.employeeRepository.create(emp);
    return await this.employeeRepository.save(employee);
  }
  // createTask({ fullName, team, position, empId }: Employee) {
  //   const id = Number(new Date());
  //   const employee: Employee = {
  //     id,
  //     fullName,
  //     team,
  //     position,
  //     empId,
  //   };
  //   this.employees.push(employee);
  //   return employee;
  // }
  getEmployeeById(id: number): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
}
