import {BOTTOM, DOWN, MoveActionTypes, TOP, UP} from "./types";
import {Kind} from "../../Action";

export function up(): MoveActionTypes {
    return {
        kind: Kind.MOVE,
        type: UP,
    };
}

export function down(): MoveActionTypes {
    return {
        kind: Kind.MOVE,
        type: DOWN,
    }
}

export function gotoTop(): MoveActionTypes {
    return {
        kind: Kind.MOVE,
        type: TOP,
    }
}

export function gotoBottom(): MoveActionTypes {
    return {
        kind: Kind.MOVE,
        type: BOTTOM,
    }
}
