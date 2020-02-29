import {ManufactureActionTypes, REMOVE_ALL, REMOVE_TODO, UPDATE_TODO} from "./types";
import {Cursor, Todo} from "../../../contents";
import {State} from "../../State";
import {EmptyNameError, TooLongNameError} from "../../../contents/Error";

const removeTodo: Function = (state: State): State => {
    let cursor = Cursor.fromJSON<Todo>(state);
    let contents: Todo[] = cursor.contents;
    contents.splice(cursor.current, 1);
    return {...state, ...cursor.update(contents).toJSON()};
};

const updateTodo: Function = (state: State, name: string): State => {
    let cursor: Cursor<Todo> = Cursor.fromJSON<Todo>(state);
    let contents: Todo[] = [...cursor.contents];
    try {
        contents[state.current].name = name;
    } catch (e) {
        switch (e.constructor.name) {
            case TooLongNameError.name:
            case EmptyNameError.name:
                return state;
            default:
                throw e;
        }
    }
    return {...state, ...cursor.update(contents)};
};

export const manufactureReducer = (state: State, action: ManufactureActionTypes): State => {
    switch (action.type) {
        case REMOVE_TODO:
            return removeTodo(state);
        case REMOVE_ALL:
            return {...state, ...Cursor.of<Todo>([]).toJSON()};
        case UPDATE_TODO:
            return updateTodo(state, action.payload);
    }
    return state;
};
