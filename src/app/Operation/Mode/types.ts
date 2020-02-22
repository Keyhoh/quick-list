import {IAction, KIND} from "../../Action";
import Mode from "../../../mode";

export const CHANGE_MODE = 'CHANGE_MODE';

interface IBaseAction<T> extends IAction<T> {
    kind: KIND.MODE,
}

interface ModeAction extends IBaseAction<typeof CHANGE_MODE> {
    type: typeof CHANGE_MODE,
    payload: Mode,
}

export type ModeActionTypes = ModeAction;
