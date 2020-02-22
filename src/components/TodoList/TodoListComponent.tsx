import React from 'react';
import UUID from 'uuid-random';

import {Todo} from "../../contents";
import {TodoComponent} from "../Todo";

export interface Props {
    contents: Todo[],
    current: number,
}

export class TodoListComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    mountTodoComponent(): JSX.Element[] {
        return this.props.contents.map((todo: Todo, i: number) =>
            <TodoComponent
                key={UUID()}
                todo={todo}
                isFocused={i === this.props.current}
            />);
    }

    render(): React.ReactElement {
        return <div>
            {this.mountTodoComponent()}
        </div>
    }
}
