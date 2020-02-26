import {State} from "../../State";
import Mode from "../../../mode";
import {getTodoList} from "../../../__tests__/util";
import {MoveReducer} from "./reducers";
import {Kind} from "../../Action";
import {DOWN, UP} from "./types";
import {Todo} from "../../../contents";

describe('MoveReducer test', (): void => {
    const CONTENTS: Todo[] = getTodoList(10);
    const InitState: State = {
        mode: Mode.NORMAL,
        contents: CONTENTS,
        current: 5,
    };

    test('MoveReducer move down current todo.', (): void => {
        expect(MoveReducer(InitState, {kind: Kind.MOVE, type: DOWN}))
            .toEqual({
                mode: Mode.NORMAL,
                contents: CONTENTS,
                current: 6,
            });
    });
    test('MoveReducer move down current todo.', (): void => {
        expect(MoveReducer(InitState, {kind: Kind.MOVE, type: UP}))
            .toEqual({
                mode: Mode.NORMAL,
                contents: CONTENTS,
                current: 4,
            });
    });
});
