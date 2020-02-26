import {ADD_TODO, ManufactureActionTypes, REMOVE_TODO, UPDATE_TODO} from "./types";
import {Cursor, Todo} from "../../../contents";
import {State} from "../../State";
import {EmptyNameError, TooLongNameError} from "../../../contents/Error";

const addTodo: Function = (state: State, name: string): State => {
    let cursor = Cursor.fromJSON<Todo>(state);
    const CONTENTS: Todo[] = [...cursor.contents, new Todo(name)];
    return {...state, ...cursor.update(CONTENTS).toJSON()};
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

export const ManufactureReducer = (state: State, action: ManufactureActionTypes): State => {
    switch (action.type) {
        case ADD_TODO:
            return addTodo(state, action.payload);
        case REMOVE_TODO:
            return {...state, ...Cursor.of<Todo>([]).toJSON()};
        case UPDATE_TODO:
            return updateTodo(state, action.payload);
    }
    return state;
};
