import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { CreateUserInput } from '../users/dto/create-user.input';

import { UserDocument } from '../users/schemas/user.schema';
import { UsersService } from '../users/users.service';
import { ICredential } from './types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(credential: ICredential): Promise<UserDocument | any> {
    const user = await this.usersService.findOne({ email: credential.email });
    if (user && user.email === credential.email) {
      const { email, ...result } = user;
      result.id = user._id;

      return result;
    } else throw new UnauthorizedException('Wrong Email');
  }
  async login(payload: any) {
    return this.jwtService.sign(payload);
  }

  async validateEmail(user: CreateUserInput) {
    const findUser = await this.usersService.findOne({ email: user.email });

    if (findUser) {
      throw new HttpException('Email Already Exists!', HttpStatus.BAD_REQUEST);
    }
  }

  async validateToken(id: string) {
    return this.usersService.findById(id);
  }
}
