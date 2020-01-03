import Id from "./Id";
import Name from "./Name";

export default class Todo {
    readonly id: Id;
    readonly name: Name;

    constructor(name: string) {
        this.id = new Id();
        this.name = new Name(name);
    }
}
