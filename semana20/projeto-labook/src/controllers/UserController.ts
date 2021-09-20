import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginUserDTO, SingupInputDTO } from "../entities/User";

export class UserController {

    async singup(req: Request, res:Response) {

        try {
            let message =  "Success!"
            const {name, email, password} = req.body
            
            const input: SingupInputDTO = {
                name: name,
                email: email,
                password: password
            }

            const userBusiness = new UserBusiness
            const token = await userBusiness.singup(input) 

            res.status(201).send({message, token})

        } catch (error: any) {
            console.log(error.message)
            res.status(500).send("Internal server error")
        }
    }

    async login(req: Request, res: Response) {
        try {
            let message = "Success!"

            const {email, password} = req.body
            const input: LoginUserDTO = {
                email: email, 
                password: password
            }

            const token = await new UserBusiness().login(input)

            res.status(200).send({message, token})

        } catch (error: any) {
            let message = error.message || error.sqlMessage
            res.statusCode = 400
            res.send({message})
        }
        
    }
}