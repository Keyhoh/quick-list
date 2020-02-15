import Cursor from "./index";
import Todo from "../Todo";
import {NoSuchContentsError} from "../Error";

describe('Test for focus', (): void => {
    const getTodoArray: Function = (length: number): Todo[] => {
        return Array.from({length: Math.round(length)}, (_, i: number): Todo => new Todo(`Todo-${i}`));
    };

    test('The current-todo is the first todo in todo-list.', (): void => {
        const LIST_OF_TODO: Todo[] = getTodoArray(1);
        const todoList: Cursor<Todo> = new Cursor<Todo>(LIST_OF_TODO);
        expect(todoList.current).toBe(LIST_OF_TODO[0]);
    });

    test('It is able to get all list.', (): void => {
        const LIST_OF_TODO: Todo[] = getTodoArray(10);
        expect(new Cursor<Todo>(LIST_OF_TODO).all).toEqual(LIST_OF_TODO);
    });

    test('Throw error if todo-list-contents is empty.', (): void => {
        const todoList: Cursor<Todo> = new Cursor<Todo>([]);
        expect((): void => void todoList.current).toThrow(NoSuchContentsError);
    });

    test('It is able to get the next todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoArray(LENGTH);
        const todoList: Cursor<Todo> = new Cursor<Todo>(LIST_OF_TODO);
        for (let i = 0; i < LENGTH - 1; i++) {
            expect(todoList.current).toBe(LIST_OF_TODO[i]);
            expect(todoList.next()).toBeUndefined();
            expect(todoList.current).toBe(LIST_OF_TODO[i + 1]);
        }
    });

    test('Throw error if there is no next todo.', (): void => {
        const todo: Todo = new Todo('Todo Name');
        const todoList: Cursor<Todo> = new Cursor<Todo>([todo]);
        expect((): void => void todoList.next()).toThrow(NoSuchContentsError);
        expect((): void => void todoList.current).not.toThrow();
        expect(todoList.current).toBe(todo);
    });

    test('It is able to get the previous todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoArray(LENGTH);
        const todoList: Cursor<Todo> = new Cursor<Todo>(LIST_OF_TODO);
        for (let i = 0; i < LENGTH - 1; i++) {
            todoList.next();
        }
        for (let i = LENGTH - 1; i > 0; i--) {
            expect(todoList.current).toBe(LIST_OF_TODO[i]);
            expect(todoList.prev()).toBeUndefined();
            expect(todoList.current).toBe(LIST_OF_TODO[i - 1]);
        }
    });

    describe('Throw error if there is no previous todo.', (): void => {
        test('Because there is no todo.', (): void => {
            expect((): void => void new Cursor<Todo>([]).prev()).toThrow(NoSuchContentsError);
        });

        test('Because current is the first todo.', (): void => {
            expect((): void => void new Cursor<Todo>([new Todo('Todo Name')]).prev()).toThrow(NoSuchContentsError);
        });
    });
});
