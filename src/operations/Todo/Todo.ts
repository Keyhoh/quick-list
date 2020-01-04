import Id from "./Id";
import Name from "./Name";

export default class Todo {
    private readonly _id: Id;
    private _name: Name;

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
        this._name = new Name((name));
    }
}
