import {Action} from 'redux';

export enum KIND {
    MODE,
    MOVE,
    MANUFACTURE,
}

export interface IAction<T = any> extends Action<T> {
    kind: KIND,
}
