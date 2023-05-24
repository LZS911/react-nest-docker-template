import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  code: number;
  message: string;
  data?: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(_: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        return data.data
          ? {
              code: 0,
              message: data?.message ?? 'ok',
              data: data.data,
            }
          : {
              code: 0,
              message: data?.message ?? 'ok',
              data: {
                payload: data,
              },
            };
      })
    );
  }
}
