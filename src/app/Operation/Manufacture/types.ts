import {IAction, Kind} from "../../Action";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

interface IBaseAction<T> extends IAction<T> {
    kind: Kind.MANUFACTURE,
}

interface AddTodoAction extends IBaseAction<typeof ADD_TODO> {
    type: typeof ADD_TODO,
    payload: string,
}

interface RemoveTodoAction extends IBaseAction<typeof REMOVE_TODO> {
    type: typeof REMOVE_TODO,
}

interface UpdateTodoAction extends IBaseAction<typeof UPDATE_TODO> {
    type: typeof UPDATE_TODO,
    payload: string,
}

export type ManufactureActionTypes = AddTodoAction | RemoveTodoAction | UpdateTodoAction;
