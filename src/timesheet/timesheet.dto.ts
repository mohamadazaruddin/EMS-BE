import { CreateEmployee } from 'src/employees/dto/create-employee.dto';
import { ProjectDto } from 'src/org-projects/projects.dto';

export class TimesheetDto {
  taskName: string;
  estimation: number;
  completed: number;
  project: ProjectDto;
  date: Date;
  employee: CreateEmployee;
}
