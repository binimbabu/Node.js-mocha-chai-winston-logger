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
// Employee.create = (newEmployee, result) => {
//   sql.query("INSERT INTO employee SET ?", newEmployee, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }
//     console.log("created tutorial: ", { id: res.insertId, ...newEmployee });
//     result(null, { id: res.insertId, ...newEmployee });
//   });
// };
Employee.findById = (id, result) => {
  sql.query(`SELECT * FROM employee WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found employee: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};
Employee.getAll = (id, result) => {
  let query = "SELECT * FROM employee";
 
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("employees: ", res);
    result(null, res);
  });
};




module.exports.addEmployee = (empData, callback) => {
  let query = `insert into employee 
  values 
  ('${empData.id}',
  '${empData.name}',
      '${empData.email}',
      '${empData.mobile_number}',
      '${empData.joining_date}',
      '${empData.role}')`;
  dbModels.sequelize.query(query,
      { type: dbModels.sequelize.QueryTypes.INSERT })
      .then(function (result) {
          // if(result.length > 0)
          return callback(null, result);

      }).catch((err) => {
          return callback(false, null)
      })
}

module.exports.employeeSearch = (empData, callback) => {
  // esClient.create
  let query = ` select * from employee where ${empData.columnName} like '%${empData.searchText}%'`;
  dbModels.sequelize.query(query,
      {
          type: dbModels.sequelize.QueryTypes.SELECT
      })
      .then(function (result) {
          // if(result.length > 0)
          return callback(null,result);

      }).catch((err) => {
          return callback(false, null)
      })
}


module.exports.listEmployeeCount= (doc, callback) => {
  // esClient.create
  let query = ` 
          select count(*) from employee  
          limit ${doc.limit} 
          offset ${doc.pageNumber} 
  `;
  dbModels.sequelize.query(query,
      { type: dbModels.sequelize.QueryTypes.SELECT })
      .then(function (result) {
          // if(result.length > 0)
          return callback(null,result[0]);

      }).catch((err) => {
          return callback(false, null)
      })

}

module.exports.listEmployee= (doc, callback) => {
 

  let query = ` 
          select * from employee 
          limit ${doc.limit} 
          offset ${doc.pageNumber} 
  `;
  sql.sequelize.query(query,
      { type: dbModels.sequelize.QueryTypes.SELECT })
      .then(function (result) {
          // if(result.length > 0)
          return callback(null,result);

      }).catch((err) => {
          return callback(false, null)
      })

}


module.exports.create = (newEmployee, result) => {
  sql.query("INSERT INTO employee SET ?", newEmployee, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created tutorial: ", { id: res.insertId, ...newEmployee });
    result(null, { id: res.insertId, ...newEmployee });
  });
};