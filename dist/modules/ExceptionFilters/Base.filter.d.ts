import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export interface ErrorDTO {
    status: number;
    error: string;
    message?: string;
    data?: any;
}
export declare abstract class BaseFilter<TE = unknown> implements ExceptionFilter {
    abstract format(exception: TE): ErrorDTO;
    catch(exception: TE, host: ArgumentsHost): void;
}
