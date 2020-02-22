import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {act} from 'react-dom/test-utils';

import App from "./App";
import store from "./Store";
import {addTodo} from "./Operation";
import {down, up} from "./Move";

describe('Test for App', (): void => {
    let container: HTMLElement = document.createElement('div');

    const Times: number = 10;
    const add: Function = (times: number): void => {
        Array.from({length: times}).forEach((_, i: number): void => {
            store.dispatch(addTodo(`Todo-${i}`));
        });
    };

    const getTodoElement: Function = (position: number): Element => {
        return container.getElementsByClassName('todo')[position];
    };

    beforeAll((): void => {
        act((): void => void ReactDOM.render(<Provider store={Object.assign({}, store)}><App /></Provider>, container));
        add(Times);
    });

    test('Initial focus is the first if app has todo.', (): void => {
        expect(container.getElementsByClassName('todo').length).toEqual(Times);

        const FirstTodo: Element = getTodoElement(0);

        expect(FirstTodo).toBeTruthy();
        expect(container.getElementsByClassName('focused').length).toEqual(1);
        expect(container.getElementsByClassName('focused')[0]).toEqual(FirstTodo);
    });


    test('App can go down and up focus.', (): void => {
        expect(container.getElementsByClassName('todo').length).toEqual(Times);

        for (let i = 1; i < Times; i++) {
            store.dispatch(down());

            const TodoElement: Element = getTodoElement(i);
            expect(TodoElement).toBeTruthy();
            expect(container.getElementsByClassName('focused')[0]).toEqual(TodoElement);
        }

        for (let i = Times; i > 1; i--) {
            const TodoElement: Element = getTodoElement(i - 1);
            expect(TodoElement).toBeTruthy();
            expect(container.getElementsByClassName('focused')[0]).toEqual(TodoElement);

            store.dispatch(up());
        }
    });
});
