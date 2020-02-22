import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import {TodoComponent} from "./TodoComponent";
import {Todo} from "../../contents";
import Mode from "../../mode";

describe('Test for todo-component', (): void => {
    let container: HTMLElement;

    beforeEach((): void => {
        container = document.createElement('div');
    });

    test('Todo-component has todo-name.', (): void => {
        const TODO_NAME = 'Todo Name';
        const TODO: Todo = new Todo(TODO_NAME);
        act((): void =>
            void ReactDOM.render(<TodoComponent mode={Mode.NORMAL} todo={TODO} isFocused={true} />, container)
        );
        expect(container.textContent).toBe(TODO_NAME);
    });

    test('Todo-component has todo-name.', (): void => {
        const TODO_NAME = 'Todo Name';
        const TODO: Todo = new Todo(TODO_NAME);
        act(
            (): void =>
                void ReactDOM.render(<TodoComponent mode={Mode.INSERT} todo={TODO} isFocused={true} />, container)
        );
        expect(container.getElementsByTagName('input').length).not.toBe(0);
    });
});
