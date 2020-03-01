import {BOTTOM, DOWN, down, gotoBottom, gotoTop, TOP, UP, up} from "./index";
import {State} from "../../State";
import {getTodoList} from "../../../__tests__/util";
import Mode from "../../../mode";

import configureStore, {MockStoreCreator, MockStoreEnhanced} from 'redux-mock-store';
import {Kind} from "../../Action";

const mockStore: MockStoreCreator<State> = configureStore<State>([]);

describe('Test for App', (): void => {
    let store: MockStoreEnhanced<State>;

    const TIMES: number = 10;

    const InitState: State = {
        mode: Mode.NORMAL,
        contents: getTodoList(TIMES),
        current: 0,
    };

    beforeEach((): void => void (store = mockStore(InitState)));

    test('It is called UP and DOWN action.', (): void => {
        store.dispatch(up());
        store.dispatch(down());
        store.dispatch(gotoTop());
        store.dispatch(gotoBottom());
        expect(store.getActions()).toEqual([
            {kind: Kind.MOVE, type: UP},
            {kind: Kind.MOVE, type: DOWN},
            {kind: Kind.MOVE, type: TOP},
            {kind: Kind.MOVE, type: BOTTOM},
        ]);
    });
});
