import Id from "./Id";
import Name from "./Name";

export default class Todo {
    private readonly _id: Id;
    private _name: Name;
    private _isChecked: boolean = false;

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
        this._name = new Name((name));
    }

    public get isChecked(): boolean {
        return this._isChecked;
    }

    public check(): void {
        this._isChecked = true;
    }

    public uncheck(): void {
        this._isChecked = false;
    }
}
