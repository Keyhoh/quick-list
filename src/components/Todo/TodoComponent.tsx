import React from 'react';
import Todo from "../../operations/Todo";

export interface Props {
    todo: Todo;
}

export default class TodoComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement {
        return <div>{this.props.todo.name}</div>;
    }
}
