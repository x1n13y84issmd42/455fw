import { ModelDefinition } from "@nestjs/mongoose";
export declare class MongoModule {
    static model<T>(classCtor: new () => T, schema: any): ModelDefinition;
    static importModels(models: ModelDefinition[]): import("@nestjs/common").DynamicModule;
}
