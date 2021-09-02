import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUsersByName } from "./endpoints/getUsersByName"
import { getUsersByType } from "./endpoints/getUsersByType"
import { orderUsersByName } from "./endpoints/orderUsersByName"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/allUsers", getAllUsers)
app.get("/users/name", getUsersByName)
app.get("/users/:type", getUsersByType)
app.get("/users/orderd", orderUsersByName)


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})