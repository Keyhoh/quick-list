import Id from "./Id";

export default class TodoList {
    private readonly _id: Id;

    constructor() {
        this._id = new Id();
    }

    get id(): string {
        return this._id.value;
    }
}
