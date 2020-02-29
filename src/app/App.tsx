import {connect} from 'react-redux';

import {AppProps, TodoListComponent} from "../components";
import {State} from "./State";

const mapStateToProps = (state: State): AppProps => {
    return state;
};

export default connect(mapStateToProps)(TodoListComponent);
