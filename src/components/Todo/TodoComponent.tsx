import React from 'react';

import "./style.scss";

import {Todo} from "../../contents";
import Mode from "../../mode";

export interface Props {
    mode: Mode,
    todo: Todo,
    isFocused: boolean,
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
        if (this.props.isFocused && this.props.mode === Mode.INSERT) {
            return <input className={getClassName(this.props)} />;
        }
        return <div className={getClassName(this.props)}>{this.props.todo.name}</div>;
    }
}
