import {Action} from 'redux';

export enum KIND {
    OPERATION,
}

export interface IAction<T = any> extends Action<T> {
    kind: KIND,
}
