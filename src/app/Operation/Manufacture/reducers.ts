import {ADD_TODO, ManufactureActionTypes, REMOVE_TODO} from "./types";
import {Cursor, Todo} from "../../../contents";

export const ManufactureReducer = (cursor: Cursor<Todo>, action: ManufactureActionTypes): Cursor<Todo> => {
    switch (action.type) {
        case ADD_TODO:
            let contents: Todo[] = [...cursor.contents, new Todo(action.payload)];
            return cursor.update(contents);
        case REMOVE_TODO:
            return Cursor.of<Todo>([]);
    }
    return cursor;
};
