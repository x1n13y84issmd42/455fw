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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionFiltersModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const HttpException_filter_1 = require("./HttpException.filter");
const Unknown_filter_1 = require("./Unknown.filter");
const Error_filter_1 = require("./Error.filter");
const BaseError_filter_1 = require("./BaseError.filter");
let ExceptionFiltersModule = class ExceptionFiltersModule {
};
exports.ExceptionFiltersModule = ExceptionFiltersModule;
exports.ExceptionFiltersModule = ExceptionFiltersModule = __decorate([
    (0, common_1.Module)({
        providers: [
            Unknown_filter_1.UnknownFilter,
            Error_filter_1.ErrorFilter,
            HttpException_filter_1.HttpExceptionFilter,
            BaseError_filter_1.BaseErrorFilter,
        ].map(useClass => ({
            provide: core_1.APP_FILTER,
            useClass,
        })),
    })
], ExceptionFiltersModule);
__exportStar(require("../../errors"), exports);
//# sourceMappingURL=index.js.map