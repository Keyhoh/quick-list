import {ManufactureReducer} from "./reducers";
import {InitState, State} from "../../State";
import {KIND} from "../../Action";
import {ADD_TODO, REMOVE_TODO} from "./types";
import Mode from "../../../mode";
import {getTodoList} from "../../../__tests__/util";

describe('ManufactureReducer test', (): void => {
    test('ManufactureReducer adds todo.', (): void => {
        const CurrentState: State = ManufactureReducer(
            InitState,
            {kind: KIND.MANUFACTURE, type: ADD_TODO, payload: 'AddTodo action'}
        );
        expect(CurrentState.mode).toEqual(Mode.NORMAL);
        expect(CurrentState.contents.length).toBe(1);
        expect(CurrentState.current).toBe(0);
    });

    test('ManufactureReducer remove all todo.', (): void => {
        const InitState: State = {
            mode: Mode.NORMAL,
            contents: getTodoList(10),
            current: 5,
        };
        const CurrentState: State = ManufactureReducer(
            InitState,
            {kind: KIND.MANUFACTURE, type: REMOVE_TODO}
        );
        expect(CurrentState.mode).toEqual(Mode.NORMAL);
        expect(CurrentState.contents).toEqual([]);
        expect(CurrentState.current).toBe(-1);
    });
});
