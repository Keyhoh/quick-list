import {State} from "../../State";
import Mode from "../../../mode";
import {getTodoList} from "../../../__tests__/util";
import {moveReducer} from "./reducers";
import {Kind} from "../../Action";
import {BOTTOM, DOWN, UP} from "./types";
import {Todo} from "../../../contents";

describe('MoveReducer test', (): void => {
    const LEN: number = 10;
    const CONTENTS: Todo[] = getTodoList(LEN);
    const InitState: State = {
        mode: Mode.NORMAL,
        contents: CONTENTS,
        current: 5,
    };

    test('MoveReducer moves down focus.', (): void => {
        expect(moveReducer(InitState, {kind: Kind.MOVE, type: DOWN}))
            .toEqual({
                mode: Mode.NORMAL,
                contents: CONTENTS,
                current: 6,
            });
    });

    test('MoveReducer moves up focus.', (): void => {
        expect(moveReducer(InitState, {kind: Kind.MOVE, type: UP}))
            .toEqual({
                mode: Mode.NORMAL,
                contents: CONTENTS,
                current: 4,
            });
    });

    test('MoveReducer move to bottom.', (): void => {
        expect(moveReducer(InitState, {kind: Kind.MOVE, type: BOTTOM}))
            .toEqual({
                mode: Mode.NORMAL,
                contents: CONTENTS,
                current: LEN - 1,
            });
    });
});
