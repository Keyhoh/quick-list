import {ADD_TODO, ManufactureActionTypes, REMOVE_TODO} from "./types";
import {Cursor, Todo} from "../../../contents";
import {State} from "../../State";

export const ManufactureReducer = (state: State, action: ManufactureActionTypes): State => {
    let cursor = Cursor.fromJSON<Todo>(state);

    switch (action.type) {
        case ADD_TODO:
            let contents: Todo[] = [...cursor.contents, new Todo(action.payload)];
            return {...state, ...cursor.update(contents).toJSON()};
        case REMOVE_TODO:
            return {...state, ...Cursor.of<Todo>([]).toJSON()};
    }
    return state;
};
