import TodoList from "./TodoList";
import Todo from "./Todo";
import NoSuchTodoError from "./Error/NoSuchTodoError";


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

describe('Test for focus', (): void => {
    test('The current-todo is the first todo in todo-list.', (): void => {
        const LIST_OF_TODO: Todo[] = Array.from({length: 10}, (_, i: number): Todo => new Todo(`Todo-${i}`));
        const todoList = new TodoList(LIST_OF_TODO);
        expect(todoList.contents.length > 0).toBe(true);
        expect(todoList.current).toBe(LIST_OF_TODO[0]);
    });

    test('The current-todo is nothing if todo-list-contents is empty.', (): void => {
        const todoList = new TodoList([]);
        expect(todoList.contents.length).toBe(0);
        expect((): void => void todoList.current).toThrow(NoSuchTodoError);
    });
});
