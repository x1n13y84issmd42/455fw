import { BaseError } from "./Base.error";
import { ValidationError as NestValidationError } from "@nestjs/common";

export class ValidationError extends BaseError {
	public statusCode: number = 400;

	constructor(errs: NestValidationError[]) {
		super(`There were errors in the submitted data.`, errs.map(e => ({
			property: e.property,
			errors: Object.values(e.constraints),
		})));
	}
}
