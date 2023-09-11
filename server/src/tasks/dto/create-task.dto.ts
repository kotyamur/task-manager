import { IsString, IsDate } from 'class-validator'

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsDate()
  dateStart: Date;

  @IsDate()
  dateEnd: Date;
}
