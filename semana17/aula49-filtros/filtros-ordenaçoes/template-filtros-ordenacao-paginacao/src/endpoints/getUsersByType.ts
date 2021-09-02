import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
    try {
        const type = req.params.type

        const result = await connection("aula48_exercicio")
        .where("type", "LIKE", `%${type}%` )

        if(result.length <=0 ){
            res.status(400).send("Usuário não encontrado")
        }

        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}