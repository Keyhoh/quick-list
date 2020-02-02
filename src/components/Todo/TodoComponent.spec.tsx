import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import {TodoComponent} from "./TodoComponent";
import {Todo} from "../../contents";

describe('Test for todo-component', (): void => {
    let container: HTMLElement;

    beforeEach((): void => {
        container = document.createElement('div');
    });

    test('Todo-component has todo-name.', (): void => {
        const TODO_NAME = 'Todo Name';
        const TODO: Todo = new Todo(TODO_NAME);
        act((): void => void ReactDOM.render(<TodoComponent todo={TODO} />, container));
        expect(container.textContent).toBe(TODO_NAME);
    });
});
