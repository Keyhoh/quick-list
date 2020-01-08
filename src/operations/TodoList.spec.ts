import TodoList from "./TodoList";
import Todo from "./Todo";

describe('Test for todo-list-contents', (): void => {
    test('It is able to set todo-list the list of todo.', (): void => {
        const LIST_OF_TODO: Todo[] = Array.from({length: 10}, (_, i: number): Todo => new Todo(`Todo-${i}`));
        expect((): void => void new TodoList(LIST_OF_TODO)).not.toThrow();
        expect(new TodoList(LIST_OF_TODO).contents).toEqual(LIST_OF_TODO);
    });

    test('It is able to set todo-list empty-list.', (): void => {
        const EMPTY_LIST: Todo[] = [];
        expect((): void => void new TodoList(EMPTY_LIST)).not.toThrow();
        expect(new TodoList([]).contents).toEqual([]);
    });
});