import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Response } from 'express';

export interface ErrorDTO {
    status: number;
    error: string;
    message?: string;
    data?: any;
}

export abstract class BaseFilter<TE=unknown> implements ExceptionFilter {
    abstract format(exception: TE): ErrorDTO;

    catch(exception: TE, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const {status, ...errDTO} = this.format(exception);

        response
            .status(status)
            .json(errDTO)
        ;
    }
}
