import { Employee } from 'src/employees/entity/employees.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'teams' })
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  uuid: string;

  @Column()
  teamName: string;

  @OneToMany(() => Employee, (employee) => employee.role)
  employess: Employee;
}
