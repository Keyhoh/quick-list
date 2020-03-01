import Cursor from "./index";
import Todo from "../Todo";
import {NoSuchContentsError} from "../Error";
import {CursorJSON} from "./Cursor";
import {getTodoList} from "../../__tests__/util";

describe('Test for focus', (): void => {
    test('The current-todo is the first todo in todo-list.', (): void => {
        const LIST_OF_TODO: Todo[] = getTodoList(1);
        const todoList: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);
        expect(todoList.current).toBe(0);
    });

    test('It is able to get all list.', (): void => {
        const LIST_OF_TODO: Todo[] = getTodoList(10);
        expect(Cursor.of<Todo>(LIST_OF_TODO).contents).toEqual(LIST_OF_TODO);
    });

    test('Throw error if todo-list-contents is empty.', (): void => {
        const todoList: Cursor<Todo> = Cursor.of<Todo>([]);
        expect((): void => void todoList.current).toThrow(NoSuchContentsError);
    });

    test('It is able to get the next todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoList(LENGTH);
        const todoList: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);
        for (let i = 0; i < LENGTH - 1; i++) {
            expect(todoList.current).toBe(i);
            expect(todoList.next()).toBeUndefined();
            expect(todoList.current).toBe(i + 1);
        }
    });

    test('Throw error if there is no next todo.', (): void => {
        const todo: Todo = new Todo('Todo Name');
        const todoList: Cursor<Todo> = Cursor.of<Todo>([todo]);
        expect((): void => void todoList.next()).toThrow(NoSuchContentsError);
        expect((): void => void todoList.current).not.toThrow();
        expect(todoList.current).toBe(0);
    });

    test('It is able to get the previous todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoList(LENGTH);
        const todoList: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);
        for (let i = 0; i < LENGTH - 1; i++) {
            todoList.next();
        }
        for (let i = LENGTH - 1; i > 0; i--) {
            expect(todoList.current).toBe(i);
            expect(todoList.prev()).toBeUndefined();
            expect(todoList.current).toBe(i - 1);
        }
    });

    describe('Throw error if there is no previous todo.', (): void => {
        test('Because there is no todo.', (): void => {
            expect((): void => void Cursor.of<Todo>([]).prev()).toThrow(NoSuchContentsError);
        });

        test('Because current is the first todo.', (): void => {
            expect((): void => void Cursor.of<Todo>([new Todo('Todo Name')]).prev()).toThrow(NoSuchContentsError);
        });
    });

    describe('It is able to go to designated position.', (): void => {
        test('Goto positive index.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO: Todo[] = getTodoList(LENGTH);
            for (let i = 0; i < LENGTH - 1; i++) {
                const todoList: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);
                expect(todoList.go(i)).toBeUndefined();
                expect(todoList.current).toBe(i);
            }
        });

        test('Goto negative index.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO: Todo[] = getTodoList(LENGTH);
            for (let i = 1; i <= LENGTH; i++) {
                const todoList: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);
                expect(todoList.go(-i)).toBeUndefined();
                expect(todoList.current).toBe(LENGTH - i);
            }
        });

        test('Throw NoSuchException by designating out of bounds.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO: Todo[] = getTodoList(LENGTH);
            const todoList: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);
            expect((): void => todoList.go(LENGTH)).toThrow(NoSuchContentsError);
            expect((): void => todoList.go(-LENGTH - 1)).toThrow(NoSuchContentsError);
        });
    });

    describe('From-To JSON test', (): void => {
        test('Cursor is able to convert to JSON.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO = getTodoList(LENGTH);
            let cursor: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);

            for (let i = 0; i < LENGTH; i++) {
                const CURSOR_JSON: CursorJSON<Todo> = cursor.toJSON();
                expect(CURSOR_JSON.current).toEqual(cursor.current);
                expect(CURSOR_JSON.contents).toEqual(cursor.contents);
                if (i < LENGTH - 1) cursor.next();
            }
        });

        test('It is able to get cursor from JSON.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO = getTodoList(LENGTH);

            for (let i = 0; i < LENGTH; i++) {
                let cursor: Cursor<Todo> = Cursor.fromJSON<Todo>({contents: LIST_OF_TODO, current: i});
                expect(cursor.contents).toEqual(LIST_OF_TODO);
                expect(cursor.current).toEqual(i);
            }
        });

        test('Throw error if current is out of list.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO = getTodoList(LENGTH);
            expect((): void => void Cursor.fromJSON<Todo>({
                contents: LIST_OF_TODO,
                current: NaN,
            })).toThrow(NoSuchContentsError);
        });
    });
});
