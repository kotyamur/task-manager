import { Task } from 'src/tasks/entities/task.entity'
import { User } from 'src/users/entities/user.entity'
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	//   OneToOne,
	JoinColumn,
	CreateDateColumn,
	ManyToOne,
	OneToMany,
} from 'typeorm'

@Entity()
export class Category {
	@PrimaryGeneratedColumn({ type: 'int' })
	id: number

	@Column({ type: 'varchar' })
	name: string

	@CreateDateColumn()
	dateCreated: Date

	//   @OneToOne(() => User, (user) => user.id)
	//   @JoinColumn({ name: 'userId' })
	//   //   userId: number
	//   owner: User

	@ManyToOne(() => User, (user) => user.categories, {
		eager: false,
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'userId' })
	user: User

	@OneToMany(() => Task, (task) => task.category_id, {
		eager: false,
		onDelete: 'CASCADE',
	})
	tasks: Task[]
}
