import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDtoV1 {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'qq@gmail.com', description: 'email' })
  readonly email: string;

  @IsString()
  @ApiProperty({ example: '******', description: 'user password' })
  readonly password: string;
}
