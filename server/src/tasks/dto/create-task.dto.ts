import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator'
import { Category } from 'src/categories/entities/category.entity'
import { User } from 'src/users/entities/user.entity'

export class CreateTaskDto {
	@IsNotEmpty()
	@IsString()
	name: string

	@IsNotEmpty()
	@IsDateString()
	dateStart: string

	@IsNotEmpty()
	@IsDateString()
	dateEnd: string

	@IsNotEmpty()
	category_id: Category

	@IsOptional()
	user_id: User

	@IsOptional()
	@IsString()
	description: string
}
