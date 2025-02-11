import { BaseFilter, ErrorDTO } from './Base.filter';
export declare class UnknownFilter extends BaseFilter {
    format(exception: unknown): ErrorDTO;
}
