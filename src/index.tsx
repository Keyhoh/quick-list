import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import "./style.scss";

import {App, store} from "./app";
import {addTodo, removeTodo} from "./app/Operation/Manufacture";
import {down, up} from "./app/Operation/Move";

const ROOT: HTMLElement | null = document.getElementById('root');

if (ROOT != null) {
    ReactDOM.render(<Provider store={store}><App /></Provider>, ROOT);
    window.addEventListener('keydown', (e: KeyboardEvent): void => {
        switch (e.key) {
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
    });
}

