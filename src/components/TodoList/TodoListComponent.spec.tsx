import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import {TodoListComponent} from "./TodoListComponent";
import {Todo} from "../../contents";

describe('Test for todo-list-component', (): void => {
    const getTodoList: Function = (length: number): Todo[] => {
        return Array.from({length: Math.round(length)}, (_, i: number): Todo => new Todo(`Todo-${i}`));
    };

    let container: HTMLElement;

    beforeEach((): void => {
        container = document.createElement('div');
    });

    test('Todo-list-component has todo-components corresponding to todo.', (): void => {
        const list: Todo[] = getTodoList(10);
        act((): void => void ReactDOM.render(<TodoListComponent contents={list} current={0} />, container));
        const TODO_LIST_COMPONENT: ChildNode | null = container.firstChild;

        if (TODO_LIST_COMPONENT === null) throw new Error('Test failed.');

        expect(TODO_LIST_COMPONENT.childNodes.length).toBe(list.length);
        TODO_LIST_COMPONENT.childNodes.forEach((todoComponent: ChildNode, i: number) => {
            expect(todoComponent.textContent).toBe(list[i].name);
        });
    });
});
