import {ModeActionTypes} from "./types";
import Mode from "../../../mode";

export const ModeReducer = (action: ModeActionTypes): { mode: Mode } => {
    return {mode: action.payload};
};
