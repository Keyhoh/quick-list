import React from 'react';

import {Todo} from "../../contents";

export interface Props {
    todo: Todo;
}

export class TodoComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement {
        return <div>{this.props.todo.name}</div>;
    }
}
