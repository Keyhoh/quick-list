export default class NoSuchContentsError extends Error{
    constructor() {
        super('List has not such contents.');
        Object.setPrototypeOf(this, NoSuchContentsError.prototype);
    }
}
