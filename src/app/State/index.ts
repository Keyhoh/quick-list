import {Cursor, Todo} from "../../contents";

export interface State {
    contents: Todo[],
    current: number,
}

export const InitState: State = Cursor.of<Todo>([]).toJSON();
