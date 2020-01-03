import Todo from "./Todo";
import UUID from 'uuid-random';

test('The value type of todo-id is UUID.', () => {
    const todo = new Todo('Todo name');
    expect(UUID.test(todo.id.value)).toBeTruthy();
});

// Googleの検索結果の表示が30字前後なので、これに合わせる。
test('The max length of todo-value is 32.', ()=>{
    const todo = new Todo('この文字列　は３２文字　丁度で構成　されていま　す。文字数　稼ぎ');
    expect(todo.name.value).toHaveLength(32);
});
