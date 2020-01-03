import Todo from "./Todo";
import UUID from 'uuid-random';

test('The value type of todo-id is UUID.', () => {
    const todo = new Todo();
    expect(UUID.test(todo.id.value)).toBeTruthy();
});
