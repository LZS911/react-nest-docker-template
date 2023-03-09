import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnprocessableEntityException,
} from '@nestjs/common';

@Catch(UnprocessableEntityException)
export class ValidationExceptionFilter
  implements ExceptionFilter<UnprocessableEntityException>
{
  public catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(exception.status).json({
      statusCode: exception.status,
      error: `Unprocessable Entity`,
      message:
        exception?.getResponse()?.message?.join() ?? 'Unprocessable Entity',
    });
  }
}
