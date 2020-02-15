import React from 'react';
import UUID from 'uuid-random';

import {Todo} from "../../contents";
import {TodoComponent} from "../Todo";
import Cursor from "../../contents/Cursor/Cursor";

export interface Props {
    list: Todo[],
    cursor: Cursor,
}

export class TodoListComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    mountTodoComponent(): JSX.Element[] {
        return this.props.list.map((todo: Todo, i: number) =>
            <TodoComponent
                key={UUID()}
                todo={todo}
                isFocused={this.props.cursor.current == i}
            />);
    }

    render(): React.ReactElement {
        return <div>
            {this.mountTodoComponent()}
        </div>
    }
}
