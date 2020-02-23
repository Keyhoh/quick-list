import React from "react";

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
    }

    render(): React.ReactElement {
        return <input
            ref={(input: HTMLInputElement): void => void (this.input = input)}
            defaultValue={this.props.value}
        />;
    }
}
