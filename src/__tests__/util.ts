import {Todo} from "../contents";

export const getTodoList: Function = (length: number): Todo[] => {
    return Array.from({length: Math.round(length)}, (_, i: number): Todo => new Todo(`Todo-${i}`));
};
