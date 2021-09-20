import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import dotenv from "dotenv";
import knex, {Knex} from 'knex'
import { UserController } from './controllers/UserController';

dotenv.config();

export const connection: Knex = knex({
   client: 'mysql',
   connection: {
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_SCHEMA,
       port: 3306,
       multipleStatements: true
   }
})

const app: Express = express();

app.use(express.json());
app.use(cors());

const userController = new UserController()
app.use("/signup", userController.singup)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});