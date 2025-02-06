import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./HttpException.filter";
import { UnknownFilter } from "./Unknown.filter";
import { ErrorFilter } from "./Error.filter";

@Module({
	providers: [
		UnknownFilter,
		ErrorFilter,
		HttpExceptionFilter,
	].map(useClass => ({
		provide: APP_FILTER,
		useClass,
	})),
})
export class ExceptionFiltersModule {}
