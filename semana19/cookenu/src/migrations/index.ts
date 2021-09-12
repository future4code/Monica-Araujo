import connection from '../connection' 
import { recipeTableName, userTableName } from '../types'

connection.raw(`
    CREATE TABLE ${userTableName} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE, 
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE  ${recipeTableName} (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(20000) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        author_id VARCHAR(255),
        FOREING KEY (author_id) REFERENCES ${userTableName} (id)
    )
`).then (() => console.log(
    "Tabelas criadas com sucesso"
)).catch(error => 
    console.log(error.message)
)