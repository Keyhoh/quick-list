import {IAction, KIND} from "../../Action";
import Mode from "../../../mode";

export const CHANGE_MODE = 'CHANGE_MODE';
export const ADD_INSERT = 'ADD_INSERT';

export enum Direction {
    Above,
    Below,
}

interface IBaseAction<T> extends IAction<T> {
    kind: KIND.MODE,
}

interface ModeAction extends IBaseAction<typeof CHANGE_MODE> {
    type: typeof CHANGE_MODE,
    payload: Mode,
}

interface AddInsert extends IBaseAction<typeof ADD_INSERT> {
    type: typeof ADD_INSERT,
    payload: Direction,
}

export type ModeActionTypes = ModeAction | AddInsert;
