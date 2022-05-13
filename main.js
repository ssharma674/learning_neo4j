const express = require('express')
const bodyParser = require('body-parser');
const neo4j = require("neo4j-driver");
const path = require('path');

const app = express();
const port = 8080;

let employees = []

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('html'));

app.post('/employee', (req, res) => {
    const employee = req.body;
	employees.push(employee);
    res.send('successfuly added employee!');
});


app.get('/employees', (req, res) => {
    res.json(employees);
});

app.listen(port, () => console.log(`App started on port ${port}`));