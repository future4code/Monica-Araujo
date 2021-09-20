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

export interface LoginUserDTO {
    email: string, 
    password: string
}

export function toUserModel(obj: any): User {
    return obj && {
        id: obj.id,
        email: obj.email,
        name: obj.name,
        password: obj.password
    }
}