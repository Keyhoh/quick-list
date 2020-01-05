import Todo from "./Todo";
import UUID from 'uuid-random';
import TooLongNameError from "./Error/TooLongNameError";
import EmptyNameError from "./Error/EmptyNameError";

describe('Test for todo-id', (): void => {
    test('The value type of todo-id is UUID.', (): void => {
        const todo = new Todo('Todo Name');
        expect(UUID.test(todo.id)).toBeTruthy();
    });
});

describe('Test for todo-name', (): void => {
    test('It is able to give todo a name.', (): void => {
        const TODO_NAME = 'Todo Name';
        expect((): Todo => new Todo(TODO_NAME)).not.toThrow();
        expect(new Todo(TODO_NAME).name).toEqual(TODO_NAME);
    });

    test('The max length of todo-name is 32.', (): void => {
        const JUST_LENGTH_NAME = 'この文字列　は３２文字　丁度で構成　されていま　す。文字数　稼ぎ';
        expect(JUST_LENGTH_NAME).toHaveLength(32);
        expect((): Todo => new Todo(JUST_LENGTH_NAME)).not.toThrow();
        const OVER_LENGTH_NAME = 'この文字列　は３３文字　丁度で構成　されていま　す。文字数　稼ぎ。';
        expect(OVER_LENGTH_NAME).toHaveLength(33);
        expect((): Todo => new Todo(OVER_LENGTH_NAME)).toThrow(TooLongNameError);
    });

    test('The minimum length of todo-name is 1.', (): void => {
        const EMPTY_NAME = '';
        expect(EMPTY_NAME).toHaveLength(0);
        expect((): Todo => new Todo(EMPTY_NAME)).toThrow(EmptyNameError);
        const MINIMUM_NAME = 'あ';
        expect(MINIMUM_NAME).toHaveLength(1);
        expect((): Todo => new Todo(MINIMUM_NAME)).not.toThrow();
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
