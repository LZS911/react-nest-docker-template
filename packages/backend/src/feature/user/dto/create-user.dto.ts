import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDtoV1 {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'qq@gmail.com',
    description: 'email',
  })
  readonly email: string;

  @IsString()
  @ApiProperty({
    example: 'ly',
    description: 'user name',
    required: false,
  })
  readonly name?: string | null;

  @IsString()
  @ApiProperty({
    example: '******',
    description: 'user password',
  })
  readonly password: string;
}
