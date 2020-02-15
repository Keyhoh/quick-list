import {NoSuchContentsError} from "../Error";

export default class Cursor {
    private _list: any[];
    private _current: number;

    constructor(list: any[]) {
        this._list = list;
        this._current = list.length > 0 ? 0 : -1;
    }

    get current(): number {
        if (this._current < 0 || this._current >= this._list.length) throw  new NoSuchContentsError();
        return this._current;
    }

    go(): void {
        if (!this.hasContent(this._current + 1)) throw new NoSuchContentsError();
        this._current++;
    }

    back(): void {
        if (!this.hasContent(this._current - 1)) throw new NoSuchContentsError();
        this._current--;
    }

    private hasContent(point: number): boolean {
        return point >= 0 && point < this._list.length;
    }
}
