import TooLongNameError from "../Error/TooLongNameError";

export default class Name {
    readonly value: string;

    constructor(value: string) {
        Name.validate(value);
        this.value = value;
    }

    private static validate(value: string): void {
        if (value.length > 32) throw new TooLongNameError();
    }
}
