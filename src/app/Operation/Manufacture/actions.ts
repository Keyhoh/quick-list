import {ManufactureActionTypes, REMOVE_ALL, REMOVE_TODO, UPDATE_TODO} from "./types";
import {Kind} from "../../Action";

export function removeTodo(): ManufactureActionTypes {
    return {
        kind: Kind.MANUFACTURE,
        type: REMOVE_TODO,
    }
}

export function removeAll(): ManufactureActionTypes {
    return {
        kind: Kind.MANUFACTURE,
        type: REMOVE_ALL,
    }
}

export function updateTodo(s: string): ManufactureActionTypes {
    return {
        kind: Kind.MANUFACTURE,
        type: UPDATE_TODO,
        payload: s,
    }
}
