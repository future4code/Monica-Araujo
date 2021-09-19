import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SingupInputDTO } from "../entities/User";

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
}