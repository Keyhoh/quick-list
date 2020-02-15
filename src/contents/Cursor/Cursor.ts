import {NoSuchContentsError} from "../Error";

export default class Cursor<T> {
    private readonly _list: T[];
    private _current: number;

    constructor(list: T[]) {
        this._list = list;
        this._current = list.length > 0 ? 0 : -1;
    }

    get all(): T[] {
        return [...this._list];
    }

    get current(): T {
        if (this._current < 0 || this._current >= this._list.length) throw  new NoSuchContentsError();
        return this._list[this._current];
    }

    next(): void {
        if (!this.hasContent(this._current + 1)) throw new NoSuchContentsError();
        this._current++;
    }

    prev(): void {
        if (!this.hasContent(this._current - 1)) throw new NoSuchContentsError();
        this._current--;
    }

    private hasContent(point: number): boolean {
        return point >= 0 && point < this._list.length;
    }
}
