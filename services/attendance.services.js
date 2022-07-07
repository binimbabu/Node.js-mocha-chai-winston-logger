const sql = require("../sqlClient");
const { QueryTypes } = require('sequelize');
var dbModels = require('../sqlClient');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { query } = require('express')
const Attendance = function (attendance) {
  this.id = attendance.id;
  this.present_Date = attendance.present_Date;
  this.present = attendance.present;
};

function checkAttendance(err, res) {


  if (err) {
    console.log("error: ", err);
    cb(err, null);

    return;
  }
  else {

    console.log("created attendance: ", { id: res.insertId, ...newattendance });

    return cb(null, { id: res.insertId, ...newattendance });
  }


}


// Attendance.create = (newattendance, cb) => {
//   let query = `insert into attendance(id,present_Date,present) values(${newattendance.id}, '${newattendance.present_Date}', ${newattendance.present})`;
//   sql.sequelize.query(query, checkAttendance
//   )
// };

Attendance.create = (newattendance, callback) => {
  let query = `insert into attendance(id,present_Date,present) values(${newattendance.id}, '${newattendance.present_Date}', ${newattendance.present})`;
  dbModels.sequelize.query(query,
    { type: dbModels.sequelize.QueryTypes.INSERT })
    .then(function (result) {
        // if(result.length > 0)
        return callback(null, result);

    }).catch((err) => {
        return callback(false, null)
    })
  
};


Attendance.listAllEmpAttendence = (empData, callback) => {
  // esClient.create
  let query = ` select * from attendance where present_Date= '${empData.present_Date}'`;
  sql.sequelize.query(query,
    {
      type: dbModels.sequelize.QueryTypes.SELECT
    })
    .then(function (result) {
      return callback(null, result);

    }).catch((err) => {
      return callback(false, null)
    })
}





Attendance.viewEmpAttendence = (empData, callback) => {
  let query = `select * from attendance where id = ${empData.id}
   limit ${empData.limit} offset ${empData.offset}`;
  sql.sequelize.query(query,
    { type: sql.sequelize.QueryTypes.SELECT })
    .then(function (result) {
      return callback(null, result);

    }).catch((err) => {

      return callback(false, null)
    })
}

module.exports = Attendance;