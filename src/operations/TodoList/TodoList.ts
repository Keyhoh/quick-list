import Todo from "../Todo";

export default class TodoList {
    private readonly _contents: Todo[];

    constructor(contents: Todo[]) {
        this._contents = contents;
    }

    get contents(): Todo[] {
        return this._contents;
    }
}
