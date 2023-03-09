import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from '../../utils/cryptogram';
import { LoginDtoV1 } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findAllInfo({ email });
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    const passwordValid = await encryptPassword(password, user.password_salt);

    if (passwordValid !== user.password) {
      throw new NotAcceptableException('wrong user password');
    }

    return user;
  }

  async login(user: LoginDtoV1) {
    const payload = await this.userService.findOne({ email: user.email });
    return {
      data: {
        access_token: this.jwtService.sign(payload),
      },
    };
  }
}
