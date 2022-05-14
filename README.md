# learning_neo4j

To run the application 

1) Install Node.js
2) Have a running instance of a neo4j database accessable via url, username, and password
3) create a .env file in the root of the project and add the following properties

* PORT= --local port to run the app on
* NEO4J_CONNECTION_STRING= --connection string to the neo4j database
* USERNM= --user name for the neo4j database
* PASSWORD= --password for the neo4j database

4) Instal required npm packages using the following command

npm install

5) Start the application using the following command

node main.js
  
6) At this point the application should be running and accessible using http://localhost:<port used in the .env file>

