import {connect} from 'react-redux';

import {AppComponent, AppProps} from "../components";
import {AppState} from "./Store";
import {Cursor} from "../contents";

const mapStateToProps = ({state}: AppState): AppProps => {
    let list = [...state.list];
    return {list: list, cursor: new Cursor(list)};
};

export default connect(mapStateToProps)(AppComponent);
