import { IsEmail, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
  @IsEmail()
  email: string

  @MinLength(6, {
    message: 'Password is too short',
  })
  @MaxLength(10, {
    message: 'Password is too long',
  })
  password: string
}
