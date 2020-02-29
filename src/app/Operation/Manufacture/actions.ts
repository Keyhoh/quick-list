import {ADD_TODO, ManufactureActionTypes, REMOVE_TODO, UPDATE_TODO} from "./types";
import {Kind} from "../../Action";

export function addTodo(s: string): ManufactureActionTypes {
    return {
        kind: Kind.MANUFACTURE,
        type: ADD_TODO,
        payload: s,
    }
}

export function removeAll(): ManufactureActionTypes {
    return {
        kind: Kind.MANUFACTURE,
        type: REMOVE_TODO,
    }
}

export function updateTodo(s: string): ManufactureActionTypes {
    return {
        kind: Kind.MANUFACTURE,
        type: UPDATE_TODO,
        payload: s,
    }
}
