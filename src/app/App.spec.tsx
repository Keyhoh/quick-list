import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {act} from 'react-dom/test-utils';
import App from "./App";
import store from "./Store";
import {addTodo, removeTodo} from "./NormalMode/actions";

let container: HTMLElement = document.createElement('div');
describe('Test for App', (): void => {
    test('The Initial display is none.', (): void => {
        act((): void => void ReactDOM.render(<Provider store={store}><App /></Provider>, container));
        expect(container.textContent).toBe("");
    });

    test('App has a character sent from keyboard.', (): void => {
        act((): void => void ReactDOM.render(<Provider store={store}><App /></Provider>, container));
        store.dispatch(addTodo("Hello, world!"));
        expect(container.textContent).toBe("Hello, world!");
    });

    test('App can remove all character.', (): void => {
        store.dispatch(addTodo("Hello, world!"));
        store.dispatch(removeTodo());
        expect(container.textContent).toBe("");
    });
});
