import {IAction, Kind} from "../../Action";

export const UP: string = 'UP';
export const DOWN: string = 'DOWN';

interface IBaseAction<T> extends IAction<T> {
    kind: Kind.MOVE,
}

interface MoveUpAction extends IBaseAction<typeof UP> {
    type: typeof UP,
}

interface MoveDownAction extends IBaseAction<typeof DOWN> {
    type: typeof DOWN,
}

export type MoveActionTypes = MoveUpAction | MoveDownAction;
