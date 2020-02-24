import {InitState, State} from "../State";
import {IAction, Kind} from "../Action";
import {ManufactureActionTypes, ManufactureReducer} from "../Operation/Manufacture";
import {MoveActionTypes, MoveReducer} from "../Operation/Move";
import {ModeActionTypes, ModeReducer} from "../Operation/Mode";

export default function (state: State = InitState, action: IAction): State {
    switch (action.kind) {
        case Kind.MODE:
            return ModeReducer(state, action as ModeActionTypes);
        case Kind.MOVE:
            return MoveReducer(state, action as MoveActionTypes);
        case Kind.MANUFACTURE:
            return ManufactureReducer(state, action as ManufactureActionTypes);
    }
    return InitState;
};
