import Todo from "../Todo";
import Cursor from "./Cursor";

export default class TodoList {
    private readonly _contents: Todo[];
    private _cursor: Cursor;

    constructor(contents: Todo[]) {
        this._contents = contents;
        this._cursor = new Cursor(contents);
    }

    get contents(): Todo[] {
        return this._contents;
    }

    get current(): Todo {
        return this._contents[this._cursor.current];
    }

    public next(): Todo {
        this._cursor.go();
        return this.current;
    }

    public previous(): Todo {
        this._cursor.back();
        return this.current;
    }
}
