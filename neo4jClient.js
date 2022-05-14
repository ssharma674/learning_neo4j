
const neo4j = require ('neo4j-driver');

const connectionString = process.env.NEO4J_CONNECTION_STRING || 'bolt://localhost:7687';
const user = process.env.USERNM || 'neo4j';
const pw = process.env.PASSWORD || 'password';

const session = neo4j
					.driver(connectionString, neo4j.auth.basic(user, pw))
					.session();



module.exports = class Neo4jclient {
	async  createEmployee (employee){
		let result = await session.run(`create (e:employee{name:'${employee.name}', emp_id:'${employee.emp_id}'}) return e`);
		return result;
	}

	async  findAllEmployees(){
		let employees = []
		let result = await session.run(`match (e :employee) return e`);
		
		for ( let e of result.records){
			  employees.push(e._fields[0].properties);
		}
		return employees;
	}

}