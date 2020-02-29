import {ADD_TODO, addTodo, REMOVE_ALL, removeAll, UPDATE_TODO, updateTodo} from "./index";
import {InitState, State} from "../../State";

import configureStore, {MockStoreCreator, MockStoreEnhanced} from 'redux-mock-store';
import {Kind} from "../../Action";

const mockStore: MockStoreCreator<State> = configureStore<State>([]);

describe('Test for App', (): void => {
    let store: MockStoreEnhanced<State>;

    beforeEach((): void => void (store = mockStore(InitState)));

    test('It is called ADD_TODO action.', (): void => {
        const NAME: string = 'add todo action.';
        store.dispatch(addTodo(NAME));
        expect(store.getActions()).toEqual([{kind: Kind.MANUFACTURE, type: ADD_TODO, payload: NAME}]);
    });

    test('It is called REMOVE_TODO action.', (): void => {
        store.dispatch(removeAll());
        expect(store.getActions()).toEqual([{kind: Kind.MANUFACTURE, type: REMOVE_ALL}]);
    });

    test('It is called UPDATE_TODO action.', (): void => {
        const NAME: string = 'update todo action.';
        store.dispatch(updateTodo(NAME));
        expect(store.getActions()).toEqual([{kind: Kind.MANUFACTURE, type: UPDATE_TODO, payload: NAME}]);
    });
});
