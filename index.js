const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql');
const { dbConfig } = require('./config/config');


const connectwithRetry = () => {
   const connection = mysql.createConnection(dbConfig);
    connection.connect((err) => {
         if (err) {
              console.error('Failed to connect to MySQL - retrying in 5 sec', err);
              setTimeout(connectwithRetry, 5000);
         }  
         else{
            console.log('Connected to MySQL');
         }
    }
    );
    };
connectwithRetry();


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


