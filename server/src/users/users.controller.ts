import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  // Param,
} from '@nestjs/common'
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id)
  // }

  // @Get()
  // findOne(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.findOne(createUserDto.email)
  // }
}
