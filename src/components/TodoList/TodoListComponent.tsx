import React from 'react';
import UUID from 'uuid-random';

import {Todo} from "../../contents";
import {TodoComponent} from "../Todo";
import Mode from "../../mode";

export interface Props {
    mode: Mode,
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
                mode={this.props.mode}
                key={UUID()}
                todo={todo}
                isFocused={i === this.props.current}
            />);
    }

    render(): React.ReactElement {
        return <ul className={'todo-list'}>
            {this.mountTodoComponent()}
        </ul>
    }
}
