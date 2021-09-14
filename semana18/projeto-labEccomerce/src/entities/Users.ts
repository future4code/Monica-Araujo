import { CustomError } from "../error/CustomError";

export class User {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly age: number
    ) {
        if (typeof name !=="string" || typeof email !=="string") {
            throw new CustomError(422, "name and email must be a string")
        }
        if (typeof age !=="number") {
            throw new CustomError(422, "age must be a number")
        }
    }
}