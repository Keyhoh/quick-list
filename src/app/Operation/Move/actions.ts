import {DOWN, MoveActionTypes, UP} from "./types";
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
