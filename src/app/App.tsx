import {connect} from 'react-redux';

import {AppComponent, AppProps} from "../components";
import {State} from "./State";

const mapStateToProps = (state: State): AppProps => {
    return state;
};

export default connect(mapStateToProps)(AppComponent);
