import { IsString, IsDate, IsNotEmpty } from 'class-validator'

export class CreateTaskDto {
	@IsNotEmpty()
	@IsString()
	name: string

	@IsDate()
	dateStart: Date

	@IsDate()
	dateEnd: Date
}
