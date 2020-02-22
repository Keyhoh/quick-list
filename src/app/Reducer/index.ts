import {InitState, State} from "../State";
import {IAction, KIND} from "../Action";
import {OperationActionTypes, OperationReducer} from "../Operation";
import {Cursor, Todo} from "../../contents";

export default function (state: State = InitState, action: IAction): State {
    let cursor = Cursor.fromJSON<Todo>(state);

    switch (action.kind) {
        case KIND.OPERATION:
            return OperationReducer(cursor, action as OperationActionTypes).toJSON();
    }
    return InitState;
};
