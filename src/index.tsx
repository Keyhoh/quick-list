import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from "./App";
import store from "./App/Store";
import {addTodo, removeTodo} from "./App/NormalMode/actions";

const ROOT: HTMLElement | null = document.getElementById('root');

if (ROOT != null) {
    ReactDOM.render(<Provider store={store}><App /></Provider>, ROOT);
    window.addEventListener('keydown', (e:KeyboardEvent): void => {
        if(!e.shiftKey){
            store.dispatch(addTodo(e.key));
        }else{
            store.dispatch(removeTodo());
        }
    });
}

