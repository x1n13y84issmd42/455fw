"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHTTPServer = createHTTPServer;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const errors_1 = require("./errors");
async function createHTTPServer(AppModule) {
    const app = await core_1.NestFactory.create(AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        exceptionFactory: (errors) => new errors_1.ValidationError(errors),
    }));
    return app;
}
__exportStar(require("./modules/ExceptionFilters"), exports);
__exportStar(require("./modules/Mongo"), exports);
//# sourceMappingURL=index.js.map