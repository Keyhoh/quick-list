import {DOWN, MoveActionTypes, UP} from "./types";
import {Cursor, Todo} from "../../../contents";
import {State} from "../../State";

export const moveReducer = (state: State, action: MoveActionTypes): State => {
    let cursor = Cursor.fromJSON<Todo>(state);

    switch (action.type) {
        case UP:
            cursor.prev();
            return {...state, ...cursor.toJSON()};
        case DOWN:
            cursor.next();
            return {...state, ...cursor.toJSON()};
    }
    return state;
};
