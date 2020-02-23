import {InitState, State} from "../State";
import {IAction, KIND} from "../Action";
import {ManufactureActionTypes, ManufactureReducer} from "../Operation/Manufacture";
import {MoveActionTypes, MoveReducer} from "../Operation/Move";
import {ModeActionTypes, ModeReducer} from "../Operation/Mode";

export default function (state: State = InitState, action: IAction): State {
    switch (action.kind) {
        case KIND.MODE:
            return ModeReducer(state, action as ModeActionTypes);
        case KIND.MOVE:
            return MoveReducer(state, action as MoveActionTypes);
        case KIND.OPERATION:
            return ManufactureReducer(state, action as ManufactureActionTypes);
    }
    return InitState;
};
