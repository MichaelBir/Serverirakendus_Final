const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const todoRouter = require('./routes/todo.routes');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());

db.connect((error) => {
    if(error){
        console.log('Connection failed.');
        console.log(error);
    } else {
        console.log('Connection initiated.')
    }
});

app.use('/', todoRouter );

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});



