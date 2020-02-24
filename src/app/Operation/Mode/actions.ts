import {ADD_INSERT, CHANGE_MODE, Direction, ModeActionTypes} from "./types";
import {KIND} from "../../Action";
import Mode from "../../../mode";

export function changeMode(m: Mode): ModeActionTypes {
    return {
        kind: KIND.MODE,
        type: CHANGE_MODE,
        payload: m,
    }
}

export function addInsert(d: Direction): ModeActionTypes {
    return {
        kind: KIND.MODE,
        type: ADD_INSERT,
        payload: d,
    }
}
