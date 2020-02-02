import React from 'react';

import "./style.scss";

import {Todo} from "../../contents";

export interface Props {
    todo: Todo;
    isFocused: boolean;
}

const getClassName = (props: Props): string => {
    if (props.isFocused) return "todo focused";
    return "todo";
};

export class TodoComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement {
        return <div className={getClassName(this.props)}>{this.props.todo.name}</div>;
    }
}
