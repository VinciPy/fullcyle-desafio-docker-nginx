import pkg from 'pg';
const {Client} = pkg;
import express from 'express';

const app = express();
const port = 3000;

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const connection = new Client({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});
connection.connect().then(()  => console.log('connected'));

connection.query(`
    CREATE TABLE IF NOT EXISTS people (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(255) NOT NULL
    )
`);

app.get('/', (req, res) => {
    const sql = `INSERT INTO people(name) values('Pedro')`;
    connection.query(sql);
    connection.query(`SELECT * FROM people`, (err, results) => {
        if (err) throw err;
        let names = results.rows.map(row => row.name).join('<br>');
        res.send(`<h1>Full Cycle Rocks!</h1><br>${names}`);
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
