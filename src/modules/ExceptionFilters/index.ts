import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./HttpException.filter";
import { UnknownFilter } from "./Unknown.filter";
import { ErrorFilter } from "./Error.filter";
import { BaseErrorFilter } from "./BaseError.filter";

@Module({
	providers: [
		UnknownFilter,
		ErrorFilter,
		HttpExceptionFilter,
		BaseErrorFilter,
	].map(useClass => ({
		provide: APP_FILTER,
		useClass,
	})),
})
export class ExceptionFiltersModule {}

export * from './Base.error';
