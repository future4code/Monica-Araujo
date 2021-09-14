import { app } from "./app";
import { createNewUser } from "./endpoints/createNewUser";
import { getAllUsers } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers)
app.post("/users", createNewUser)
