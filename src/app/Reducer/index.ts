import {InitState, State} from "../State";
import {Kind} from "../Action";
import {ManufactureActionTypes, ManufactureReducer} from "../Operation/Manufacture";
import {MoveActionTypes, MoveReducer} from "../Operation/Move";
import {ModeActionTypes, ModeReducer} from "../Operation/Mode";

export default function (state: State = InitState, action: ModeActionTypes | MoveActionTypes | ManufactureActionTypes): State {
    switch (action.kind) {
        case Kind.MODE:
            return ModeReducer(state, action);
        case Kind.MOVE:
            return MoveReducer(state, action);
        case Kind.MANUFACTURE:
            return ManufactureReducer(state, action);
    }
    return InitState;
};
