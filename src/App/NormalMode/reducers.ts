import {ADD_TODO, REMOVE_TODO, TodoActionTypes} from "./types";
import Todo from "../../operations/Todo";

export interface State {
    list: Todo[],
}

let initState: State = {list: []};

export const Reducer =  (state: State = initState, action: TodoActionTypes): State => {
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
