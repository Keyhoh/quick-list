import {IAction, Kind} from "../../Action";

export const UP: string = 'UP';
export const DOWN: string = 'DOWN';
export const TOP: string = 'TOP';
export const BOTTOM: string = 'BOTTOM';

interface IBaseAction<T> extends IAction<T> {
    kind: Kind.MOVE,
}

interface MoveUpAction extends IBaseAction<typeof UP> {
    type: typeof UP,
}

interface MoveDownAction extends IBaseAction<typeof DOWN> {
    type: typeof DOWN,
}

interface MoveTopAction extends IBaseAction<typeof TOP> {
    type: typeof TOP,
}

interface MoveBottomAction extends IBaseAction<typeof BOTTOM> {
    type: typeof BOTTOM,
}

export type MoveActionTypes = MoveUpAction | MoveDownAction | MoveTopAction | MoveBottomAction ;
