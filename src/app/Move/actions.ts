import {DOWN, MoveActionTypes, UP} from "./types";
import {KIND} from "../Action";

export function up(): MoveActionTypes {
    return {
        kind: KIND.MOVE,
        type: UP,
    };
}

export function down(): MoveActionTypes {
    return {
        kind: KIND.MOVE,
        type: DOWN,
    }
}
