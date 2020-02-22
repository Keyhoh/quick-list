import {Action} from 'redux';

export enum KIND {
    MODE,
    MOVE,
    OPERATION,
}

export interface IAction<T = any> extends Action<T> {
    kind: KIND,
}
