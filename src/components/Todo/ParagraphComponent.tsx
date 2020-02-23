import React from "react";

interface Props {
    value: string,
}

export default class ParagraphComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement {
        return <p>{this.props.value}</p>;
    }
}
