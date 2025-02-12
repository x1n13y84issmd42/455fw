import { BaseFilter, ErrorDTO } from './Base.filter';
import { BaseError } from '../../errors/Base.error';
export declare class BaseErrorFilter extends BaseFilter<BaseError> {
    format(err: BaseError): ErrorDTO;
}
