import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'task' })
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  uuid: string;

  @Column()
  title: string;

  @Column()
  empID: number;
}
