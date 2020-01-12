import NoSuchContents from "../Error/NoSuchContents";

export default class Cursor {
    private _list: any[];
    private _current: number;

    constructor(list: any[]) {
        this._list = list;
        this._current = list.length > 0 ? 0 : -1;
    }

    get current(): number {
        if (this._current < 0 || this._current >= this._list.length) throw  new NoSuchContents();
        return this._current;
    }

    go(): void {
        if (this._list.length - this._current <= 1) throw new NoSuchContents();
        this._current++;
    }

    back(): void {
        if (this._current <= 0) throw new NoSuchContents();
        this._current--;
    }
}
