export default class NoSuchTodoError extends Error{
    constructor() {
        super('List has not any todo.');
        Object.setPrototypeOf(this, NoSuchTodoError.prototype);
    }
}
