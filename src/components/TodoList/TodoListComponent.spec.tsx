import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import TodoListComponent from "./TodoListComponent";
import TodoList from "../../operations/TodoList";
import Todo from "../../operations/Todo";

describe('Test for todo-list-component', (): void => {
    const getTodoList: Function = (length: number): TodoList => {
        const todoArray: Todo[] = Array.from({length: Math.round(length)}, (_, i: number): Todo => new Todo(`Todo-${i}`));
        return new TodoList(todoArray);
    };

    let container: HTMLElement;

    beforeEach((): void => {
        container = document.createElement('div');
    });

    test('Todo-list-component has todo-components corresponding to todo.', (): void => {
        const TODO_LIST: TodoList = getTodoList(10);
        act((): void => void ReactDOM.render(<TodoListComponent todoList={TODO_LIST} />, container));
        const TODO_LIST_COMPONENT: ChildNode | null = container.firstChild;

        if (TODO_LIST_COMPONENT === null) throw new Error('Test failed.');

        expect(TODO_LIST_COMPONENT.childNodes.length).toBe(TODO_LIST.contents.length);
        TODO_LIST_COMPONENT.childNodes.forEach((todoComponent: ChildNode, i: number) => {
            expect(todoComponent.textContent).toBe(TODO_LIST.contents[i].name);
        });
    });
});
