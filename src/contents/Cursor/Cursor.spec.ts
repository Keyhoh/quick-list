import Cursor from "./index";
import Todo from "../Todo";
import {NoSuchContentsError} from "../Error";

describe('Test for focus', (): void => {
    const getTodoArray: Function = (length: number): Todo[] => {
        return Array.from({length: Math.round(length)}, (_, i: number): Todo => new Todo(`Todo-${i}`));
    };

    test('The current-todo is the first todo in todo-list.', (): void => {
        const LIST_OF_TODO: Todo[] = getTodoArray(1);
        const todoList: Cursor = new Cursor(LIST_OF_TODO);
        expect(todoList.current).toBe(0);
    });

    test('Throw error if todo-list-contents is empty.', (): void => {
        const todoList: Cursor = new Cursor([]);
        expect((): void => void todoList.current).toThrow(NoSuchContentsError);
    });

    test('It is able to get the next todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoArray(LENGTH);
        const todoList: Cursor = new Cursor(LIST_OF_TODO);
        for (let i = 0; i < LENGTH - 1; i++) {
            expect(todoList.current).toBe(i);
            expect(todoList.go()).toBeUndefined();
            expect(todoList.current).toBe(i + 1);
        }
    });

    test('Throw error if there is no next todo.', (): void => {
        const todo: Todo = new Todo('Todo Name');
        const todoList: Cursor = new Cursor([todo]);
        expect((): void => void todoList.go()).toThrow(NoSuchContentsError);
        expect((): void => void todoList.current).not.toThrow();
        expect(todoList.current).toBe(0);
    });

    test('It is able to get the previous todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoArray(LENGTH);
        const todoList: Cursor = new Cursor(LIST_OF_TODO);
        for (let i = 0; i < LENGTH - 1; i++) {
            todoList.go();
        }
        for (let i = LENGTH - 1; i > 0; i--) {
            expect(todoList.current).toBe(i);
            expect(todoList.back()).toBeUndefined();
            expect(todoList.current).toBe(i - 1);
        }
    });

    describe('Throw error if there is no previous todo.', (): void => {
        test('Because there is no todo.', (): void => {
            expect((): void => void new Cursor([]).back()).toThrow(NoSuchContentsError);
        });

        test('Because current is the first todo.', (): void => {
            expect((): void => void new Cursor([new Todo('Todo Name')]).back()).toThrow(NoSuchContentsError);
        });
    });
});
