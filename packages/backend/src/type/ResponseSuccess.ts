import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponse {
  @ApiProperty({ example: 0, description: 'status code' })
  readonly statusCode: number;

  @ApiProperty({ example: 'ok', description: 'response message' })
  readonly message: string;
}
