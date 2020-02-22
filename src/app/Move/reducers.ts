import {DOWN, MoveActionTypes, UP} from "./types";
import {Cursor, Todo} from "../../contents";

export const MoveReducer = (cursor: Cursor<Todo>, action: MoveActionTypes): Cursor<Todo> => {
    switch (action.type) {
        case UP:
            cursor.prev();
            return cursor;
        case DOWN:
            cursor.next();
            return cursor;
    }
    return cursor;
};
