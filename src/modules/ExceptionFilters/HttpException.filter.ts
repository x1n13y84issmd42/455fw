
import { Catch, HttpException } from '@nestjs/common';
import { BaseFilter, ErrorDTO } from './Base.filter';

@Catch(HttpException)
export class HttpExceptionFilter extends BaseFilter<HttpException> {
  format(exception: HttpException): ErrorDTO {
    return {
      status: exception.getStatus(),
      error: exception.message,
    };
  }
}
