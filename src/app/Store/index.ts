import {combineReducers, createStore} from 'redux';

import Reducer from "../Reducer";
import {State} from "../State";

export type AppState = { state: State };

const rootReducer = combineReducers<AppState>({state: Reducer});

export default createStore(rootReducer);
