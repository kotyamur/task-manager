import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    })
    if (existUser) {
      throw new BadRequestException('This email already exist!')
    }
    const user = await this.usersRepository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
    })
    return { user }
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email,
      }
    })
  }
}
