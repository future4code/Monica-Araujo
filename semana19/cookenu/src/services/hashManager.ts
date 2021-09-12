import {hashSync, compareSync, genSaltSync} from "bcryptjs"

export const generateHash = (
    plainText: string
): string => {
    const rounds: number = 12
    const salt: string = genSaltSync(rounds)
    return hashSync(plainText, salt)
}

export const compareHash = (
    plainText: string,
    cypherText: string
): boolean => compareSync(plainText, cypherText)