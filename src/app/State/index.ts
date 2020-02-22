import {Cursor, Todo} from "../../contents";
import Mode from "../Mode";

export interface State {
    mode: Mode,
    contents: Todo[],
    current: number,
}

export const InitState: State = {mode: Mode.NORMAL, ...Cursor.of<Todo>([]).toJSON()};
