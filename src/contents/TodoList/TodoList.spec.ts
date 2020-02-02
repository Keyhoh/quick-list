import TodoList from "./index";
import Todo from "../Todo";
import {NoSuchContentsError} from "../Error";

describe('Test for todo-list-contents', (): void => {
    test('It is able to set todo-list the list of todo.', (): void => {
        const LIST_OF_TODO: Todo[] = Array.from({length: 10}, (_, i: number): Todo => new Todo(`Todo-${i}`));
        expect((): void => void new TodoList(LIST_OF_TODO)).not.toThrow();
        expect(new TodoList(LIST_OF_TODO).contents).toEqual(LIST_OF_TODO);
    });

    test('It is able to set todo-list empty-list.', (): void => {
        const EMPTY_LIST: Todo[] = [];
        expect((): void => void new TodoList(EMPTY_LIST)).not.toThrow();
        expect(new TodoList([]).contents).toEqual([]);
    });
});

describe('Test for focus', (): void => {
    const getTodoArray: Function = (length: number): Todo[] => {
        return Array.from({length: Math.round(length)}, (_, i: number): Todo => new Todo(`Todo-${i}`));
    };

    test('The current-todo is the first todo in todo-list.', (): void => {
        const LIST_OF_TODO: Todo[] = getTodoArray(1);
        const todoList: TodoList = new TodoList(LIST_OF_TODO);
        expect(todoList.current).toBe(LIST_OF_TODO[0]);
    });

    test('Throw error if todo-list-contents is empty.', (): void => {
        const todoList: TodoList = new TodoList([]);
        expect((): void => void todoList.current).toThrow(NoSuchContentsError);
    });

    test('It is able to get the next todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoArray(LENGTH);
        const todoList: TodoList = new TodoList(LIST_OF_TODO);
        for (let i = 0; i < LENGTH - 1; i++) {
            expect(todoList.current).toBe(LIST_OF_TODO[i]);
            expect(todoList.next()).toBe(LIST_OF_TODO[i + 1]);
            expect(todoList.current).toBe(LIST_OF_TODO[i + 1]);
        }
    });

    test('Throw error if there is no next todo.', (): void => {
        const todo: Todo = new Todo('Todo Name');
        const todoList: TodoList = new TodoList([todo]);
        expect((): void => void todoList.next()).toThrow(NoSuchContentsError);
        expect((): void => void todoList.current).not.toThrow();
        expect(todoList.current).toBe(todo);
    });

    test('It is able to get the previous todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoArray(LENGTH);
        const todoList: TodoList = new TodoList(LIST_OF_TODO);
        for (let i = 0; i < LENGTH - 1; i++) {
            todoList.next();
        }
        for (let i = LENGTH - 1; i > 0; i--) {
            expect(todoList.current).toBe(LIST_OF_TODO[i]);
            expect(todoList.previous()).toBe(LIST_OF_TODO[i - 1]);
            expect(todoList.current).toBe(LIST_OF_TODO[i - 1]);
        }
    });

    describe('Throw error if there is no previous todo.', (): void => {
        test('Because there is no todo.', (): void => {
            expect((): void => void new TodoList([]).previous()).toThrow(NoSuchContentsError);
        });

        test('Because current is the first todo.', (): void => {
            expect((): void => void new TodoList([new Todo('Todo Name')]).previous()).toThrow(NoSuchContentsError);
        });
    });
});
