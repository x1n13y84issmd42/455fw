/**
 * A base class for all the errors.
 */
export class BaseError<TD=any> extends Error {
	/**
	 * An optional HTTP response status code.
	 */
	public statusCode: number = 0;

	constructor(msg: string, public data?: TD, cause?: any) {
		if (!(cause instanceof Error)) {
			cause = new Error(`Unknown error (${cause})`);
		}

		super(msg, {cause});
	}
}
