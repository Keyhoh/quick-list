import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import App from "./index";

let container: HTMLElement = document.createElement('div');
describe('Test for App', (): void => {
    test('App has "Hello, world!".', (): void => {
        act((): void => void ReactDOM.render(<App />, container));
        expect(container.textContent).toBe("Hello, world!");
    });
});
