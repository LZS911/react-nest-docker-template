import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { LoggerModule } from '../config/logger/logger.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, LoggerModule],
})
export class FeatureModule {}
