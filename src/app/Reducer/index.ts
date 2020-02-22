import {InitState, State} from "../State";
import {IAction, KIND} from "../Action";
import {ManufactureActionTypes, ManufactureReducer} from "../Operation/Manufacture";
import {Cursor, Todo} from "../../contents";
import {MoveActionTypes, MoveReducer} from "../Operation/Move";

export default function (state: State = InitState, action: IAction): State {
    let cursor = Cursor.fromJSON<Todo>(state);

    switch (action.kind) {
        case KIND.MOVE:
            return MoveReducer(cursor, action as MoveActionTypes).toJSON();
        case KIND.OPERATION:
            return OperationReducer(cursor, action as OperationActionTypes).toJSON();
    }
    return InitState;
};
