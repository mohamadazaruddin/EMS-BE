import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployee } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployee) {}
