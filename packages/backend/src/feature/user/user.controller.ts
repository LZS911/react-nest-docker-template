import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDtoV1 } from './dto/create-user.dto';
import { UpdateUserDtoV1 } from './dto/update-user.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserResV1, GetUsersResV1 } from './entity/user.entity';
import { encryptPassword, makeSalt } from '../../utils/cryptogram';
import { successResponse } from '../../config/response';
import { SuccessResponse } from '../../type/ResponseSuccess';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Version('1')
  @ApiOperation({ summary: 'create user', operationId: 'createUserV1' })
  @ApiResponse({
    status: 200,
    type: SuccessResponse,
  })
  async create(@Body() CreateUserDtoV1: CreateUserDtoV1) {
    const passwordSalt = makeSalt();
    const hashPassword = encryptPassword(
      CreateUserDtoV1.password,
      passwordSalt
    );
    await this.userService.create({
      ...CreateUserDtoV1,
      password: hashPassword,
      password_salt: passwordSalt,
    });

    return successResponse();
  }

  @Get()
  @Version('1')
  @ApiOperation({ summary: 'get all users', operationId: 'getUsersV1' })
  @ApiResponse({
    status: 200,
    type: GetUsersResV1,
  })
  findAll() {
    return this.userService.findAll({});
  }

  @Get(':id')
  @Version('1')
  @ApiOperation({ summary: 'get user', operationId: 'getUserProfileV1' })
  @ApiResponse({
    status: 200,
    type: GetUserResV1,
  })
  @ApiParam({
    name: 'id',
    type: 'number',
  })
  findOne(
    @Param('id', new ParseIntPipe()) id: string,
    @Body() body?: { email: string }
  ) {
    return this.userService.findOne({ id: +id, email: body.email });
  }

  @Patch(':id')
  @Version('1')
  @ApiOperation({ summary: 'update user', operationId: 'updateUserV1' })
  @ApiResponse({
    status: 200,
    type: SuccessResponse,
  })
  @ApiParam({
    name: 'id',
    type: 'number',
  })
  async update(
    @Param('id', new ParseIntPipe()) id: string,
    @Body() UpdateUserDtoV1: UpdateUserDtoV1
  ) {
    await this.userService.update({
      where: { id: +id },
      data: UpdateUserDtoV1,
    });
    return successResponse();
  }

  @Delete(':id')
  @Version('1')
  @ApiOperation({ summary: 'delete user', operationId: 'deleteUserV1' })
  @ApiResponse({
    status: 200,
    type: SuccessResponse,
  })
  @ApiParam({
    name: 'id',
    type: 'number',
  })
  async remove(@Param('id', new ParseIntPipe()) id: string) {
    await this.userService.remove({ id: +id });
    return successResponse();
  }
}
