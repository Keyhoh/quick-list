import {helloWorld} from "./index";

test('basic', () => {
    expect(helloWorld()).toBe('Hello, world!');
});
