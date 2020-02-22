import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {act} from 'react-dom/test-utils';

import App from "./App";
import store from "./Store";
import {addTodo, removeTodo} from "./Operation";

describe('Test for App', (): void => {
    let container: HTMLElement = document.createElement('div');

    beforeEach((): void => {
        act((): void => void ReactDOM.render(<Provider store={store}><App /></Provider>, container));
    });

    test('The Initial display is none.', (): void => {
        expect(container.textContent).toBe("");
    });

    test('App has a character sent.', (): void => {
        store.dispatch(addTodo("Hello, world!"));
        expect(container.textContent).toBe("Hello, world!");
    });

    test('App can remove all character.', (): void => {
        store.dispatch(addTodo("Hello, world!"));
        store.dispatch(removeTodo());
        expect(container.textContent).toBe("");
    });
});
