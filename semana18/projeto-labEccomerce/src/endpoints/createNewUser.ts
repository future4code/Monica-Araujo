import { Request, Response } from "express";
import { UserDatabase } from "../data/users/UserDatabase";
import { User } from "../entities/Users";
import { CustomError } from "../error/CustomError";
import { IdGenerator } from "../services/IdGenerator";

export const createNewUser = async (
    req: Request, 
    res: Response
) => {
    try {
        const userDB = new UserDatabase()

        const {name, age, email} = req.body

        const id = new IdGenerator().execute()

        const newUser = new User(
            id,
            name, 
            email,
            age
        )

        await userDB.createNewUser(newUser)
        res.status(201).send({user: newUser})
    } catch (error) {
        if (error instanceof CustomError){
            res
                .status(error.statusCode)
                .send(error.message)
        } else {
            res
                .status(200)
                .send("Internal Error!")
        }
    }
}