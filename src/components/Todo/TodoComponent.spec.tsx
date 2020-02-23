import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import {TodoComponent} from "./TodoComponent";
import {Todo} from "../../contents";
import Mode from "../../mode";

describe('Test for todo-component', (): void => {
    let container: HTMLElement;

    const render = (name: string, mode: Mode, isFocused: boolean): void => {
        const TODO: Todo = new Todo(name);
        act((): void =>
            void ReactDOM.render(<TodoComponent mode={mode} todo={TODO} isFocused={isFocused} />, container)
        );
    };

    beforeEach((): void => {
        container = document.createElement('div');
    });

    test('Todo-component has todo-name.', (): void => {
        const TODO_NAME = 'Todo Name';
        render(TODO_NAME, Mode.NORMAL, true);
        expect(container.textContent).toBe(TODO_NAME);
    });

    test('Todo-component has only one p-tag if normal mode.', (): void => {
        render('Todo Name', Mode.NORMAL, true);
        expect(container.childElementCount).toBe(1);
        expect(container.getElementsByTagName('p').length).toBe(1);

        render('Todo Name', Mode.NORMAL, false);
        expect(container.childElementCount).toBe(1);
        expect(container.getElementsByTagName('p').length).toBe(1);
    });

    test('Unfocused todo-component has only one p-tag if normal mode.', (): void => {
        render('Todo Name', Mode.INSERT, false);
        expect(container.childElementCount).toBe(1);
        expect(container.getElementsByTagName('p').length).toBe(1);
    });

    test('Focused todo-component has only one input-tag if inert mode.', (): void => {
        render('Todo Name', Mode.INSERT, true);
        expect(container.childElementCount).toBe(1);
        expect(container.getElementsByTagName('input').length).toBe(1);
    });
});
