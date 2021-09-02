import { Request, Response } from "express"
import { connection } from "../data/connection"
import { selectOrderedUsers } from "../queries/selectOrderUsers"

export const orderUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
        const users = await selectOrderedUsers()
        const sort = req.query.sort || "email"
        const order = req.query.order || "asc"

        if (sort !== "email" && sort !=="name" && sort !=="type") {
            res.statusCode = 422
            throw new Error ('Sort must be either "email", "name" or "type"')
        }

        if (order !== "asc" && order !=="desc") {
            res.statusCode = 422
            throw new Error ('Order must be either "asc" or "desc" ')
        }

        const result = await connection("aula48_exercicio")
        .orderBy(sort, order)

        res.status(200).send(result)

    } catch (error) {
        if (res.statusCode ===200){
            res.status(500).send("internal server error")
        } else {
            res.send(error.message)
        }
    }
}