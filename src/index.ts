import { NestFactory } from '@nestjs/core';
import { ValidationError as NestValidationError, ValidationPipe } from "@nestjs/common";
import { ValidationError } from './errors';

export async function createHTTPServer(AppModule: any) {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
		transform: true,
		whitelist: true,
		exceptionFactory: (errors: NestValidationError[]) => new ValidationError(errors),
	}));

    return app;
}

export * from './modules/ExceptionFilters';
export * from './modules/Mongo';
