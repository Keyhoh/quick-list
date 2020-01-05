import Todo from "./Todo";
import UUID from 'uuid-random';
import TooLongNameError from "./Error/TooLongNameError";
import EmptyNameError from "./Error/EmptyNameError";

describe('Test for todo-id', (): void => {
    test('The value type of todo-id is UUID.', (): void => {
        const todo = new Todo('Todo Name');
        expect(UUID.test(todo.id)).toBe(true);
    });
});

describe('Test for todo-name', (): void => {
    test('It is able to give todo a name.', (): void => {
        const TODO_NAME = 'Todo Name';
        expect((): void => void new Todo(TODO_NAME)).not.toThrow();
        expect(new Todo(TODO_NAME).name).toEqual(TODO_NAME);
    });

    test('The max length of todo-name is 32.', (): void => {
        const JUST_LENGTH_NAME = 'この文字列　は３２文字　丁度で構成　されていま　す。文字数　稼ぎ';
        expect(JUST_LENGTH_NAME).toHaveLength(32);
        expect((): void => void new Todo(JUST_LENGTH_NAME)).not.toThrow();
        const OVER_LENGTH_NAME = 'この文字列　は３３文字　丁度で構成　されていま　す。文字数　稼ぎ。';
        expect(OVER_LENGTH_NAME).toHaveLength(33);
        expect((): void => void new Todo(OVER_LENGTH_NAME)).toThrow(TooLongNameError);
    });

    test('The minimum length of todo-name is 1.', (): void => {
        const EMPTY_NAME = '';
        expect(EMPTY_NAME).toHaveLength(0);
        expect((): void => void new Todo(EMPTY_NAME)).toThrow(EmptyNameError);
        const MINIMUM_NAME = 'あ';
        expect(MINIMUM_NAME).toHaveLength(1);
        expect((): void => void new Todo(MINIMUM_NAME)).not.toThrow();
    });

    test('It is able to update todo-name.', (): void => {
        const INITIAL_NAME = 'Initial Name';
        const todo = new Todo(INITIAL_NAME);
        expect(todo.name).toBe(INITIAL_NAME);
        const NEXT_NAME = 'Next Name';
        todo.name = NEXT_NAME;
        expect(todo.name).toBe(NEXT_NAME);
    });
});

describe('Test for todo-check', (): void => {
    let todo: Todo;
    beforeEach((): void => {
        todo = new Todo('Todo Name');
    });

    test('Todo is not checked at created.', (): void => {
        expect(todo.isChecked).toBe(false);
    });

    test('It is able to check todo.', (): void => {
        expect((): void => todo.check()).not.toThrow();
        expect(todo.isChecked).toBe(true);
    });

    test('It is able to uncheck todo.', (): void => {
        todo.check();
        expect(todo.isChecked).toBe(true);
        expect((): void => todo.uncheck()).not.toThrow();
        expect(todo.isChecked).toBe(false);
    });
});
