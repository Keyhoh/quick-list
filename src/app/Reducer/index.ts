import {InitState, State} from "../State";
import {IAction, KIND} from "../Action";
import {ManufactureActionTypes, ManufactureReducer} from "../Operation/Manufacture";
import {Cursor, Todo} from "../../contents";
import {MoveActionTypes, MoveReducer} from "../Operation/Move";
import {ModeActionTypes, ModeReducer} from "../Operation/Mode";

export default function (state: State = InitState, action: IAction): State {
    let cursor = Cursor.fromJSON<Todo>(state);

    switch (action.kind) {
        case KIND.MODE:
            return {...state, ...ModeReducer(action as ModeActionTypes)};
        case KIND.MOVE:
            return {...state, ...MoveReducer(cursor, action as MoveActionTypes).toJSON()};
        case KIND.OPERATION:
            return {...state, ...ManufactureReducer(cursor, action as ManufactureActionTypes).toJSON()};
    }
    return InitState;
};
