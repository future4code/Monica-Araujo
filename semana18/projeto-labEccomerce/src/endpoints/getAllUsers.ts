import { Request, Response } from "express";
import { UserDatabase } from "../data/users/UserDatabase";
import { CustomError } from "../error/CustomError";

export const getAllUsers = async (
   req: Request,
   res: Response
) => {
   try {

      const users = await new UserDatabase().getAllUsers()

      res.send(users)

   } catch (error) {

      if (error instanceof CustomError)
         res
            .status(error.statusCode)
            .send(error.message)
      else
         res
            .status(500)
            .send("Internal error, please contact support")
   }
}