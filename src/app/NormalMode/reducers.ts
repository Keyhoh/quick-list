import {ADD_TODO, REMOVE_TODO, TodoActionTypes} from "./types";
import {Todo} from "../../contents";

export interface State {
    list: Todo[],
}

const TODO_LIST: Todo[] = Array.from({length: 10}, (_, i: number) => new Todo(`Todo-${i}`));
let initState: State = {list: TODO_LIST};

export const Reducer = (state: State = initState, action: TodoActionTypes): State => {
    switch (action.type) {
        case ADD_TODO:
            return {
                list: [...state.list, new Todo(action.payload)]
            };
        case
        REMOVE_TODO:
            return initState;
    }
    return initState;
};
