const sql = require("../sqlClient");
const { QueryTypes } = require('sequelize');
var dbModels = require('../sqlClient');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { query } = require('express')

// constructor
const Employee = function(employee) {
  this.name = employee.name;
  this.email = employee.email;
  this.mobile_number = employee.mobile_number;
  this.joining_date = employee.joining_date;
  this.role = employee.role;
};

module.exports.addEmployee = async (empData) => {
  let query = `insert into employee 
  values 
  ('${empData.id}',
  '${empData.name}',
      '${empData.email}',
      '${empData.mobile_number}',
      '${empData.joining_date}',
      '${empData.role}')`;
  const result = await dbModels.sequelize.query(query,
      { type: dbModels.sequelize.QueryTypes.INSERT })
      return result;
}

module.exports.employeeSearch = async (empData, callback) => {
  // esClient.create
  let query = ` select * from employee where ${empData.columnName} like '%${empData.searchText}%'`;
  let result = await dbModels.sequelize.query(query,
      {
          type: dbModels.sequelize.QueryTypes.SELECT
      })
      return result;
}


module.exports.listEmployeeCount= async (doc) => {
  // esClient.create
  let query = ` 
          select count(*) from employee  
          limit ${doc.limit} 
          offset ${doc.pageNumber} 
  `;
   const result = await dbModels.sequelize.query(query,
      { type: dbModels.sequelize.QueryTypes.SELECT })
      return result;

}

module.exports.listEmployee= async (doc) => {
 

  let query = ` 
          select * from employee 
          limit ${doc.limit} 
          offset ${doc.pageNumber} 
  `;
  const result = await sql.sequelize.query(query,
      { type: dbModels.sequelize.QueryTypes.SELECT })
      
      return result;

}


