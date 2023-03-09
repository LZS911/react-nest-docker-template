import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponse } from '../../../type/ResponseSuccess';

export class JwtToken {
  @ApiProperty({ description: 'jwt token' })
  access_token: string;
}

export class UserLoginResV1 extends SuccessResponse {
  @ApiProperty({ description: 'response data' })
  data: JwtToken;
}
