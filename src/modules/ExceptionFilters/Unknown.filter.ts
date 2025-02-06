
import { Catch } from '@nestjs/common';
import { BaseFilter, ErrorDTO } from './Base.filter';

@Catch()
export class UnknownFilter extends BaseFilter {
  format(exception: unknown): ErrorDTO {
    return {
      status: 500,
      error: 'UnknownError',
      data: exception,
    };
  }
}
