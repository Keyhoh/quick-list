import Todo from "./Todo";
import UUID from 'uuid-random';
import TooLongNameError from "./Error/TooLongNameError";

test('The value type of todo-id is UUID.', () => {
    const todo = new Todo('Todo name');
    expect(UUID.test(todo.id.value)).toBeTruthy();
});

test('It is able to give todo a name.', () => {
    const TODO_NAME = 'Todo Name';
    expect(() => new Todo(TODO_NAME)).not.toThrow(Error);
    expect(new Todo(TODO_NAME).name.value).toEqual(TODO_NAME);
});

// Googleの検索結果の表示が30字前後なので、これに合わせる。
test('The max length of todo-name is 32.', () => {
    const JUST_LENGTH_NAME = 'この文字列　は３２文字　丁度で構成　されていま　す。文字数　稼ぎ';
    expect(JUST_LENGTH_NAME).toHaveLength(32);
    expect(() => new Todo(JUST_LENGTH_NAME)).not.toThrow(Error);
    const OVER_LENGTH_NAME = 'この文字列　は３３文字　丁度で構成　されていま　す。文字数　稼ぎ。';
    expect(OVER_LENGTH_NAME).toHaveLength(33);
    expect(() => new Todo(OVER_LENGTH_NAME)).toThrow(TooLongNameError);
});
