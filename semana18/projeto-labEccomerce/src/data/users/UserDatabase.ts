import { User } from "../../entities/Users";
import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase {

   private static tableName = "labecommerce_users"

   private toUser = (input: any): User => new User(
      input.id,
      input.name,
      input.email,
      input.age
   )

   createNewUser = (user: User) =>
      BaseDatabase
         .connection(UserDatabase.tableName)
         .insert(user)


   getAllUsers = async () => {
      const result = await BaseDatabase
         .connection(UserDatabase.tableName)

      return result.map(this.toUser)
   }
}