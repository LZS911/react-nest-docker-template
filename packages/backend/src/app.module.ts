import { Module } from '@nestjs/common';
import { FeatureModule } from './feature/feature.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoggerService } from './config/logger/logger.service';
import { LoggerModule } from './config/logger/logger.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleAuthGuard } from './core/guard/auth.guard';

@Module({
  imports: [FeatureModule, PrismaModule, LoggerModule],
  providers: [
    LoggerService,
    {
      provide: APP_GUARD,
      useClass: RoleAuthGuard,
    },
  ],
})
export class AppModule {}
