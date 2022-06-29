const sql = require("../sqlClient.js");
const { QueryTypes } = require('sequelize');
var dbModels = require('../sqlClient');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { query } = require('express')
const Attendance = function(attendance) {
  this.id = attendance.id;
  this.present_Date = attendance.present_Date;
  this.present = attendance.present;
};
Attendance.create = (newattendance, result) => {
  sql.query("INSERT INTO attendance SET ?", newattendance, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created attendance: ", { id: res.insertId, ...newattendance });
    result(null, { id: res.insertId, ...newattendance });
  });
};
 
Attendance.listAllEmpAttendence = (empData, callback) => {
  // esClient.create
  let query = ` select * from attendance where present_Date= '${empData.present_Date}'`;
  sql.sequelize.query(query,
      {
          type: dbModels.sequelize.QueryTypes.SELECT
      })
      .then(function (result) {
          return callback(null,result);

      }).catch((err) => {
          return callback(false, null)
      })
}

module.exports = Attendance;