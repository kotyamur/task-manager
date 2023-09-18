import {
	Injectable,
	BadRequestException,
	NotFoundException,
} from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Task } from './entities/task.entity'
import { Repository } from 'typeorm'

@Injectable()
export class TasksService {
	constructor(
		@InjectRepository(Task)
		private readonly taskRepository: Repository<Task>,
	) {}

	async create(createTaskDto: CreateTaskDto, id: number) {
		const newTask = {
			name: createTaskDto.name,
			dateStart: createTaskDto.dateStart,
			dateEnd: createTaskDto.dateEnd,
			user_id: { id },
			category_id: { id: +createTaskDto.category_id },
			description: createTaskDto.description || '',
		}

		if (!newTask) {
			throw new BadRequestException('Something went wrong...')
		}
		return await this.taskRepository.save(newTask)
	}

	async findAll(id: number, categoryId: string) {
		const tasks = await this.taskRepository.find({
			where: {
				user_id: { id },
				category_id: { id: +categoryId },
			},
			order: {
				dateCreated: 'DESC',
			},
		})
		return tasks
	}

	async findOne(id: number) {
		const task = await this.taskRepository.findOne({
			where: { id },
		})
		if (!task) {
			throw new NotFoundException('Task not found!')
		}
		return task
	}

	async update(id: number, updateTaskDto: UpdateTaskDto) {
		const task = await this.taskRepository.findOne({
			where: { id },
		})
		if (!task) {
			throw new NotFoundException('Task not found!')
		}
		await this.taskRepository.update(id, updateTaskDto)
		return await this.taskRepository.findOne({
			where: { id },
		})
	}

	async remove(id: number) {
		const task = await this.taskRepository.findOne({
			where: { id },
		})
		if (!task) {
			throw new NotFoundException('Task not found!')
		}

		await this.taskRepository.delete(id)

		return { message: 'Task has been deleted' }
	}
}
