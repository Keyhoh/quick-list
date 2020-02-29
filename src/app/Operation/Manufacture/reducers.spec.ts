import {manufactureReducer} from "./reducers";
import {InitState, State} from "../../State";
import {Kind} from "../../Action";
import {REMOVE_ALL, REMOVE_TODO, UPDATE_TODO} from "./types";
import Mode from "../../../mode";
import {getTodoList} from "../../../__tests__/util";
import {Todo} from "../../../contents";

describe('ManufactureReducer test', (): void => {
    test('ManufactureReducer removes todo.', (): void => {
        const CONTENTS: Todo[] = getTodoList(10);
        const InitState: State = {
            mode: Mode.NORMAL,
            contents: CONTENTS,
            current: 4,
        };
        const CurrentState: State = manufactureReducer(
            InitState,
            {kind: Kind.MANUFACTURE, type: REMOVE_TODO}
        );
        expect(CurrentState.mode).toEqual(Mode.NORMAL);
        expect(CurrentState.contents.length).toBe(9);
        expect(CurrentState.current).toBe(4);
        expect(CurrentState.contents).toEqual(CONTENTS.filter((_: Todo, i: number) => i !== 4));
    });

    test('ManufactureReducer remove all todo.', (): void => {
        const InitState: State = {
            mode: Mode.NORMAL,
            contents: getTodoList(10),
            current: 5,
        };
        const CurrentState: State = manufactureReducer(
            InitState,
            {kind: Kind.MANUFACTURE, type: REMOVE_ALL}
        );
        expect(CurrentState.mode).toEqual(Mode.NORMAL);
        expect(CurrentState.contents).toEqual([]);
        expect(CurrentState.current).toBe(-1);
    });

    test('ManufactureReducer updates todo.', (): void => {
        const NAME: string = 'reducer updates todo.';
        const CURRENT: number = 5;
        const InitState: State = {
            mode: Mode.NORMAL,
            contents: getTodoList(10),
            current: CURRENT,
        };
        const CurrentState: State = manufactureReducer(
            InitState,
            {kind: Kind.MANUFACTURE, type: UPDATE_TODO, payload: NAME}
        );
        expect(CurrentState.mode).toEqual(Mode.NORMAL);
        expect(CurrentState.current).toEqual(CURRENT);
        expect(CurrentState.contents.filter((_: Todo, i: number) => i !== CURRENT))
            .toEqual(InitState.contents.filter((_: Todo, i: number) => i !== CURRENT));
        expect(CurrentState.contents[CURRENT].name).toEqual(NAME);
    });

    describe('ManufactureReducer does not throw exception or change state.', () => {
        const InitState: State = {
            mode: Mode.NORMAL,
            contents: getTodoList(10),
            current: 5,
        };

        expect((): void => void manufactureReducer(
            InitState,
            {kind: Kind.MANUFACTURE, type: UPDATE_TODO, payload: ''}
        )).not.toThrow();

        expect(manufactureReducer(InitState, {kind: Kind.MANUFACTURE, type: UPDATE_TODO, payload: ''}))
            .toEqual(InitState);

        expect((): void => void manufactureReducer(
            InitState,
            {kind: Kind.MANUFACTURE, type: UPDATE_TODO, payload: 'a'.repeat(64)}
        )).not.toThrow();

        expect(manufactureReducer(
            InitState,
            {kind: Kind.MANUFACTURE, type: UPDATE_TODO, payload: 'a'.repeat(64)}
        )).toEqual(InitState);
    });

    test('ManufactureReducer throws error if update todo in empty todo-list.', (): void => {
        expect((): void => void manufactureReducer(
            InitState,
            {kind: Kind.MANUFACTURE, type: UPDATE_TODO, payload: 'update todo in empty list'}
        )).toThrowError();
    })
});
