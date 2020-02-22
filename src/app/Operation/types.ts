import {IAction, KIND} from "../Action";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

interface IBaseAction<T> extends IAction<T> {
    kind: KIND.OPERATION,
}

interface AddTodoAction extends IBaseAction<typeof ADD_TODO> {
    type: typeof ADD_TODO,
    payload: string,
}

interface RemoveTodoAction extends IBaseAction<typeof REMOVE_TODO> {
    type: typeof REMOVE_TODO,
}

export type OperationActionTypes = AddTodoAction | RemoveTodoAction;
