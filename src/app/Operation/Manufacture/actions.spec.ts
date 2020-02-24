import {ADD_TODO, addTodo, REMOVE_TODO, removeTodo} from "./index";
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
        store.dispatch(removeTodo());
        expect(store.getActions()).toEqual([{kind: Kind.MANUFACTURE, type: REMOVE_TODO}]);
    });
});
