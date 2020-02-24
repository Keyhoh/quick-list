import {Action} from 'redux';

export enum Kind {
    MODE,
    MOVE,
    MANUFACTURE,
}

export interface IAction<T = any> extends Action<T> {
    kind: Kind,
}
