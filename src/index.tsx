import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import "./style.scss";

import {App, store} from "./app";
import {addTodo, removeTodo} from "./app/Operation/Manufacture";
import {down, up} from "./app/Operation/Move";
import Mode from "./mode";
import {changeMode} from "./app/Operation/Mode";

const ROOT: HTMLElement | null = document.getElementById('root');

if (ROOT != null) {
    ReactDOM.render(<Provider store={store}><App /></Provider>, ROOT);
    window.addEventListener('keydown', (e: KeyboardEvent): void => {
        switch (store.getState().mode) {
            case Mode.NORMAL:
                switch (e.key) {
                    case 'i':
                        store.dispatch(changeMode(Mode.INSERT));
                        break;
                    case 'o':
                        store.dispatch(addTodo(e.key));
                        break;
                    case 'D':
                        store.dispatch(removeTodo());
                        break;
                    case 'j':
                        store.dispatch(down());
                        break;
                    case 'k':
                        store.dispatch(up());
                        break;
                }
                break;
            case Mode.INSERT:
                if (e.ctrlKey && e.key === '[') store.dispatch(changeMode(Mode.NORMAL));
                break;
        }
    });
}

