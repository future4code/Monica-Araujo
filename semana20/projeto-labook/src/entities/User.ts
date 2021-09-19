export type AutheticationData = {
    id: string
}

export type User = {
    id: string, 
    name: string,
    email: string,
    password: string
}

export interface SingupInputDTO {
    name: string,
    email: string, 
    password: string
}