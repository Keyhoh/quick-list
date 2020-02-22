import {ADD_TODO, OperationActionTypes, REMOVE_TODO} from "./types";
import {KIND} from "../Action";

export function addTodo(s: string): OperationActionTypes {
    return {
        kind: KIND.OPERATION,
        type: ADD_TODO,
        payload: s,
    }
}

export function removeTodo(): OperationActionTypes {
    return {
        kind: KIND.OPERATION,
        type: REMOVE_TODO,
    }
}
