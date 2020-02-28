import {ADD_INSERT, CHANGE_MODE, Direction, ModeActionTypes} from "./types";
import {State} from "../../State";
import {Todo} from "../../../contents";
import Mode from "../../../mode";

const go: Function = (current: number, d: Direction): number => {
    return current + Number(d === Direction.Below);
};

export const modeReducer = (state: State, action: ModeActionTypes): State => {
    switch (action.type) {
        case CHANGE_MODE:
            return {...state, mode: action.payload};
        case ADD_INSERT:
            let contents: Todo[] = [...state.contents];
            const CURRENT = go(state.current, action.payload);
            contents.splice(CURRENT, 0, new Todo('Maximum characters length is 32.'));
            return {mode: Mode.INSERT, current: CURRENT, contents: [...contents]};
    }
    return state;
};
