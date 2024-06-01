import { Employee } from 'src/employees/entity/employees.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'role' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  uuid: string;

  @Column()
  roleName: string;

  @OneToOne(() => Employee, (employee) => employee.role)
  employess: Employee;
}
