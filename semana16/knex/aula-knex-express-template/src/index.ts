import app from "./app";
import connection from './connection'

app.get("/", async (req, res) => {
    const result = await connection.raw("SHOW TABLES")
    console.log(result)
    res.send('Hello from express')
})

/*app.post ("/actors", async (req, res) => {
    try {
        await connection.raw(``)
    } catch (error){
        res.status(500).send('Erro')
    }
})*/

