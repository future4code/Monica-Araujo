import {v4} from "uuid"

export class IdGerenator {
    public generate(): string {
        return v4()
    }
}