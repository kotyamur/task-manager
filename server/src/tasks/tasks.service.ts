import {
	Injectable,
	BadRequestException,
	NotFoundException,
} from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
	constructor(
		@InjectRepository(Task)
		private readonly taskRepository: Repository<Task>,
	) {}

	async create(createTaskDto: CreateTaskDto, id: number) {
		const isExist = await this.taskRepository.findBy({
			user_id: { id },
			name: createTaskDto.name,
		})
		if (isExist.length) {
			throw new BadRequestException('This task already exist!')
		}
		const newTask = {
			name: createTaskDto.name,
			dateStart: createTaskDto.dateStart,
			dateEnd: createTaskDto.dateEnd,
			user_id: {
				id,
			},
		}
		return await this.taskRepository.save(newTask)
	}

	async findAll(category, id: number) {
		return await this.taskRepository.find({
			where: {
				user_id: { id },
				category_id: category,
			},
			// relations: {
			// 	tasks: true,
			// },
		})
	}

	async findOne(id: number) {
		const task = await this.taskRepository.findOne({
			where: { id },
			// relations: {
			// 	user: true,
			// 	tasks: true,
			// },
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
		return await this.taskRepository.update(id, updateTaskDto)
	}

	async remove(id: number) {
		const task = await this.taskRepository.findOne({
			where: { id },
		})
		if (!task) {
			throw new NotFoundException('Task not found!')
    }
    
       return await this.taskRepository.delete(id);
	}
}
