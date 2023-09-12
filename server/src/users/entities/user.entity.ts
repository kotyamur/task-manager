import { Category } from 'src/categories/entities/category.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  // OneToOne,
} from 'typeorm'

export enum UserRole {
  EDITOR = 'editor',
  GUEST = 'guest',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  email: string

  @Column({ type: 'varchar' })
  password: string

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GUEST,
  })
  role: UserRole

  // @OneToOne(() => Category, (category) => category.owner)
  // category: Category

  @OneToMany(() => Category, (category) => category.user, {
    onDelete: 'CASCADE',
  })
  categories: Category[]

  @OneToMany(() => Task, (task) => task.user_id, {
    onDelete: 'CASCADE',
  })
  tasks: Task[]
}
