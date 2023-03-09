import { Body, Controller, Post, Version } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDtoV1 } from './dto/login.dto';
import { NoAuth } from '../../core/decorator/customize';
import { UserLoginResV1 } from './entity/auth.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Version('1')
  @NoAuth()
  @ApiOperation({ summary: 'login' })
  @ApiResponse({
    status: 200,
    type: UserLoginResV1,
  })
  async login(@Body() loginDto: LoginDtoV1) {
    return this.authService.login(loginDto);
  }
}
