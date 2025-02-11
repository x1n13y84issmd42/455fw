"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const Base_filter_1 = require("./Base.filter");
const Base_error_1 = require("../../errors/Base.error");
let BaseErrorFilter = class BaseErrorFilter extends Base_filter_1.BaseFilter {
    format(err) {
        return {
            status: err.statusCode || 500,
            error: err.constructor.name,
            message: err.message,
            data: err.data,
        };
    }
};
exports.BaseErrorFilter = BaseErrorFilter;
exports.BaseErrorFilter = BaseErrorFilter = __decorate([
    (0, common_1.Catch)(Base_error_1.BaseError)
], BaseErrorFilter);
//# sourceMappingURL=BaseError.filter.js.map