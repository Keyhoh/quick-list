import React from 'react';

import {Todo} from "../../contents";
import Mode from "../../mode";
import ParagraphComponent from "./ParagraphComponent";
import InputComponent from "./InputComponent";

export interface Props {
    mode: Mode,
    todo: Todo,
    isFocused: boolean,
}

export class TodoComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    private get className(): string {
        if (this.props.isFocused) return "todo focused";
        return "todo";
    }

    private get row(): React.ReactElement {
        if (this.props.isFocused && this.props.mode === Mode.INSERT) {
            return <InputComponent value={this.props.todo.name} />
        } else {
            return <ParagraphComponent value={this.props.todo.name} />
        }
    }

    render(): React.ReactElement {
        return <li className={this.className}>{this.row}</li>
    }
}
