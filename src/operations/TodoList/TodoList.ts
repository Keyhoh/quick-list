import Todo from "../Todo";
import NoSuchTodoError from "../Error/NoSuchTodoError";

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
        if(this.contents.length === 0) throw new NoSuchTodoError();
        return this._contents[this._current];
    }
}
