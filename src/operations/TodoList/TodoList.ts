import Todo from "../Todo";

export default class TodoList {
    private readonly _contents: Todo[];
    private readonly _current: number;

    constructor(contents: Todo[]) {
        this._contents = contents;
        this._current = contents.length === 0 ? -1 : 0;
    }

    get contents(): Todo[] {
        return this._contents;
    }

    get current(): Todo {
        return this._contents[this._current];
    }
}
