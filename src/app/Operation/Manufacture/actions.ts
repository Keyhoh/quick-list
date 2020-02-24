import {ADD_TODO, ManufactureActionTypes, REMOVE_TODO} from "./types";
import {Kind} from "../../Action";

export function addTodo(s: string): ManufactureActionTypes {
    return {
        kind: Kind.MANUFACTURE,
        type: ADD_TODO,
        payload: s,
    }
}

export function removeTodo(): ManufactureActionTypes {
    return {
        kind: Kind.MANUFACTURE,
        type: REMOVE_TODO,
    }
}
