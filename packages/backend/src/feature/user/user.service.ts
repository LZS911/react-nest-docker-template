import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { LoggerService } from '../../config/logger/logger.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private logger: LoggerService) {
    this.logger.setContext('UserService');
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    this.logger.timeLog(`create user params: ${JSON.stringify(data)}`);
    return this.prisma.user.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Omit<User, 'password' | 'password_salt'>[]> {
    this.logger.timeLog(`find users params: ${JSON.stringify(params)}`);
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select: {
        name: true,
        id: true,
        email: true,
      },
    });
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<Omit<User, 'password' | 'password_salt'> | null> {
    this.logger.timeLog(
      `find user params: ${JSON.stringify(userWhereUniqueInput)}`
    );
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      select: {
        name: true,
        id: true,
        email: true,
      },
    });
  }

  async findAllInfo(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<User | null> {
    this.logger.timeLog(
      `find user params: ${JSON.stringify(userWhereUniqueInput)}`
    );
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    this.logger.timeLog(`update user params: ${JSON.stringify(params)}}`);
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    this.logger.timeLog(`delete user params: ${JSON.stringify(where)}`);
    return this.prisma.user.delete({
      where,
    });
  }
}
