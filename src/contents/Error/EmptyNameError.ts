export default class EmptyNameError extends Error{
    constructor() {
        super('Cannot give todo a empty name.');
        Object.setPrototypeOf(this, EmptyNameError.prototype);
    }
}
