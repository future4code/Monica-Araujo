import app from "./app";
import connection from './connection'
import {Request, Response} from 'express'

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

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = ${id}
    `)
  
      return result[0][0]
}

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `);
    const count = result[0][0].count;
    return count;
};

const updateSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
}; 

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string);
        res.status(200).send({
        quantity: count,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
});

app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.delete("/actor/:id", async (req: Request, res: Response) => {
try {
    await deleteActor(req.params.id);
} catch (err) {
    res.status(400).send({
    message: err.message,
    });
}
});




