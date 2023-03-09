import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { LoggerModule } from '../../config/logger/logger.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, LoggerModule],
  exports: [UserService],
})
export class UserModule {}
