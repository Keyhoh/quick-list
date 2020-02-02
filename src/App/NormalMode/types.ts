import {Action} from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

interface AddTodoAction extends Action<typeof ADD_TODO> {
    type: typeof ADD_TODO,
    payload: string,
}

interface RemoveTodoAction extends Action<typeof REMOVE_TODO> {
    type: typeof REMOVE_TODO,
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction;
