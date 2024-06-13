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
    const team = await this.teamService.getTeam(teamId);
    const role = await this.roleServce.getRole(roleId);
    if (team.length) {
      const data = empList?.filter((emp) => emp.team.id === Number(teamId));
      let getParentNode = data.filter((emp) => emp.isTeamLead == true);
      let transformedData = [];
      data.forEach((user) => {
        transformedData.push({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          image: user.profileImage,
          role: user.role.roleName,
          parentId: user.isTeamLead ? '' : getParentNode[0].id,
        });
      });
      return transformedData;
    }
    if (role.length) {
      const data = empList?.filter((emp) => emp.role.id === Number(roleId));
      let getParentNode = data.filter((emp) => emp.isChapterLead == true);
      let transformedData = [];
      data.forEach((user) => {
        transformedData.push({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          role: user.role.roleName,
          image: user.profileImage,
          parentId: user.isChapterLead ? '' : getParentNode[0].id,
        });
      });

      return transformedData;
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
    return this.employeeRepository.findBy({ id: id });
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
