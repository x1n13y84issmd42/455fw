
import { Catch } from '@nestjs/common';
import { BaseFilter, ErrorDTO } from './Base.filter';

@Catch(Error)
export class ErrorFilter extends BaseFilter<Error> {
  format(exception: Error): ErrorDTO {
    return {
      status: 500,
      error: `UnknownError (${exception.name})`,
      message: exception.message,
    };
  }
}
