import Id from "./Id";
import Name from "./Name";
import {CannotUpdateTodoError} from "../Error";

export default class Todo {
    private readonly _id: Id;
    private _name: Name;
    private _isChecked: boolean = false;
    private _isDiscarded: boolean = false;

    constructor(name: string) {
        this._id = new Id();
        this._name = new Name(name);
    }

    get id(): string {
        return this._id.value;
    }

    get name(): string {
        return this._name.value;
    }

    set name(name: string) {
        if (this.isDiscarded) throw new CannotUpdateTodoError();
        this._name = new Name((name));
    }

    get isChecked(): boolean {
        return this._isChecked;
    }

    get isDiscarded(): boolean {
        return this._isDiscarded;
    }

    check(): void {
        if (this.isDiscarded) throw new CannotUpdateTodoError();
        this._isChecked = true;
    }

    uncheck(): void {
        if (this.isDiscarded) throw new CannotUpdateTodoError();
        this._isChecked = false;
    }

    discard(): void {
        this._isDiscarded = true;
    }

    pickUp(): void {
        this._isDiscarded = false;
    }
}
