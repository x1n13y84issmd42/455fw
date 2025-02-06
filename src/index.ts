import { NestFactory } from '@nestjs/core';

export function createHTTPServer(AppModule: any) {
    return NestFactory.create(AppModule);
}

export * from './mongoose';
export * from './modules/ExceptionFilters';
export * from './modules/Mongo';
