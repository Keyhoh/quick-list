import {connect} from 'react-redux';

import {AppComponent, AppProps} from "../components";
import {AppState} from "./Store";

const mapStateToProps = ({state}: AppState): AppProps => {
    return state;
};

export default connect(mapStateToProps)(AppComponent);
