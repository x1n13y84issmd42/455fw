"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const Base_error_1 = require("./Base.error");
class ValidationError extends Base_error_1.BaseError {
    statusCode = 400;
    constructor(errs) {
        super(`There were errors in the submitted data.`, errs.map(e => ({
            property: e.property,
            errors: Object.values(e.constraints),
        })));
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=Validation.error.js.map