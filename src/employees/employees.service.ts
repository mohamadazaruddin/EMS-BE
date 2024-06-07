import { Injectable } from '@nestjs/common';
import { Employee } from './entity/employees.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployee } from './dto/create-employee.dto';
import { TeamService } from 'src/teams/teams.service';
import { RolesService } from 'src/roles/roles.service';
import { ProjectService } from 'src/org-projects/projects.service';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private teamService: TeamService,
    private roleServce: RolesService,
    private projectService: ProjectService,
  ) {}
  async getAllEmployees(teamId: number, roleId: number) {
    const empList = await this.employeeRepository.find({
      relations: { role: true, project: true, team: true },
    });

    if (teamId) {
      const data = empList?.filter((emp) => emp.team.id === Number(teamId));
      return data;
    }
    if (roleId) {
      const data = empList?.filter((emp) => emp.role.id === Number(roleId));

      return data;
    }
    return empList;
  }

  async createEmployee(emp: CreateEmployee) {
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

  async dashboardData() {
    return {
      totalEmp: (await this.employeeRepository.find()).length,
      totalTeam: (await this.teamService.getAllRoles()).length,
      totalProject: (await this.projectService.getAllRoles()).length,
      totalDepartment: (await this.roleServce.getAllRoles()).length,
    };
  }
}
