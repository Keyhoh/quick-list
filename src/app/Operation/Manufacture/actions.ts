import {ADD_TODO, ManufactureActionTypes, REMOVE_TODO} from "./types";
import {KIND} from "../../Action";

export function addTodo(s: string): ManufactureActionTypes {
    return {
        kind: KIND.OPERATION,
        type: ADD_TODO,
        payload: s,
    }
}

export function removeTodo(): ManufactureActionTypes {
    return {
        kind: KIND.OPERATION,
        type: REMOVE_TODO,
    }
}
