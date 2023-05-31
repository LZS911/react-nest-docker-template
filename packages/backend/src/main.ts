import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './config/logger/logger.service';
import { HttpExceptionsFilter } from './core/exception/http-exception.filter';
import { PrismaClientExceptionFilter } from './core/exception/prisma-client-exception.filter';
import { ValidationExceptionFilter } from './core/exception/validation-exception-filter';
import { TransformInterceptor } from './core/interceptor/transform-interceptor';
import { ValidationPipe422 } from './core/pipe/validation-pipe';
import { generateSwagger } from './docs/generate-swagger';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .useGlobalPipes(new ValidationPipe422())
    .enableVersioning({
      type: VersioningType.URI,
    })
    .useGlobalFilters(new HttpExceptionsFilter())
    .useGlobalFilters(new PrismaClientExceptionFilter())
    .useGlobalFilters(new ValidationExceptionFilter())
    .useGlobalInterceptors(new TransformInterceptor())
    .useLogger(new LoggerService());

  generateSwagger(app);

  await app.listen(3535);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
