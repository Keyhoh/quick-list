import TooLongNameError from "../Error/TooLongNameError";
import EmptyNameError from "../Error/EmptyNameError";

export default class Name {
    readonly value: string;

    constructor(value: string) {
        Name.validate(value);
        this.value = value;
    }

    private static validate(value: string): void {
        const length = value.length;
        if (length == 0) throw new EmptyNameError();
        // Googleの検索結果の表示が30字前後なので、これに合わせる。
        if (length > 32) throw new TooLongNameError();
    }
}
