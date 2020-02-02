import {connect} from 'react-redux';

import {AppComponent, AppProps} from "../components";
import {TodoList} from "../contents";
import {AppState} from "./Store";

const mapStateToProps = ({state}: AppState): AppProps => {
    return {todoList: new TodoList(state.list)};
};

export default connect(mapStateToProps)(AppComponent);
