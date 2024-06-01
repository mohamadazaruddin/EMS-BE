import { Employee } from 'src/employees/entity/employees.entity';
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

  @Column()
  completed: number;

  @ManyToOne(() => Employee, (employee) => employee.id)
  @JoinColumn()
  employee: Employee;
}

//   user_uuid  varchar
