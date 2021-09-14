import knex from "knex"
import users from './users/users.json'

export class BaseDatabase {

   protected static connection = knex({
      client: "mysql",
      connection: {
         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_SCHEMA,
         port: 3306,
         multipleStatements: true
      }
   })

   private printError = (error: any) => {
      console.log(error.sqlMessage || error.message)
   }

   createTables = () => BaseDatabase
      .connection
      .raw(`

         CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            age INT NOT NULL
         );
         
      `)
      .then(() => { console.log("Tables successfully created") })
      .catch(this.printError)

   insertUsers = () => BaseDatabase
      .connection("labecommerce_users")
      .insert(users)
      .then(() => { console.log("Users saved") })
      .catch(this.printError)

   closeConnection = () => {
      BaseDatabase.connection.destroy()
   }
}