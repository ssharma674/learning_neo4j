const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const Neo4jClient = require('./neo4jClient');
let neo4jClient = new Neo4jClient();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('static'));

app.post('/employee', (req, res) => {
    const employee = req.body;
	neo4jClient.createEmployee(employee).then(
	  (emp) =>  res.send('successfuly added employee!'),
	  (error) => console.log(error)
	);
});


app.get('/employees', (req, res) => {
	neo4jClient.findAllEmployees().then(
		(emp) => res.json(emp),
		(error) => console.log(error)
	);
    
});

app.listen(port, () => console.log(`App started on port ${port}`));
