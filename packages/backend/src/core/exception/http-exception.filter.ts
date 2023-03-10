import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    const exceptionRes = exception.getResponse();

    const responseJson = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      url: request.url,
    };

    response.status(status).json(
      typeof exceptionRes === 'string'
        ? {
            ...responseJson,
            message: exceptionRes,
          }
        : {
            ...responseJson,
            ...exceptionRes,
          }
    );
  }
}
