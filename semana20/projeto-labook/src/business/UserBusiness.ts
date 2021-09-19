import { SingupInputDTO, User } from "../entities/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
    async singup(input: SingupInputDTO): Promise<string> {
        try {
            if (!input.name || !input.email || !input.password) {
                throw new Error('"name", "email" and "password" must be provided')
            }
    
            const idGenerator = new IdGenerator() 
            const id: string = idGenerator.generateId()
    
            const hashManager = new HashManager()
            const cyberPassword = await hashManager.hash(input.password)

            const user: User = {
                id, 
                name: input.name,
                email: input.email,
                password: cyberPassword
            }
            const userDatabase = new UserDatabase
            await userDatabase.insertUser(user)

            const authenticator = new Authenticator
            const token: string = authenticator.generateToken({id})

            return token
        
        } catch(error: any) {
            throw new Error(error.message)
        }
        
    }
}


