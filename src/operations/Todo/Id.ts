import UUID from 'uuid-random';

export default class Id {
    readonly value: string;

    constructor() {
        this.value = UUID();
    }
}
