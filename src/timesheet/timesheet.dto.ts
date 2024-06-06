import { CreateEmployee } from 'src/employees/dto/create-employee.dto';

export class TimesheetDto {
  taskName: string;
  estimation: number;
  completed: number;
  employee: CreateEmployee;
}
