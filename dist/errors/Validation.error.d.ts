import { BaseError } from "./Base.error";
import { ValidationError as NestValidationError } from "@nestjs/common";
export declare class ValidationError extends BaseError {
    statusCode: number;
    constructor(errs: NestValidationError[]);
}
