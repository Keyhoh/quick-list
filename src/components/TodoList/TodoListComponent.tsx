import React from 'react';
import TodoList from "../../operations/TodoList";
import TodoComponent from "../Todo/TodoComponent";
import Todo from "../../operations/Todo";
import UUID from 'uuid-random';

export interface Props {
    todoList: TodoList;
}

export default class TodoListComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    mountTodoComponent(): JSX.Element[] {
        return this.props.todoList.contents.map((todo: Todo) => <TodoComponent key={UUID()} todo={todo} />);
    }

    render(): React.ReactElement {
        return <div>
            {this.mountTodoComponent()}
        </div>
    }
}
