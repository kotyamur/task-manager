import { IsNotEmpty, IsOptional } from 'class-validator'
import { User } from 'src/users/entities/user.entity';
export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  user: User
}
