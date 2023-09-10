import { Category } from 'src/categories/entities/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'date' })
  dateStart: string;

  @Column({ type: 'date' })
  dateEnd: string;

  @OneToOne(() => Category, (category) => category.id)
  @JoinColumn()
  taskId: number;
}
