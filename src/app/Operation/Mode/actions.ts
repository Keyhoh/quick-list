import {ADD_INSERT, CHANGE_MODE, Direction, ModeActionTypes} from "./types";
import {Kind} from "../../Action";
import Mode from "../../../mode";

export function changeMode(m: Mode): ModeActionTypes {
    return {
        kind: Kind.MODE,
        type: CHANGE_MODE,
        payload: m,
    }
}

export function addInsert(d: Direction): ModeActionTypes {
    return {
        kind: Kind.MODE,
        type: ADD_INSERT,
        payload: d,
    }
}
