import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import "./style.scss";

import {App, store} from "./app";
import {removeAll, removeTodo} from "./app/Operation/Manufacture";
import {down, up} from "./app/Operation/Move";
import Mode from "./mode";
import {addInsert, changeMode, Direction} from "./app/Operation/Mode";

if (document.body != null) {
    ReactDOM.render(<div><Provider store={store}><App /></Provider></div>, document.body);
    window.addEventListener('keydown', (e: KeyboardEvent): void => {
        switch (store.getState().mode) {
            case Mode.NORMAL:
                switch (e.key) {
                    case 'c':
                        store.dispatch(changeMode(Mode.INSERT));
                        break;
                    case 'o':
                        store.dispatch(addInsert(Direction.Below));
                        break;
                    case 'O':
                        store.dispatch(addInsert(Direction.Above));
                        break;
                    case 'd':
                        store.dispatch(removeTodo());
                        break;
                    case 'D':
                        store.dispatch(removeAll());
                        break;
                    case 'j':
                        store.dispatch(down());
                        break;
                    case 'k':
                        store.dispatch(up());
                        break;
                    default:
                        return;
                }
                e.preventDefault();
                break;

            case Mode.INSERT:
                if (e.ctrlKey && e.key === '[' || e.key === 'Escape' || e.key === 'Enter') store.dispatch(changeMode(Mode.NORMAL));
                break;
        }
    });
}

