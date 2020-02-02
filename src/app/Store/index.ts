import {createStore, combineReducers} from 'redux';

import {Reducer, State} from "../NormalMode/reducers";

export type AppState = { state: State };

const rootReducer = combineReducers<AppState>({state: Reducer});

export default createStore(rootReducer);
