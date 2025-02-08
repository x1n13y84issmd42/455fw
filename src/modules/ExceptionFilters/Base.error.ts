/**
 * A base class for all the errors.
 */
export class BaseError extends Error {
	/**
	 * An optional HTTP response status code.
	 */
	public statusCode: number = 0;

	constructor(msg: string, public data?: any, cause?: any) {
		if (!(cause instanceof Error)) {
			cause = new Error(`Unknown error (${cause})`);
		}

		super(msg, {cause});
	}
}
