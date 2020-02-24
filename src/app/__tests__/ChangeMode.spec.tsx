import {act} from "react-dom/test-utils";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store";
import App from "../App";
import React from "react";
import Mode from "../../mode";
import {addInsert, changeMode, Direction} from "../Operation/Mode";

describe('Change mode test', (): void => {
    let container: HTMLElement = document.createElement('div');

    beforeEach((): void => {
        act((): void => void ReactDOM.render(<Provider store={store}><App /></Provider>, container));
    });

    test('Initial mode is Normal.', (): void => {
        expect(store.getState().mode).toEqual(Mode.NORMAL);
    });

    test('It is able to change mode.', (): void => {
        expect(store.getState().mode).toEqual(Mode.NORMAL);
        store.dispatch(changeMode(Mode.INSERT));
        expect(store.getState().mode).toEqual(Mode.INSERT);
        store.dispatch(changeMode(Mode.NORMAL));
        expect(store.getState().mode).toEqual(Mode.NORMAL);
    });

    test('It is able to add todo and change to insert mode.', (): void => {
        expect(store.getState().mode).toEqual(Mode.NORMAL);
        expect(store.getState().contents).toEqual([]);
        store.dispatch(addInsert(Direction.Below));
        expect(store.getState().mode).toEqual(Mode.INSERT);
        expect(store.getState().contents.length).toBe(1);

        store.dispatch(changeMode(Mode.NORMAL));

        expect(store.getState().mode).toEqual(Mode.NORMAL);
        expect(store.getState().contents.length).toBe(1);
        store.dispatch(addInsert(Direction.Above));
        expect(store.getState().mode).toEqual(Mode.INSERT);
        expect(store.getState().contents.length).toBe(2);
    });
});
