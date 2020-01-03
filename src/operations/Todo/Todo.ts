import Id from "./Id";

export default class Todo {
    readonly id: Id;

    constructor() {
        this.id = new Id();
    }
}
