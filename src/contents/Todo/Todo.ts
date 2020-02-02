import Id from "./Id";
import Name from "./Name";
import {CannotUpdateTodoError} from "../Error";

export default class Todo {
    private readonly _id: Id;
    private _name: Name;
    private _isChecked: boolean = false;
    private _isDiscarded: boolean = false;

    public constructor(name: string) {
        this._id = new Id();
        this._name = new Name(name);
    }

    public get id(): string {
        return this._id.value;
    }

    public get name(): string {
        return this._name.value;
    }

    public set name(name: string) {
        if (this.isDiscarded) throw new CannotUpdateTodoError();
        this._name = new Name((name));
    }

    public get isChecked(): boolean {
        return this._isChecked;
    }

    public check(): void {
        if (this.isDiscarded) throw new CannotUpdateTodoError();
        this._isChecked = true;
    }

    public uncheck(): void {
        if (this.isDiscarded) throw new CannotUpdateTodoError();
        this._isChecked = false;
    }

    public get isDiscarded(): boolean {
        return this._isDiscarded;
    }

    public discard(): void {
        this._isDiscarded = true;
    }

    public pickUp(): void {
        this._isDiscarded = false;
    }
}
