"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFilter = void 0;
class BaseFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const { status, ...errDTO } = this.format(exception);
        response
            .status(status)
            .json(errDTO);
    }
}
exports.BaseFilter = BaseFilter;
//# sourceMappingURL=Base.filter.js.map