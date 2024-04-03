const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db',
    user: 'user',
    password: 'pass',
    database: 'test',
    port: '3306'
    });
app.get('/', (req, res) => {
    res.send('Hello World!!');
    });
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;
        res.send(rows);
        });
    });

app.listen(port, () => {
    console.log(`Docker app listening at http://localhost:${port}`);
    }
)


