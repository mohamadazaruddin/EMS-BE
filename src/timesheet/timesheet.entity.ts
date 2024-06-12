import { Employee } from 'src/employees/entity/employees.entity';
import { Project } from 'src/org-projects/projects.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'timesheet' })
export class Timesheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  uuid: string;

  @Column()
  taskName: string;

  @Column()
  estimation: number;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  completed: number;

  @ManyToOne(() => Project, (project) => project.id)
  @JoinColumn()
  project: Project;

  @ManyToOne(() => Employee, (employee) => employee.id)
  @JoinColumn()
  employee: Employee;
}
