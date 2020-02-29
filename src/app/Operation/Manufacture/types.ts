import {IAction, Kind} from "../../Action";

export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_ALL = 'REMOVE_ALL';
export const UPDATE_TODO = 'UPDATE_TODO';

interface IBaseAction<T> extends IAction<T> {
    kind: Kind.MANUFACTURE,
}

interface RemoveTodo extends IBaseAction<typeof REMOVE_TODO> {
    type: typeof REMOVE_TODO,
}

interface RemoveAllAction extends IBaseAction<typeof REMOVE_ALL> {
    type: typeof REMOVE_ALL,
}

interface UpdateTodoAction extends IBaseAction<typeof UPDATE_TODO> {
    type: typeof UPDATE_TODO,
    payload: string,
}

export type ManufactureActionTypes = RemoveTodo | RemoveAllAction | UpdateTodoAction;
