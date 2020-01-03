export default class TooLongNameError extends Error {
    constructor() {
        super('The name of todo is too long. It must be 32 characters or less.');
        Object.setPrototypeOf(this, TooLongNameError.prototype);
    }

}
