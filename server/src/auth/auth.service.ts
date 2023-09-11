import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) { }
  
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw new UnauthorizedException('User or password are incorrect!')
    }
    const isPasswordMatched = await argon2.verify(user.password, password);
    if (user && isPasswordMatched) {
      return user
    }
    throw new UnauthorizedException('User or password are incorrect!')
  }
}
