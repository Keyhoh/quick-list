import React from 'react';
import UUID from 'uuid-random';

import {Todo} from "../../contents";
import {TodoComponent} from "../Todo";
import Cursor from "../../contents/Cursor/Cursor";

export interface Props {
    cursor: Cursor<Todo>,
}

export class TodoListComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    mountTodoComponent(): JSX.Element[] {
        return this.props.cursor.all.map((todo: Todo) =>
            <TodoComponent
                key={UUID()}
                todo={todo}
                isFocused={todo === this.props.cursor.current}
            />);
    }

    render(): React.ReactElement {
        return <div>
            {this.mountTodoComponent()}
        </div>
    }
}
