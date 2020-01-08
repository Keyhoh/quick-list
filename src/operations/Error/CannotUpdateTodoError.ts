export default class CannotCheckTodoError extends Error{
    constructor() {
        super('Cannot check todo, because todo is discarded.');
        Object.setPrototypeOf(this, CannotCheckTodoError.prototype);
    }
}
