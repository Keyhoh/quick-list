import {ModeActionTypes} from "./types";
import {State} from "../../State";

export const ModeReducer = (state: State, action: ModeActionTypes): State => {
    return {...state, mode: action.payload};
};
