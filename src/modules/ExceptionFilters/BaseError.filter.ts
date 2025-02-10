
import { Catch } from '@nestjs/common';
import { BaseFilter, ErrorDTO } from './Base.filter';
import { BaseError } from '../../errors/Base.error';

@Catch(BaseError)
export class BaseErrorFilter extends BaseFilter<BaseError> {
  format(err: BaseError): ErrorDTO {
    return {
      status: err.statusCode || 500,
      error: err.constructor.name,
      message: err.message,
      data: err.data,
    };
  }
}
