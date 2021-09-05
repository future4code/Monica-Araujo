import { BaseDatabase } from "./BaseDatabase";

const database = new BaseDatabase()

database
   .createTables()
   .then(database.insertUsers)
   .finally(database.closeConnection)