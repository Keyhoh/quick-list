import Mode from "../../../mode";
import {ADD_INSERT, addInsert, CHANGE_MODE, changeMode, Direction} from "./index";

import configureStore, {MockStoreCreator, MockStoreEnhanced} from 'redux-mock-store';
import {InitState, State} from "../../State";
import {Kind} from "../../Action";

const mockStore: MockStoreCreator<State> = configureStore<State>([]);

describe('Change mode test', (): void => {
    let store: MockStoreEnhanced<State>;

    beforeEach((): void => void (store = mockStore(InitState)));

    test('It is called CHANGE_MODE action.', (): void => {
        store.dispatch(changeMode(Mode.INSERT));
        store.dispatch(changeMode(Mode.NORMAL));
        expect(store.getActions()).toEqual([
            {kind: Kind.MODE, type: CHANGE_MODE, payload: Mode.INSERT},
            {kind: Kind.MODE, type: CHANGE_MODE, payload: Mode.NORMAL}
        ]);
    });

    test('It is called ADD_INSERT action.', (): void => {
        store.dispatch(addInsert(Direction.Below));
        store.dispatch(addInsert(Direction.Above));
        expect(store.getActions()).toEqual([
            {kind: Kind.MODE, type: ADD_INSERT, payload: Direction.Below},
            {kind: Kind.MODE, type: ADD_INSERT, payload: Direction.Above}
        ]);
    });
});
