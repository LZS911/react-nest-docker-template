import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponse } from '../../../type/ResponseSuccess';

export class UserEntityV1 {
  @ApiProperty({ example: 1, description: 'primary key' })
  id: number;

  @ApiProperty({ example: 'qq@gmail.com', description: 'email' })
  email: string;

  @ApiProperty({ example: 'ly', description: 'user name' })
  name: string;
}

export class GetUserResV1 extends SuccessResponse {
  @ApiProperty({ description: 'response data' })
  data: UserEntityV1;
}

export class GetUsersResV1 extends SuccessResponse {
  @ApiProperty({ description: 'response data', type: [UserEntityV1] })
  data: [UserEntityV1];
}
