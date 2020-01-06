import TodoList from "./TodoList";
import UUID from "uuid-random";

describe('Test for todo-list-id', (): void => {
    test('The value type of todo-list-id is UUID.', (): void => {
        const todoList = new TodoList();
        expect(UUID.test(todoList.id)).toBe(true);
    });
});
