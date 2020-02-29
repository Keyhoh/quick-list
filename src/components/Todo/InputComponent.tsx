import React from "react";
import {store} from "../../app";
import {updateTodo} from "../../app/Operation/Manufacture";

interface Props {
    value: string,
}

export default class InputComponent extends React.Component <Props> {
    private input: HTMLInputElement | null = null;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        this.input?.focus();
        this.input?.select();
    }

    componentWillUnmount(): void {
        this.input?.value && store.dispatch(updateTodo(this.input.value));
    }

    render(): React.ReactElement {
        return <input
            ref={(input: HTMLInputElement): void => void (this.input = input)}
            defaultValue={this.props.value}
            maxLength={32}
        />;
    }
}
