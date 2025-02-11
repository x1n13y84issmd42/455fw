import { HttpException } from '@nestjs/common';
import { BaseFilter, ErrorDTO } from './Base.filter';
export declare class HttpExceptionFilter extends BaseFilter<HttpException> {
    format(exception: HttpException): ErrorDTO;
}
