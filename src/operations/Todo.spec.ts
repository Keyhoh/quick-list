import Todo from "./Todo";
import UUID from 'uuid-random';
import TooLongNameError from "./Error/TooLongNameError";
import EmptyNameError from "./Error/EmptyNameError";

test('The value type of todo-id is UUID.', () => {
    const todo = new Todo('Todo name');
    expect(UUID.test(todo.id.value)).toBeTruthy();
});

test('It is able to give todo a name.', () => {
    const TODO_NAME = 'Todo Name';
    expect(() => new Todo(TODO_NAME)).not.toThrow();
    expect(new Todo(TODO_NAME).name.value).toEqual(TODO_NAME);
});

test('The max length of todo-name is 32.', () => {
    const JUST_LENGTH_NAME = 'この文字列　は３２文字　丁度で構成　されていま　す。文字数　稼ぎ';
    expect(JUST_LENGTH_NAME).toHaveLength(32);
    expect(() => new Todo(JUST_LENGTH_NAME)).not.toThrow();
    const OVER_LENGTH_NAME = 'この文字列　は３３文字　丁度で構成　されていま　す。文字数　稼ぎ。';
    expect(OVER_LENGTH_NAME).toHaveLength(33);
    expect(() => new Todo(OVER_LENGTH_NAME)).toThrow(TooLongNameError);
});

test('The minimum length of todo-name is 1.', () => {
    const EMPTY_NAME = '';
    expect(EMPTY_NAME).toHaveLength(0);
    expect(() => new Todo(EMPTY_NAME)).toThrow(EmptyNameError);
    const MINIMUM_NAME = 'あ';
    expect(MINIMUM_NAME).toHaveLength(1);
    expect(() => new Todo(MINIMUM_NAME)).not.toThrow();
});
