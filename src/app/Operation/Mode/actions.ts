import {CHANGE_MODE, ModeActionTypes} from "./types";
import {KIND} from "../../Action";
import Mode from "../../../mode";

export function changeMode(m: Mode): ModeActionTypes {
    return {
        kind: KIND.MODE,
        type: CHANGE_MODE,
        payload: m,
    }
}
