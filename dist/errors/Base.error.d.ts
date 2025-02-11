export declare class BaseError<TD = any> extends Error {
    data?: TD;
    statusCode: number;
    constructor(msg: string, data?: TD, cause?: any);
}
