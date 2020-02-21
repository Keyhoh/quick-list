import {NoSuchContentsError} from "../Error";

export interface CursorJSON<T> {
    list: T[],
    current: number,
}

export default class Cursor<T> {
    private readonly _list: T[];
    private _current: number;

    private constructor(list: T[], current: number = 0) {
        if (isNaN(current)) throw new NoSuchContentsError();
        this._list = list;
        if (list.length === 0) {
            this._current = -1;
        } else {
            this._current = [0, current, list.length - 1].sort((a: number, b: number): number => a - b)[1];
        }
    }

    get current(): number {
        if (this._current < 0 || this._current >= this._list.length) throw  new NoSuchContentsError();
        return this._current;
    }

    get all(): T[] {
        return [...this._list];
    }

    public static of<T>(list: T[]): Cursor<T> {
        return new Cursor<T>(list);
    }

    static fromJSON<T>(json: CursorJSON<T>): Cursor<T> {
        return new Cursor<T>(json.list, json.current);
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

    update(list: T[]): Cursor<T> {
        return Cursor.fromJSON<T>({list: list, current: this._current});
    }

    toJSON(): CursorJSON<T> {
        return {
            list: this._list,
            current: this._current,
        };
    }
}
