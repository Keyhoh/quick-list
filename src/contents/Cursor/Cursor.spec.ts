import Cursor from "./index";
import Todo from "../Todo";
import {NoSuchContentsError} from "../Error";
import {CursorJSON} from "./Cursor";

describe('Test for focus', (): void => {
    const getTodoArray: Function = (length: number): Todo[] => {
        return Array.from({length: Math.round(length)}, (_, i: number): Todo => new Todo(`Todo-${i}`));
    };

    test('The current-todo is the first todo in todo-list.', (): void => {
        const LIST_OF_TODO: Todo[] = getTodoArray(1);
        const todoList: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);
        expect(todoList.current).toBe(0);
    });

    test('It is able to get all list.', (): void => {
        const LIST_OF_TODO: Todo[] = getTodoArray(10);
        expect(Cursor.of<Todo>(LIST_OF_TODO).all).toEqual(LIST_OF_TODO);
    });

    test('Throw error if todo-list-contents is empty.', (): void => {
        const todoList: Cursor<Todo> = Cursor.of<Todo>([]);
        expect((): void => void todoList.current).toThrow(NoSuchContentsError);
    });

    test('It is able to get the next todo.', (): void => {
        const LENGTH: number = 10;
        const LIST_OF_TODO: Todo[] = getTodoArray(LENGTH);
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
        const LIST_OF_TODO: Todo[] = getTodoArray(LENGTH);
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

    describe('From-To JSON test', (): void => {
        test('Cursor is able to convert to JSON.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO = getTodoArray(LENGTH);
            let cursor: Cursor<Todo> = Cursor.of<Todo>(LIST_OF_TODO);

            for (let i = 0; i < LENGTH; i++) {
                const CURSOR_JSON: CursorJSON<Todo> = cursor.toJSON();
                expect(CURSOR_JSON.current).toEqual(cursor.current);
                expect(CURSOR_JSON.list).toEqual(cursor.all);
                if (i < LENGTH - 1) cursor.next();
            }
        });

        test('It is able to get cursor from JSON.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO = getTodoArray(LENGTH);

            for (let i = 0; i < LENGTH; i++) {
                let cursor: Cursor<Todo> = Cursor.fromJSON<Todo>({list: LIST_OF_TODO, current: i});
                expect(cursor.all).toEqual(LIST_OF_TODO);
                expect(cursor.current).toEqual(i);
            }
        });

        test('Throw error if current is out of list.', (): void => {
            const LENGTH: number = 10;
            const LIST_OF_TODO = getTodoArray(LENGTH);
            expect((): void => void Cursor.fromJSON<Todo>({
                list: LIST_OF_TODO,
                current: NaN,
            })).toThrow(NoSuchContentsError);
        });
    });
});
