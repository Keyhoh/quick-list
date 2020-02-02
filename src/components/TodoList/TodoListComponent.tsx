import React from 'react';
import UUID from 'uuid-random';

import {TodoList, Todo} from "../../contents";
import {TodoComponent} from "../Todo";

export interface Props {
    todoList: TodoList;
}

export class TodoListComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    mountTodoComponent(): JSX.Element[] {
        return this.props.todoList.contents.map((todo: Todo, i: number) =>
            <TodoComponent
                key={UUID()}
                todo={todo}
                isFocused={!!i}
            />);
    }

    render(): React.ReactElement {
        return <div>
            {this.mountTodoComponent()}
        </div>
    }
}
