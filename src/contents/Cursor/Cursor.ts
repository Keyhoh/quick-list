import {NoSuchContentsError} from "../Error";

export interface CursorJSON<T> {
    contents: T[],
    current: number,
}

export default class Cursor<T> {
    private readonly _contents: T[];
    private _current: number;

    private constructor(contents: T[], current: number = 0) {
        if (isNaN(current)) throw new NoSuchContentsError();
        this._contents = contents ?? [];
        if (this._contents.length === 0) {
            this._current = -1;
        } else {
            this._current = [0, current, contents.length - 1].sort((a: number, b: number): number => a - b)[1];
        }
    }

    get current(): number {
        if (this._current < 0 || this._current >= this._contents.length) throw  new NoSuchContentsError();
        return this._current;
    }

    get contents(): T[] {
        return [...this._contents];
    }

    public static of<T>(contents: T[]): Cursor<T> {
        return new Cursor<T>(contents);
    }

    static fromJSON<T>(json: CursorJSON<T>): Cursor<T> {
        return new Cursor<T>(json.contents, json.current);
    }

    next(): void {
        if (!this.hasContent(this._current + 1)) throw new NoSuchContentsError();
        this._current++;
    }

    prev(): void {
        if (!this.hasContent(this._current - 1)) throw new NoSuchContentsError();
        this._current--;
    }

    go(p: number): void {
        if (isNaN(p)) throw  new NoSuchContentsError();
        const DEST: number = p + (p < 0 ? this._contents.length : 0);
        console.log(DEST);
        if (!this.hasContent(DEST)) throw new NoSuchContentsError();
        this._current = DEST;
    }

    update(list: T[]): Cursor<T> {
        return Cursor.fromJSON<T>({contents: list, current: this._current});
    }

    toJSON(): CursorJSON<T> {
        return {
            contents: this._contents,
            current: this._current,
        };
    }

    private hasContent(p: number): boolean {
        return !isNaN(p) && p >= 0 && p < this._contents.length;
    }
}
