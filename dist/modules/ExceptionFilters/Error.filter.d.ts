import { BaseFilter, ErrorDTO } from './Base.filter';
export declare class ErrorFilter extends BaseFilter<Error> {
    format(exception: Error): ErrorDTO;
}
