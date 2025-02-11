"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    data;
    statusCode = 0;
    constructor(msg, data, cause) {
        if (!(cause instanceof Error)) {
            cause = new Error(`Unknown error (${cause})`);
        }
        super(msg, { cause });
        this.data = data;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=Base.error.js.map