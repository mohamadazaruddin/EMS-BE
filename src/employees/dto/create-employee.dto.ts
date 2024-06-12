import { ProjectDto } from 'src/org-projects/projects.dto';
import { RoleDto } from 'src/roles/roles.dto';
import { TeamDto } from 'src/teams/teams.dto';

export class CreateEmployee {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  profileImage: string;
  contact_no: string;
  role: RoleDto;
  team: TeamDto;
  parentId: number;
  project: ProjectDto;
  isTeamLead: boolean;
  isChapterLead: boolean;
}
export class GetDataDto {
  role: number;
  team: number;
}
