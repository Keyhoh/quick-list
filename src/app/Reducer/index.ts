import {InitState, State} from "../State";
import {Kind} from "../Action";
import {ManufactureActionTypes, manufactureReducer} from "../Operation/Manufacture";
import {MoveActionTypes, moveReducer} from "../Operation/Move";
import {ModeActionTypes, modeReducer} from "../Operation/Mode";

export default function (state: State = InitState, action: ModeActionTypes | MoveActionTypes | ManufactureActionTypes): State {
    switch (action.kind) {
        case Kind.MODE:
            return modeReducer(state, action);
        case Kind.MOVE:
            return moveReducer(state, action);
        case Kind.MANUFACTURE:
            return manufactureReducer(state, action);
    }
    return InitState;
};
