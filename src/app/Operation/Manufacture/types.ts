import {IAction, Kind} from "../../Action";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_ALL = 'REMOVE_ALL';
export const UPDATE_TODO = 'UPDATE_TODO';

interface IBaseAction<T> extends IAction<T> {
    kind: Kind.MANUFACTURE,
}

interface AddTodoAction extends IBaseAction<typeof ADD_TODO> {
    type: typeof ADD_TODO,
    payload: string,
}

interface RemoveAllAction extends IBaseAction<typeof REMOVE_ALL> {
    type: typeof REMOVE_ALL,
}

interface UpdateTodoAction extends IBaseAction<typeof UPDATE_TODO> {
    type: typeof UPDATE_TODO,
    payload: string,
}

export type ManufactureActionTypes = AddTodoAction | RemoveAllAction | UpdateTodoAction;
