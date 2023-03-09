import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserDtoV1 {
  @IsString()
  @ApiProperty({ example: 'qq@gmail.com', description: 'email' })
  readonly email?: string;

  @IsString()
  @ApiProperty({ example: 'ly', description: 'user name', required: false })
  readonly name?: string | null;

  @IsString()
  @ApiProperty({ example: '******', description: 'user password' })
  readonly password: string;
}
