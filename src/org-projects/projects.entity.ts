import { Employee } from 'src/employees/entity/employees.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  uuid: string;

  @Column()
  ProjectName: string;

  @OneToOne(() => Employee, (employee) => employee.project)
  employess: Employee;
}
