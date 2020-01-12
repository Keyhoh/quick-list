export default class NoSuchContents extends Error{
    constructor() {
        super('List has not such contents.');
        Object.setPrototypeOf(this, NoSuchContents.prototype);
    }
}
