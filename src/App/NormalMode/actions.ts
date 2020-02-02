import {ADD_TODO, REMOVE_TODO, TodoActionTypes} from "./types";

export function addTodo(s: string): TodoActionTypes {
    return {
        type: ADD_TODO,
        payload: s,
    }
}

export function removeTodo(): TodoActionTypes {
    return {
        type: REMOVE_TODO,
    }
}
