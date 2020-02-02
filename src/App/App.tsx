import TodoListComponent from "../components/TodoList";
import TodoList from "../operations/TodoList";
import {Props} from "../components/TodoList/TodoListComponent";
import {connect} from "react-redux";
import {AppState} from "./Store";

const mapStateToProps = ({state}: AppState): Props => {
    return {todoList: new TodoList(state.list)};
};

export default connect(mapStateToProps)(TodoListComponent);
