import { RoleDto } from 'src/roles/roles.dto';

export class CreateEmployee {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  profileImage: string;
  contact_no: string;
  role: RoleDto;
  // team: string;
  parentId: number;
  // project: string;
}
