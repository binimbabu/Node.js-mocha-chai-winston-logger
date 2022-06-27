const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  port: dbConfig.port,
  password: dbConfig.password,
  database: dbConfig.database,
  
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;