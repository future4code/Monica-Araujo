import { connection } from "./index";

async function createTables(){
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labook_users(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `)

        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labook_post(
                id VARCHAR(255) PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                description VARCHAR(10000) NOT NULL,
                type ENUM("normal", "event") DEFAULT "normal",
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                author_id VARCHAR(255),
                FOREIGN KEY (author_id) REFERENCES labook_users (id)
            )
        `)

        console.log("Tables are created")
    } catch (error) {
        console.log(error)
    }
}

createTables()