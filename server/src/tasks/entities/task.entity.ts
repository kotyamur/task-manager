import { Category } from 'src/categories/entities/category.entity'
import { User } from 'src/users/entities/user.entity'
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	// OneToOne,
	JoinColumn,
	ManyToOne,
} from 'typeorm'

@Entity()
export class Task {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar' })
	name: string

	@Column({ type: 'date' })
	dateStart: Date

	@Column({ type: 'date' })
	dateEnd: Date

	// @OneToOne(() => Category, (category) => category.id, { onDelete: 'CASCADE' })
	// @JoinColumn({ name: 'taskId' })
	// // taskId: number
	// category: Category

	@ManyToOne(() => User, (user) => user.tasks, {
		onDelete: 'CASCADE',
		eager: false,
	})
	@JoinColumn({ name: 'userId' })
	user_id: User

	@ManyToOne(() => Category, (category) => category.tasks, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'taskId' })
	category_id: Category
}
