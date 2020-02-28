import reducer from "./index";
import {Kind} from "../Action";
import {ADD_TODO, ManufactureReducer, REMOVE_TODO} from "../Operation/Manufacture";
import {CHANGE_MODE, ModeActionTypes, ModeReducer} from "../Operation/Mode";
import Mode from "../../mode";
import {DOWN, MoveReducer, UP} from "../Operation/Move";
import {InitState} from "../State";

jest.mock("../Operation/Manufacture");
jest.mock("../Operation/Move");
jest.mock("../Operation/Mode");

describe('Reducer test', (): void => {
    test('Reducer calls manufacture-reducer.', (): void => {
        reducer(InitState, {kind: Kind.MANUFACTURE, type: ADD_TODO, payload: 'add todo'});
        reducer(InitState, {kind: Kind.MANUFACTURE, type: REMOVE_TODO});
        expect(ManufactureReducer).toBeCalledTimes(2);
    });

    test('Reducer calls move-reducer.', (): void => {
        reducer(InitState, {kind: Kind.MOVE, type: UP});
        reducer(InitState, {kind: Kind.MOVE, type: DOWN});
        expect(MoveReducer).toBeCalledTimes(2);
    });

    test('Reducer calls mode-reducer.', (): void => {
        reducer(InitState, {kind: Kind.MODE, type: CHANGE_MODE, payload: Mode.NORMAL});
        expect(ModeReducer).toBeCalledTimes(1);
    });

    test('Reducer calls sub-reducer with InitState.', (): void => {
        const ACTION: ModeActionTypes = {kind: Kind.MODE, type: CHANGE_MODE, payload: Mode.NORMAL};
        reducer(undefined, ACTION);
        expect(ModeReducer).toBeCalledWith(InitState, ACTION as ModeActionTypes);
    });
});
