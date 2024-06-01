import { Project } from 'src/org-projects/projects.entity';
import { Role } from 'src/roles/roles.entity';
import { Team } from 'src/teams/teams.entity';
import { Timesheet } from 'src/timesheet/timesheet.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  uuid: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  firstname: string;

  @Column('varchar')
  lastname: string;

  @Column('varchar')
  profileImage: string;

  @Column('varchar')
  contact_no: string;

  @OneToOne(() => Role, (role) => role.id)
  @JoinColumn()
  role: Role;

  @OneToOne(() => Team, (team) => team.id)
  @JoinColumn()
  team: Team;

  @Column()
  parentId: number;

  @OneToOne(() => Project, (project) => project.id)
  @JoinColumn()
  project: Project;

  @OneToMany(() => Timesheet, (timesheet) => timesheet.employee)
  timesheet: Timesheet;
}
