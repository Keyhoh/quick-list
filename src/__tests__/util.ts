import {Todo} from "../contents";

test.skip('This is utilities.', () => 1);

export const getTodoList: Function = (length: number): Todo[] => {
    return Array.from({length: Math.round(length)}, (_, i: number): Todo => new Todo(`Todo-${i}`));
};
