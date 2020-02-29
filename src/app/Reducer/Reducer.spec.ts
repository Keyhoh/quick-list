import reducer from "./index";
import {Kind} from "../Action";
import {manufactureReducer, REMOVE_ALL, REMOVE_TODO} from "../Operation/Manufacture";
import {CHANGE_MODE, ModeActionTypes, modeReducer} from "../Operation/Mode";
import Mode from "../../mode";
import {DOWN, moveReducer, UP} from "../Operation/Move";
import {InitState} from "../State";

jest.mock("../Operation/Manufacture");
jest.mock("../Operation/Move");
jest.mock("../Operation/Mode");

describe('Reducer test', (): void => {
    test('Reducer calls manufacture-reducer.', (): void => {
        reducer(InitState, {kind: Kind.MANUFACTURE, type: REMOVE_TODO, payload: 'add todo'});
        reducer(InitState, {kind: Kind.MANUFACTURE, type: REMOVE_ALL});
        expect(manufactureReducer).toBeCalledTimes(2);
    });

    test('Reducer calls move-reducer.', (): void => {
        reducer(InitState, {kind: Kind.MOVE, type: UP});
        reducer(InitState, {kind: Kind.MOVE, type: DOWN});
        expect(moveReducer).toBeCalledTimes(2);
    });

    test('Reducer calls mode-reducer.', (): void => {
        reducer(InitState, {kind: Kind.MODE, type: CHANGE_MODE, payload: Mode.NORMAL});
        expect(modeReducer).toBeCalledTimes(1);
    });

    test('Reducer calls sub-reducer with InitState.', (): void => {
        const ACTION: ModeActionTypes = {kind: Kind.MODE, type: CHANGE_MODE, payload: Mode.NORMAL};
        reducer(undefined, ACTION);
        expect(modeReducer).toBeCalledWith(InitState, ACTION as ModeActionTypes);
    });
});
