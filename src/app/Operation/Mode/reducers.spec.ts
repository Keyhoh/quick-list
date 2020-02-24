import Mode from "../../../mode";
import {ModeReducer} from "./reducers";
import {InitState, State} from "../../State";
import {KIND} from "../../Action";
import {ADD_INSERT, CHANGE_MODE, Direction} from "./types";
import {Todo} from "../../../contents";
import {getTodoList} from "../../../__test__/util";

describe('ModeReducer test', (): void => {
    test('ModeReducer changes mode.', (): void => {
        expect(ModeReducer(InitState, {kind: KIND.MODE, type: CHANGE_MODE, payload: Mode.INSERT}))
            .toEqual({...InitState, mode: Mode.INSERT});
    });

    test('ModeReducer add todo and change to insert mode.', (): void => {
        const TODO_LIST: Todo[] = getTodoList(3);
        const InitState: State = {
            mode: Mode.NORMAL,
            contents: TODO_LIST,
            current: 1
        };
        const CurrentState: State = ModeReducer(InitState, {
            kind: KIND.MODE,
            type: ADD_INSERT,
            payload: Direction.Below
        });

        expect(CurrentState.mode).toEqual(Mode.INSERT);
        let contents: Todo[] = CurrentState.contents;
        expect(contents.splice(2, 1)[0]).toBeInstanceOf(Todo);
        expect(contents).toEqual(TODO_LIST);
        expect(CurrentState.current).toBe(2);
    });
});
