import {ADD_TODO, OperationActionTypes, REMOVE_TODO} from "./types";
import {Cursor, Todo} from "../../contents";

export const OperationReducer = (cursor: Cursor<Todo>, action: OperationActionTypes): Cursor<Todo> => {
    switch (action.type) {
        case ADD_TODO:
            let contents: Todo[] = [...cursor.contents, new Todo(action.payload)];
            return cursor.update(contents);
        case REMOVE_TODO:
            return Cursor.of<Todo>([]);
    }
    return cursor;
};
